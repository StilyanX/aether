// STAR WARS · EPISODE I · THE PHANTOM MENACE
// Hand-rolled SVG narrative diagrams: scene timelines, character webs, ship
// layouts, race course, political power web, battle map. Each component takes
// a `C` color object from `useVizColors()` (passed by the consuming page).

import React from 'react'
import { scaleLinear } from 'd3-scale'
import { VizFigure } from '../../../viz-figure'
import { Diagram } from '../../diagram'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import BoontaEveCourseTrack from '../../../../assets/viz/boonta-eve-course.svg?react'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_TEX,
  FONT_VALUE,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../scale-tokens'

const TFA_BEATS = [
  ['Opening', 'Crawl'],
  ['Cruiser', 'Approach'],
  ['Docking', 'Bay'],
  ['Conference', 'Room'],
  ['Gas', 'Attack'],
  ['Destroyer', 'Droids'],
  ['Hidden', 'Army'],
  ['Amidala', 'Transmission']
]

export function TfaSceneTimeline() {
  const C = useVizColors()
  const W = 900
  const H = 150
  const padX = 60
  const yLine = H / 2
  const x = scaleLinear()
    .domain([0, TFA_BEATS.length - 1])
    .range([padX, W - padX])
  return (
    <VizFigure title="Trade Federation Scene Timeline" size="wide" aspect="6/1">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)',
          color: C.fg
        }}
      >
        <line
          x1={padX}
          y1={yLine}
          x2={W - padX}
          y2={yLine}
          stroke={C.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        {TFA_BEATS.map((beat, i) => {
          const cx = x(i)
          const above = i % 2 === 0
          const y1 = above ? yLine - 22 : yLine + 26
          const y2 = above ? yLine - 38 : yLine + 42
          return (
            <g key={i}>
              <circle cx={cx} cy={yLine} r={6} fill={C.fg} />
              <text x={cx} y={y1} textAnchor="middle" fill={C.fg} fontSize={FONT_TEX}>
                {beat[0]}
              </text>
              <text x={cx} y={y2} textAnchor="middle" fill={C.fg} fontSize={FONT_TEX}>
                {beat[1]}
              </text>
            </g>
          )
        })}
      </svg>
    </VizFigure>
  )
}

const TFA_CHARACTER_NODES = [
  {
    id: 'jedi',
    width: 200,
    height: 100,
    labels: [{ text: 'JEDI', bold: true }, { text: 'Qui-Gon Jinn' }, { text: 'Obi-Wan Kenobi' }]
  },
  {
    id: 'federation',
    width: 220,
    height: 120,
    labels: [
      { text: 'FEDERATION', bold: true },
      { text: 'Nute Gunray' },
      { text: 'Daultay Dofine' },
      { text: 'Rune Haako' }
    ]
  },
  {
    id: 'naboo',
    width: 220,
    height: 80,
    labels: [{ text: 'NABOO', bold: true }, { text: 'Queen Amidala' }]
  }
]

const TFA_CHARACTER_EDGES = [
  {
    id: 'e1',
    sources: ['federation'],
    targets: ['jedi'],
    style: 'dashed',
    labels: [{ text: 'ordered killed' }]
  },
  {
    id: 'e2',
    sources: ['jedi'],
    targets: ['naboo'],
    style: 'solid',
    labels: [{ text: 'serve' }]
  },
  {
    id: 'e3',
    sources: ['federation'],
    targets: ['naboo'],
    style: 'dashed',
    labels: [{ text: 'blockades' }]
  },
  {
    id: 'e4',
    sources: ['naboo'],
    targets: ['federation'],
    style: 'dashed',
    labels: [{ text: 'confronts' }]
  }
]

const TFA_LAYOUT_OPTIONS = {
  'elk.algorithm': 'layered',
  'elk.direction': 'RIGHT',
  'elk.spacing.nodeNode': '80',
  'elk.layered.spacing.nodeNodeBetweenLayers': '120',
  'elk.spacing.edgeNode': '30',
  'elk.spacing.edgeEdge': '30'
}

export function TfaCharacterWeb() {
  return (
    <Diagram
      id="SW.I.01.2"
      title="Trade Federation Character Web"
      size="body"
      aspect="800/430"
      nodes={TFA_CHARACTER_NODES}
      edges={TFA_CHARACTER_EDGES}
      layoutOptions={TFA_LAYOUT_OPTIONS}
    />
  )
}

const TFA_SHIP_NODES = [
  {
    id: 'docking',
    width: 160,
    height: 80,
    labels: [
      { text: 'DOCKING BAY', bold: true },
      { text: 'entry point', dim: true }
    ]
  },
  {
    id: 'hallway',
    width: 100,
    height: 80,
    labels: [{ text: 'HALLWAY', bold: true }]
  },
  {
    id: 'conference',
    width: 180,
    height: 110,
    labels: [
      { text: 'CONFERENCE', bold: true },
      { text: 'ROOM', bold: true },
      { text: 'gas attack here', dim: true }
    ]
  },
  {
    id: 'bridge',
    width: 170,
    height: 110,
    labels: [
      { text: 'BRIDGE', bold: true },
      { text: 'blast doors sealed', dim: true }
    ]
  },
  {
    id: 'hangar',
    width: 500,
    height: 100,
    labels: [
      { text: 'MAIN HANGAR BAY', bold: true },
      { text: 'Hidden army, thousands of battle droids loading onto landing craft', dim: true }
    ]
  }
]

const TFA_SHIP_EDGES = [
  { id: 's1', sources: ['docking'], targets: ['hallway'], style: 'solid' },
  { id: 's2', sources: ['hallway'], targets: ['conference'], style: 'solid' },
  { id: 's3', sources: ['conference'], targets: ['bridge'], style: 'solid' },
  {
    id: 's4',
    sources: ['conference'],
    targets: ['hangar'],
    style: 'dashed',
    labels: [{ text: 'vent shaft' }]
  }
]

const TFA_SHIP_LAYOUT_OPTIONS = {
  'elk.algorithm': 'layered',
  'elk.direction': 'RIGHT',
  'elk.spacing.nodeNode': '50',
  'elk.layered.spacing.nodeNodeBetweenLayers': '60',
  'elk.spacing.edgeNode': '30',
  'elk.padding': '[top=40,left=40,right=40,bottom=40]'
}

export function TfaShipLayout() {
  return (
    <Diagram
      id="SW.I.01.3"
      title="Trade Federation Cruiser Layout"
      size="body"
      aspect="800/520"
      nodes={TFA_SHIP_NODES}
      edges={TFA_SHIP_EDGES}
      layoutOptions={TFA_SHIP_LAYOUT_OPTIONS}
      containerTitle="Trade Federation Droid Control Ship"
    />
  )
}

export function TfaThemeMap() {
  const C = useVizColors()
  const halo = { stroke: 'var(--bg-elevated)', strokeWidth: 6, paintOrder: 'stroke' }
  const W = 800
  const H = 450
  const cx = W / 2
  const cy = H / 2 - 20
  return (
    <VizFigure title="Trade Federation Theme Map" size="body" aspect="16/9">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <line x1={cx} y1={30} x2={cx} y2={H - 60} stroke={C.dim} strokeWidth={STROKE_PRIMARY} />
        <line x1={40} y1={cy} x2={W - 40} y2={cy} stroke={C.dim} strokeWidth={STROKE_PRIMARY} />
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="14"
          letterSpacing="4"
          style={halo}
        >
          TENSION
        </text>
        <text
          x={W * 0.25}
          y={cy - 80}
          textAnchor="middle"
          fill={C.fg}
          fontSize="18"
          fontWeight="bold"
        >
          CALM
        </text>
        <text x={W * 0.25} y={cy - 56} textAnchor="middle" fill={C.dim} fontSize="14">
          Jedi
        </text>
        <text
          x={W * 0.75}
          y={cy - 80}
          textAnchor="middle"
          fill={C.fg}
          fontSize="18"
          fontWeight="bold"
        >
          PANIC
        </text>
        <text x={W * 0.75} y={cy - 56} textAnchor="middle" fill={C.dim} fontSize="14">
          Federation
        </text>
        <text
          x={W * 0.25}
          y={cy + 80}
          textAnchor="middle"
          fill={C.fg}
          fontSize="18"
          fontWeight="bold"
        >
          PRESENT
        </text>
        <text x={W * 0.25} y={cy + 104} textAnchor="middle" fill={C.dim} fontSize="14">
          Qui-Gon
        </text>
        <text
          x={W * 0.75}
          y={cy + 80}
          textAnchor="middle"
          fill={C.fg}
          fontSize="18"
          fontWeight="bold"
        >
          FUTURE ANXIETY
        </text>
        <text x={W * 0.75} y={cy + 104} textAnchor="middle" fill={C.dim} fontSize="14">
          Obi-Wan
        </text>
        <text
          x={cx}
          y={H - 20}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          letterSpacing="1"
        >
          COURTESY vs VIOLENCE | SMALL FORCE vs MASSIVE ARMY
        </text>
      </svg>
    </VizFigure>
  )
}

// Canonical Boonta Eve Classic course. Track geometry is authored vector art
// at src/assets/viz/boonta-eve-course.svg: a single closed bezier path drawn
// in three layers (translucent ribbon, crisp outline, dashed centerline). All
// colors are currentColor so the track adopts the theme fg.
export function BoontaRaceCourse() {
  const C = useVizColors()
  return (
    <VizFigure title="Boonta Eve Race Course" size="body" aspect="1200/700">
      <div style={{ position: 'relative', width: '100%', height: '100%', color: C.fg }}>
        <BoontaEveCourseTrack
          preserveAspectRatio="xMidYMid meet"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        />
        <svg
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Boonta Eve Classic race course"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            fontFamily: 'var(--reader-font-family)',
            pointerEvents: 'none'
          }}
        >
          <text
            x={600}
            y={360}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="currentColor"
            fillOpacity="0.14"
            fontSize="72"
            letterSpacing="8"
          >
            3 LAPS
          </text>
        </svg>
      </div>
    </VizFigure>
  )
}

const BOONTA_RACE_EVENTS = [
  { lap: 'PRE-RACE', text: "Sebulba sabotages Anakin's engine strap, undetected", type: 'threat' },
  {
    lap: 'START',
    text: "Green light fires. Anakin's engine stalls. All others roar ahead.",
    type: 'crisis'
  },
  {
    lap: 'LAP 1',
    text: 'Sebulba destroys Mawhonic on turn 1. Stakes established.',
    type: 'threat'
  },
  {
    lap: 'LAP 1',
    text: 'Anakin battles Gasgano. Leaps over him at cliff drop-off.',
    type: 'hero'
  },
  { lap: 'LAP 1', text: 'Tusken Raiders open fire on field. Racers scatter.', type: 'threat' },
  { lap: 'LAP 2', text: 'Sebulba destroys Xelbree with side-exhaust vent.', type: 'threat' },
  {
    lap: 'LAP 2',
    text: 'Ody Mandrell pits. Droid DUM-4 sucked into engine, explodes.',
    type: 'action'
  },
  {
    lap: 'LAP 2',
    text: 'Ben Quadinaros: all four engines explode simultaneously.',
    type: 'action'
  },
  {
    lap: 'LAP 2',
    text: "Sebulba breaks Anakin's engine strap. Mechanical crisis.",
    type: 'crisis'
  },
  {
    lap: 'LAP 2',
    text: 'Anakin saves via service ramp. Force-instinct payoff. Climbs to second.',
    type: 'hero'
  },
  { lap: 'LAP 3', text: 'Anakin catches Sebulba. Side-by-side duel at full speed.', type: 'hero' },
  {
    lap: 'LAP 3',
    text: 'Steering rods hook together. Both Pods locked in tandem.',
    type: 'crisis'
  },
  {
    lap: 'LAP 3',
    text: "Anakin's arm breaks free. Sebulba hits ancient statue, crashes.",
    type: 'hero'
  },
  { lap: 'FINISH', text: 'Anakin wins. Crowd erupts. Probe droid observes Qui-Gon.', type: 'hero' }
]

export function BoontaRaceTimeline() {
  const C = useVizColors()
  const typeColors = { hero: C.fg, crisis: C.accent, action: C.dim, threat: C.dim }
  const W = 800
  const ROW_H = 44
  const TOP_PAD = 60
  const BOTTOM_PAD = 24
  const SPINE_X = 170
  const H = TOP_PAD + BOONTA_RACE_EVENTS.length * ROW_H + BOTTOM_PAD
  const yScale = scaleLinear()
    .domain([0, BOONTA_RACE_EVENTS.length - 1])
    .range([TOP_PAD + ROW_H / 2, TOP_PAD + (BOONTA_RACE_EVENTS.length - 0.5) * ROW_H])

  return (
    <VizFigure title="Podrace Event Timeline" size="body" aspect={`${W}/${H}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <g>
          <circle cx={SPINE_X - 40} cy={28} r={5} fill={C.fg} />
          <text x={SPINE_X - 30} y={32} fill={C.dim} fontSize="12" letterSpacing="1">
            HERO BEAT
          </text>
          <circle cx={SPINE_X + 72} cy={28} r={5} fill={C.accent} />
          <text x={SPINE_X + 82} y={32} fill={C.dim} fontSize="12" letterSpacing="1">
            CRISIS
          </text>
          <circle cx={SPINE_X + 152} cy={28} r={5} fill={C.dim} />
          <text x={SPINE_X + 162} y={32} fill={C.dim} fontSize="12" letterSpacing="1">
            ACTION / THREAT
          </text>
        </g>

        <line
          x1={SPINE_X}
          y1={TOP_PAD}
          x2={SPINE_X}
          y2={H - BOTTOM_PAD}
          stroke={C.dim}
          strokeWidth={STROKE_PRIMARY}
        />

        {BOONTA_RACE_EVENTS.map((ev, i) => {
          const cy = yScale(i)
          const dotColor = typeColors[ev.type] || C.dim
          return (
            <g key={i}>
              <text
                x={SPINE_X - 80}
                y={cy}
                textAnchor="end"
                dominantBaseline="middle"
                fill={C.dim}
                fontSize={FONT_LABEL}
                letterSpacing="1"
              >
                {ev.lap}
              </text>
              <circle cx={SPINE_X} cy={cy} r={5} fill={dotColor} />
              <line
                x1={SPINE_X + 6}
                y1={cy}
                x2={SPINE_X + 26}
                y2={cy}
                stroke={C.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={SPINE_X + 32}
                y={cy}
                dominantBaseline="middle"
                fill={ev.type === 'hero' ? C.fg : C.dim}
                fontSize={FONT_TEX}
              >
                {ev.text}
              </text>
            </g>
          )
        })}
      </svg>
    </VizFigure>
  )
}

const PODRACE_CHAR_NODES = [
  {
    id: 'anakin',
    width: 160,
    height: 80,
    labels: [
      { text: 'ANAKIN', bold: true },
      { text: 'slave / pilot / hero', dim: true }
    ]
  },
  {
    id: 'quigon',
    width: 160,
    height: 70,
    labels: [
      { text: 'QUI-GON', bold: true },
      { text: 'orchestrates the bet', dim: true }
    ]
  },
  {
    id: 'watto',
    width: 150,
    height: 70,
    labels: [
      { text: 'WATTO', bold: true },
      { text: 'owner / loser', dim: true }
    ]
  },
  {
    id: 'sebulba',
    width: 160,
    height: 70,
    labels: [
      { text: 'SEBULBA', bold: true },
      { text: 'rival / saboteur', dim: true }
    ]
  },
  {
    id: 'shmi',
    width: 160,
    height: 70,
    labels: [
      { text: 'SHMI', bold: true },
      { text: 'watching mother', dim: true }
    ]
  },
  {
    id: 'padme',
    width: 160,
    height: 70,
    labels: [
      { text: 'PADME', bold: true },
      { text: 'disguised queen', dim: true }
    ]
  }
]

const PODRACE_CHAR_EDGES = [
  {
    id: 'a-q',
    sources: ['anakin'],
    targets: ['quigon'],
    style: 'solid',
    labels: [{ text: 'coached / freed' }]
  },
  {
    id: 'a-w',
    sources: ['watto'],
    targets: ['anakin'],
    style: 'dashed',
    labels: [{ text: 'enslaved by' }]
  },
  {
    id: 'a-s',
    sources: ['anakin'],
    targets: ['sebulba'],
    style: 'dashed',
    labels: [{ text: 'rivals' }]
  },
  {
    id: 'a-sh',
    sources: ['shmi'],
    targets: ['anakin'],
    style: 'solid',
    labels: [{ text: 'son / farewell' }]
  },
  {
    id: 'a-p',
    sources: ['anakin'],
    targets: ['padme'],
    style: 'solid',
    labels: [{ text: 'dream / kiss' }]
  },
  {
    id: 'q-w',
    sources: ['quigon'],
    targets: ['watto'],
    style: 'solid',
    labels: [{ text: 'outwits via Force' }],
    layoutOptions: { 'elk.stress.desiredEdgeLength': '420' }
  }
]

const PODRACE_CHAR_LAYOUT_OPTIONS = {
  'elk.algorithm': 'stress',
  'elk.stress.desiredEdgeLength': '280',
  'elk.spacing.nodeNode': '110',
  'elk.spacing.edgeNode': '40',
  'elk.spacing.edgeEdge': '30',
  'elk.padding': '[top=50,left=50,right=50,bottom=50]'
}

export function PodraceCharacterWeb() {
  return (
    <Diagram
      id="SW.I.04.4"
      title="Podrace Character Relationships"
      size="body"
      aspect="800/600"
      nodes={PODRACE_CHAR_NODES}
      edges={PODRACE_CHAR_EDGES}
      layoutOptions={PODRACE_CHAR_LAYOUT_OPTIONS}
    />
  )
}

const DMS_CHAR_NODES = [
  {
    id: 'anakin',
    width: 160,
    height: 80,
    labels: [
      { text: 'ANAKIN', bold: true },
      { text: 'Center', dim: true }
    ]
  },
  {
    id: 'shmi',
    width: 160,
    height: 70,
    labels: [
      { text: 'SHMI', bold: true },
      { text: 'Mother', dim: true }
    ]
  },
  {
    id: 'quigon',
    width: 160,
    height: 70,
    labels: [
      { text: 'QUI-GON', bold: true },
      { text: 'Mentor', dim: true }
    ]
  },
  {
    id: 'threepio',
    width: 170,
    height: 70,
    labels: [
      { text: 'THREEPIO', bold: true },
      { text: 'Creation', dim: true }
    ]
  },
  {
    id: 'maul',
    width: 180,
    height: 70,
    labels: [
      { text: 'DARTH MAUL', bold: true },
      { text: 'Enemy', dim: true }
    ]
  },
  {
    id: 'kitster',
    width: 160,
    height: 70,
    labels: [
      { text: 'KITSTER', bold: true },
      { text: 'Friend', dim: true }
    ]
  },
  {
    id: 'padme',
    width: 190,
    height: 70,
    labels: [
      { text: 'PADME', bold: true },
      { text: 'Future Partner', dim: true }
    ]
  },
  {
    id: 'obiwan',
    width: 190,
    height: 70,
    labels: [
      { text: 'OBI-WAN', bold: true },
      { text: 'Future Master', dim: true }
    ]
  }
]

const DMS_CHAR_EDGES = [
  {
    id: 'a-sh',
    sources: ['anakin'],
    targets: ['shmi'],
    style: 'solid',
    labels: [{ text: 'separation / wound' }]
  },
  {
    id: 'a-q',
    sources: ['quigon'],
    targets: ['anakin'],
    style: 'solid',
    labels: [{ text: 'destiny / distance' }]
  },
  {
    id: 'a-p',
    sources: ['anakin'],
    targets: ['padme'],
    style: 'solid',
    labels: [{ text: 'japor snippet / care' }]
  },
  {
    id: 'a-o',
    sources: ['obiwan'],
    targets: ['anakin'],
    style: 'solid',
    labels: [{ text: 'skepticism / awe' }]
  },
  {
    id: 'a-k',
    sources: ['anakin'],
    targets: ['kitster'],
    style: 'solid',
    labels: [{ text: 'loyalty / farewell' }]
  },
  {
    id: 'a-t',
    sources: ['anakin'],
    targets: ['threepio'],
    style: 'solid',
    labels: [{ text: 'creator / unfinished' }]
  },
  {
    id: 'a-m',
    sources: ['maul'],
    targets: ['anakin'],
    style: 'dashed',
    labels: [{ text: 'witness to first clash' }]
  },
  {
    id: 'q-m',
    sources: ['quigon'],
    targets: ['maul'],
    style: 'dashed',
    labels: [{ text: 'first lightsaber duel' }],
    layoutOptions: { 'elk.stress.desiredEdgeLength': '380' }
  }
]

const DMS_CHAR_LAYOUT_OPTIONS = {
  'elk.algorithm': 'stress',
  'elk.stress.desiredEdgeLength': '300',
  'elk.spacing.nodeNode': '120',
  'elk.spacing.edgeNode': '40',
  'elk.spacing.edgeEdge': '30',
  'elk.padding': '[top=50,left=50,right=50,bottom=50]'
}

export function DmsCharacterWeb() {
  return (
    <Diagram
      id="SW.I.03.1"
      title="Departure and Maul Strikes Character Web"
      size="body"
      aspect="900/640"
      nodes={DMS_CHAR_NODES}
      edges={DMS_CHAR_EDGES}
      layoutOptions={DMS_CHAR_LAYOUT_OPTIONS}
    />
  )
}

export function DarkSideTimeline() {
  const C = useVizColors()
  const W = 1000
  const H = 280
  const yLine = H / 2
  const padX = 120
  const beats = [
    { label: 'PROBE DROID', sub: 'watches from hill' },
    { label: 'DROID REPORTS', sub: 'Maul receives signal' },
    { label: 'MAUL RIDES', sub: 'speeder to Mos Espa' },
    { label: 'FIRST STRIKE', sub: 'lightsaber drawn' },
    { label: 'REPELLED', sub: 'knocked off ramp' }
  ]
  const step = (W - padX * 2) / (beats.length - 1)
  const xs = beats.map((_, i) => padX + i * step)
  const pivot = 3

  const surveillanceEnd = (xs[1] + xs[2]) / 2
  const transitEnd = (xs[2] + xs[3]) / 2
  const phases = [
    { label: 'SURVEILLANCE', x0: xs[0] - 30, x1: surveillanceEnd },
    { label: 'TRANSIT', x0: surveillanceEnd, x1: transitEnd },
    { label: 'ASSAULT', x0: transitEnd, x1: xs[xs.length - 1] + 30 }
  ]

  return (
    <VizFigure title="Dark Side Threat Arc" size="body" aspect="1000/280">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Dark side escalation from covert surveillance to open assault"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        {phases.map((p, i) => (
          <g key={i}>
            <rect x={p.x0} y={yLine - 18} width={p.x1 - p.x0} height={36} fill={C.faint} />
            <text
              x={(p.x0 + p.x1) / 2}
              y={yLine - 36}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={C.dim}
              fontSize={FONT_TEX}
              letterSpacing="3"
            >
              {p.label}
            </text>
          </g>
        ))}

        <line
          x1={xs[0] - 30}
          y1={yLine}
          x2={xs[xs.length - 1] + 30}
          y2={yLine}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          vectorEffect="non-scaling-stroke"
        />

        {beats.map((b, i) => {
          const isPivot = i === pivot
          return (
            <g key={i}>
              <circle
                cx={xs[i]}
                cy={yLine}
                r={isPivot ? 14 : 10}
                fill="var(--bg-elevated)"
                stroke={C.fg}
                strokeWidth={isPivot ? 1.75 : 1}
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={xs[i]}
                y={yLine + 44}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={C.fg}
                fontSize="14"
                fontWeight={isPivot ? 'bold' : 'normal'}
                letterSpacing="2"
              >
                {b.label}
              </text>
              <text
                x={xs[i]}
                y={yLine + 68}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={C.dim}
                fontSize={FONT_TEX}
              >
                {b.sub}
              </text>
            </g>
          )
        })}
      </svg>
    </VizFigure>
  )
}

export function IncompleteLiberation() {
  const C = useVizColors()
  const halo = { stroke: 'var(--bg-elevated)', strokeWidth: 5, paintOrder: 'stroke' }
  const W = 960
  const H = 380
  const cy = H / 2
  const colW = 360
  const colH = 320
  const colY = 30
  const gap = 120
  const leftX = (W - colW * 2 - gap) / 2
  const rightX = leftX + colW + gap
  const leftCx = leftX + colW / 2
  const rightCx = rightX + colW / 2

  const anakinLines = ['Wins the podrace.', 'Watto releases his contract.', 'Walks onto the ship.']
  const shmiLines = ['Watto refused the offer.', 'Money was not enough.', 'Stays on Tatooine.']

  const bodyY0 = 195
  const bodyStep = 36

  const renderColumn = (cx, lines, cost) => (
    <>
      {lines.map((text, i) => (
        <text
          key={i}
          x={cx}
          y={bodyY0 + i * bodyStep}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="16"
        >
          {text}
        </text>
      ))}
      {cost && (
        <text
          x={cx}
          y={colY + colH - 32}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          letterSpacing="3"
        >
          {cost}
        </text>
      )}
    </>
  )

  return (
    <VizFigure title="The Incomplete Liberation" size="body" aspect="960/380">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Anakin's freedom vs Shmi's continued captivity"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <rect
          x={leftX}
          y={colY}
          width={colW}
          height={colH}
          fill="none"
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={leftCx}
          y={colY + 56}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="22"
          fontWeight="bold"
          letterSpacing="3"
        >
          ANAKIN
        </text>
        <text
          x={leftCx}
          y={colY + 92}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="15"
          letterSpacing="4"
        >
          FREED
        </text>
        <line
          x1={leftX + 40}
          y1={colY + 128}
          x2={leftX + colW - 40}
          y2={colY + 128}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          vectorEffect="non-scaling-stroke"
        />
        {renderColumn(leftCx, anakinLines, 'COST: EVERYTHING ELSE')}

        <rect
          x={rightX}
          y={colY}
          width={colW}
          height={colH}
          fill="none"
          stroke={C.dim}
          strokeWidth="1.75"
          strokeDasharray="6 4"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={rightCx}
          y={colY + 56}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="22"
          fontWeight="bold"
          letterSpacing="3"
        >
          SHMI
        </text>
        <text
          x={rightCx}
          y={colY + 92}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="15"
          letterSpacing="4"
        >
          STILL ENSLAVED
        </text>
        <line
          x1={rightX + 40}
          y1={colY + 128}
          x2={rightX + colW - 40}
          y2={colY + 128}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          vectorEffect="non-scaling-stroke"
        />
        {renderColumn(rightCx, shmiLines, null)}

        <line
          x1={leftX + colW}
          y1={cy}
          x2={rightX}
          y2={cy}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={W / 2}
          y={cy - 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          letterSpacing="4"
          style={halo}
        >
          PAID FOR BY
        </text>
      </svg>
    </VizFigure>
  )
}

export function FarewellCascade() {
  const C = useVizColors()
  const halo = { stroke: 'var(--bg-elevated)', strokeWidth: 5, paintOrder: 'stroke' }
  const W = 960
  const H = 280
  const yLine = H / 2
  const padX = 100
  const steps = [
    { label: 'WAKES THREEPIO', sub: 'leaves him unfinished' },
    { label: 'GIVES KITSTER', sub: 'coins, promises to remember' },
    { label: 'STARTS WALKING', sub: 'toward Qui-Gon' },
    { label: 'RUNS BACK', sub: '"I cannot do it, Mom"' },
    { label: 'STARTS AGAIN', sub: 'Shmi points him forward' }
  ]
  const step = (W - padX * 2) / (steps.length - 1)
  const xs = steps.map((_, i) => padX + i * step)

  return (
    <VizFigure title="The Farewell Cascade" size="body" aspect="960/280">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Anakin's five-step farewell cascade"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <line
          x1={xs[0]}
          y1={yLine}
          x2={xs[xs.length - 1]}
          y2={yLine}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
        />

        {steps.map((s, i) => {
          const isPivot = i === 3
          return (
            <g key={i}>
              <text
                x={xs[i]}
                y={yLine - 60}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={C.fg}
                fontSize="14"
                fontWeight={isPivot ? 'bold' : 'normal'}
                letterSpacing="2"
              >
                {s.label}
              </text>
              <circle
                cx={xs[i]}
                cy={yLine}
                r={isPivot ? 14 : 11}
                fill="var(--bg-elevated)"
                stroke={C.fg}
                strokeWidth={isPivot ? 1.75 : 1}
                vectorEffect="non-scaling-stroke"
              />
              {isPivot && (
                <text
                  x={xs[i]}
                  y={yLine + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={C.fg}
                  fontSize="14"
                  fontWeight="bold"
                >
                  ↺
                </text>
              )}
              <text
                x={xs[i]}
                y={yLine + 44}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={C.dim}
                fontSize={FONT_TEX}
              >
                {s.sub}
              </text>
              {i < steps.length - 1 && (
                <text
                  x={xs[i] + step / 2}
                  y={yLine - 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={C.dim}
                  fontSize="22"
                  style={halo}
                >
                  {i === 2 ? '!' : '›'}
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </VizFigure>
  )
}

export function TwoInstructions() {
  const C = useVizColors()
  const W = 960
  const H = 320
  const cy = H / 2
  const cx = W / 2
  const r = 50
  const leftCx = 160
  const rightCx = W - leftCx
  const labelY = cy - 70

  return (
    <VizFigure title="Two Instructions, One Wound" size="body" aspect="960/320">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Anakin pulled backward by his vow and forward by his mother's instruction"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <defs>
          <marker
            id="ti-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" fill={C.fg} />
          </marker>
        </defs>

        <text
          x={leftCx}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="16"
          fontWeight="bold"
          letterSpacing="2"
        >
          "I WILL COME BACK"
        </text>
        <text
          x={leftCx}
          y={labelY + 26}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          letterSpacing="1"
        >
          Anakin's vow
        </text>
        <text
          x={leftCx}
          y={labelY + 46}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="12"
          letterSpacing="3"
        >
          PULLS BACKWARD
        </text>
        <line
          x1={cx - r - 10}
          y1={cy}
          x2={leftCx + 100}
          y2={cy}
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
          markerEnd="url(#ti-arrow)"
        />

        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="var(--bg-elevated)"
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="16"
          fontWeight="bold"
          letterSpacing="2"
        >
          ANAKIN
        </text>
        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
        >
          torn
        </text>

        <text
          x={rightCx}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="16"
          fontWeight="bold"
          letterSpacing="2"
        >
          "DON'T LOOK BACK"
        </text>
        <text
          x={rightCx}
          y={labelY + 26}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          letterSpacing="1"
        >
          Shmi's instruction
        </text>
        <text
          x={rightCx}
          y={labelY + 46}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="12"
          letterSpacing="3"
        >
          PUSHES FORWARD
        </text>
        <line
          x1={cx + r + 10}
          y1={cy}
          x2={rightCx - 100}
          y2={cy}
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
          markerEnd="url(#ti-arrow)"
        />
      </svg>
    </VizFigure>
  )
}

export function MaulAttack() {
  const C = useVizColors()
  const W = 1100
  const H = 340
  const yGround = 240
  const shipX = 70
  const shipW = 110
  const shipH = 50
  const quiGonX = 370
  const duelX = 640
  const duelR = 36
  const maulX = 1030
  const nodeR = 13

  return (
    <VizFigure title="Maul's Attack: Position and Tempo" size="body" aspect="1100/340">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Spatial map of Maul's attack and the duel position on Tatooine"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <line
          x1={shipX}
          y1={yGround}
          x2={maulX + 50}
          y2={yGround}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={W / 2}
          y={yGround + 50}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
          letterSpacing="3"
        >
          TATOOINE DESERT
        </text>

        <rect
          x={shipX}
          y={yGround - shipH}
          width={shipW}
          height={shipH}
          fill="var(--bg-elevated)"
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={shipX + shipW / 2}
          y={yGround - shipH / 2 - 8}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="14"
          fontWeight="bold"
          letterSpacing="2"
        >
          NABOO
        </text>
        <text
          x={shipX + shipW / 2}
          y={yGround - shipH / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="14"
          fontWeight="bold"
          letterSpacing="2"
        >
          SHIP
        </text>

        <line
          x1={shipX + shipW}
          y1={yGround}
          x2={quiGonX - nodeR}
          y2={yGround}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={(shipX + shipW + quiGonX - nodeR) / 2}
          y={yGround - 18}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
        >
          Anakin runs
        </text>

        <circle
          cx={quiGonX}
          cy={yGround}
          r={nodeR}
          fill="var(--bg-elevated)"
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={quiGonX}
          y={yGround - 30}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="14"
          fontWeight="bold"
          letterSpacing="2"
        >
          QUI-GON
        </text>

        <text
          x={duelX}
          y={yGround - duelR - 38}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
        >
          Qui-Gon barely blocks
        </text>
        <text
          x={duelX}
          y={yGround - duelR - 18}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="14"
          fontWeight="bold"
          letterSpacing="3"
        >
          DUEL ZONE
        </text>
        <circle
          cx={duelX}
          cy={yGround}
          r={duelR}
          fill="var(--bg-elevated)"
          stroke={C.fg}
          strokeWidth="1.75"
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
        />

        <line
          x1={maulX - nodeR}
          y1={yGround}
          x2={duelX + duelR}
          y2={yGround}
          stroke={C.fg}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="6 4"
          vectorEffect="non-scaling-stroke"
        />

        <text
          x={maulX}
          y={yGround - 38}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize={FONT_TEX}
        >
          speeder arrives
        </text>
        <text
          x={maulX}
          y={yGround - 18}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="14"
          fontWeight="bold"
          letterSpacing="2"
        >
          MAUL
        </text>
        <circle
          cx={maulX}
          cy={yGround}
          r={nodeR}
          fill="var(--bg-elevated)"
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </VizFigure>
  )
}

export function FirstMeeting() {
  const C = useVizColors()
  const W = 960
  const H = 380
  const colW = 360
  const colH = 290
  const colY = 30
  const gap = 120
  const leftX = (W - colW * 2 - gap) / 2
  const rightX = leftX + colW + gap
  const leftCx = leftX + colW / 2
  const rightCx = rightX + colW / 2

  const obiLines = [
    '"pathetic life form"',
    'sees a boy, not a Jedi',
    'gives "the look"',
    'cool, distant'
  ]
  const aniLines = [
    '"Wow! You\'re a Jedi too?"',
    'innocent, open',
    'already lost everything',
    'trusts completely'
  ]
  const bodyY0 = 195
  const bodyStep = 36

  const renderColumn = (cx, lines) => (
    <>
      {lines.map((text, i) => (
        <text
          key={i}
          x={cx}
          y={bodyY0 + i * bodyStep}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="16"
        >
          {text}
        </text>
      ))}
    </>
  )

  return (
    <VizFigure title="First Meeting: Obi-Wan and Anakin" size="body" aspect="960/380">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Obi-Wan skeptical, Anakin awestruck at first meeting"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <rect
          x={leftX}
          y={colY}
          width={colW}
          height={colH}
          fill="none"
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={leftCx}
          y={colY + 56}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="22"
          fontWeight="bold"
          letterSpacing="3"
        >
          OBI-WAN
        </text>
        <text
          x={leftCx}
          y={colY + 92}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="15"
          letterSpacing="4"
        >
          SKEPTICAL
        </text>
        <line
          x1={leftX + 40}
          y1={colY + 128}
          x2={leftX + colW - 40}
          y2={colY + 128}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          vectorEffect="non-scaling-stroke"
        />
        {renderColumn(leftCx, obiLines)}

        <rect
          x={rightX}
          y={colY}
          width={colW}
          height={colH}
          fill="none"
          stroke={C.fg}
          strokeWidth="1.75"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={rightCx}
          y={colY + 56}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="22"
          fontWeight="bold"
          letterSpacing="3"
        >
          ANAKIN
        </text>
        <text
          x={rightCx}
          y={colY + 92}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.fg}
          fontSize="15"
          letterSpacing="4"
        >
          AWESTRUCK
        </text>
        <line
          x1={rightX + 40}
          y1={colY + 128}
          x2={rightX + colW - 40}
          y2={colY + 128}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          vectorEffect="non-scaling-stroke"
        />
        {renderColumn(rightCx, aniLines)}

        <text
          x={W / 2}
          y={H / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="16"
          fontWeight="bold"
          letterSpacing="4"
        >
          VS.
        </text>
      </svg>
    </VizFigure>
  )
}

const POWER_WEB_NODES = [
  {
    id: 'palpatine',
    width: 200,
    height: 80,
    labels: [
      { text: 'PALPATINE', bold: true },
      { text: 'Hidden Architect', dim: true }
    ]
  },
  {
    id: 'valorum',
    width: 180,
    height: 70,
    labels: [
      { text: 'VALORUM', bold: true },
      { text: 'Supreme Chancellor', dim: true }
    ]
  },
  {
    id: 'amidala',
    width: 180,
    height: 70,
    labels: [
      { text: 'AMIDALA', bold: true },
      { text: 'Queen of Naboo', dim: true }
    ]
  },
  {
    id: 'senate',
    width: 180,
    height: 70,
    labels: [
      { text: 'SENATE', bold: true },
      { text: 'Bureaucratic Body', dim: true }
    ]
  },
  {
    id: 'jedi',
    width: 200,
    height: 70,
    labels: [
      { text: 'JEDI COUNCIL', bold: true },
      { text: 'Guardians of Peace', dim: true }
    ]
  },
  {
    id: 'federation',
    width: 200,
    height: 70,
    labels: [
      { text: 'TRADE FED.', bold: true },
      { text: 'Lott Dod / Nute Gunray', dim: true }
    ]
  }
]

const POWER_WEB_EDGES = [
  {
    id: 'p-a',
    sources: ['palpatine'],
    targets: ['amidala'],
    style: 'dashed',
    labels: [{ text: 'manipulates' }]
  },
  {
    id: 'p-v',
    sources: ['palpatine'],
    targets: ['valorum'],
    style: 'dashed',
    labels: [{ text: 'betrays' }]
  },
  {
    id: 'p-f',
    sources: ['palpatine'],
    targets: ['federation'],
    style: 'dashed',
    labels: [{ text: 'orchestrates' }]
  },
  {
    id: 'a-s',
    sources: ['amidala'],
    targets: ['senate'],
    style: 'solid',
    labels: [{ text: 'addresses' }]
  },
  {
    id: 'v-s',
    sources: ['valorum'],
    targets: ['senate'],
    style: 'solid',
    labels: [{ text: 'chairs' }]
  },
  {
    id: 'f-s',
    sources: ['federation'],
    targets: ['senate'],
    style: 'dashed',
    labels: [{ text: 'obstructs' }]
  },
  {
    id: 'a-j',
    sources: ['amidala'],
    targets: ['jedi'],
    style: 'solid',
    labels: [{ text: 'travels with' }]
  },
  {
    id: 'p-j',
    sources: ['palpatine'],
    targets: ['jedi'],
    style: 'dashed',
    labels: [{ text: 'withholds from' }]
  }
]

const POWER_WEB_LAYOUT_OPTIONS = {
  'elk.algorithm': 'stress',
  'elk.stress.desiredEdgeLength': '260',
  'elk.spacing.nodeNode': '110',
  'elk.spacing.edgeNode': '36',
  'elk.spacing.edgeEdge': '30',
  'elk.padding': '[top=50,left=50,right=50,bottom=50]'
}

const TIMELINE_EVENTS = [
  { label: 'Arrival on Coruscant', sub: 'Valorum and Palpatine greet Amidala', phase: 'arrival' },
  {
    label: "Palpatine's Private Briefing",
    sub: 'Vote of no confidence proposed',
    phase: 'manipulation'
  },
  { label: 'Jedi Council, First Session', sub: 'Sith reported; Anakin presented', phase: 'jedi' },
  { label: "Anakin's Visit to Padme", sub: 'Goodbye; meets Amidala as Queen', phase: 'personal' },
  { label: 'Senate Session', sub: 'No-confidence vote passes; Valorum destroyed', phase: 'senate' },
  { label: "Palpatine's Nomination", sub: 'Amidala decides to return to Naboo', phase: 'pivot' },
  {
    label: 'Jedi Council, Second Session',
    sub: 'Anakin refused; Qui-Gon defies Council',
    phase: 'jedi'
  },
  { label: 'Landing Platform', sub: 'Midi-chlorians explained; departure', phase: 'departure' }
]

export function CoruscantPowerWeb() {
  return (
    <Diagram
      id="SW.I.06.1"
      title="Coruscant Power Web"
      size="body"
      aspect="900/620"
      nodes={POWER_WEB_NODES}
      edges={POWER_WEB_EDGES}
      layoutOptions={POWER_WEB_LAYOUT_OPTIONS}
    />
  )
}

export function CoruscantSceneTimeline() {
  const C = useVizColors()
  const W = 960
  const rowH = 90
  const padTop = 60
  const padBottom = 60
  const H = padTop + TIMELINE_EVENTS.length * rowH + padBottom
  const spineX = 200

  return (
    <VizFigure title="Coruscant Politics Scene Timeline" size="body" aspect={`${W}/${H}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Eight-scene timeline of the Coruscant politics module"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <line
          x1={spineX}
          y1={padTop}
          x2={spineX}
          y2={H - padBottom}
          stroke={C.dim}
          strokeWidth={STROKE_SECONDARY}
          vectorEffect="non-scaling-stroke"
        />

        {TIMELINE_EVENTS.map((e, i) => {
          const y = padTop + i * rowH + rowH / 2
          const isPivot = e.phase === 'manipulation' || e.phase === 'senate'
          return (
            <g key={i}>
              <text
                x={spineX - 50}
                y={y}
                textAnchor="end"
                dominantBaseline="middle"
                fill={C.dim}
                fontSize="15"
                letterSpacing="2"
              >
                {String(i + 1).padStart(2, '0')}
              </text>
              <circle
                cx={spineX}
                cy={y}
                r={isPivot ? 12 : 8}
                fill="var(--bg-elevated)"
                stroke={C.fg}
                strokeWidth={isPivot ? 1.75 : 1}
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1={spineX + (isPivot ? 14 : 10)}
                y1={y}
                x2={spineX + 50}
                y2={y}
                stroke={C.dim}
                strokeWidth={STROKE_SECONDARY}
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={spineX + 60}
                y={y - 12}
                dominantBaseline="middle"
                fill={C.fg}
                fontSize="18"
                fontWeight={isPivot ? 'bold' : 'normal'}
                letterSpacing="1"
              >
                {e.label}
              </text>
              <text x={spineX + 60} y={y + 14} dominantBaseline="middle" fill={C.dim} fontSize="15">
                {e.sub}
              </text>
            </g>
          )
        })}
      </svg>
    </VizFigure>
  )
}

const BATTLE_FRONTS = [
  {
    quad: 'tl',
    title: 'POWER GENERATOR',
    role: 'JEDI DUEL',
    lines: ['Qui-Gon + Obi-Wan', 'vs. Darth Maul'],
    results: ['Result: Qui-Gon killed', 'Maul defeated by Obi-Wan']
  },
  {
    quad: 'tr',
    title: 'ORBIT / SPACE',
    role: 'DECISIVE FRONT',
    lines: ['Anakin (accidental)', 'vs. Droid Control Ship'],
    results: ['Result: Reactor destroyed', 'ALL droids shut down']
  },
  {
    quad: 'bl',
    title: 'GRASS PLAINS',
    role: 'DIVERSION FRONT',
    lines: ['Gungan Army', 'vs. Droid Army'],
    results: ['Result: Captured', 'then freed by Anakin']
  },
  {
    quad: 'br',
    title: 'THEED PALACE',
    role: 'POLITICAL OBJECTIVE',
    lines: ["Padme's Team", 'vs. Nute Gunray'],
    results: ['Result: Viceroy captured']
  }
]

export function BattleMap() {
  const C = useVizColors()
  const halo = { stroke: 'var(--bg-elevated)', strokeWidth: 5, paintOrder: 'stroke' }
  const W = 1500
  const H = 1000
  const gap = 140
  const cellW = (W - gap * 3) / 2
  const cellH = (H - gap * 3) / 2
  const positions = {
    tl: { x: gap, y: gap },
    tr: { x: gap * 2 + cellW, y: gap },
    bl: { x: gap, y: gap * 2 + cellH },
    br: { x: gap * 2 + cellW, y: gap * 2 + cellH }
  }

  return (
    <VizFigure title="Battle of Naboo: Four Fronts" size="body" aspect="1500/1000">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Four simultaneous battle fronts at the Battle of Naboo"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        <defs>
          <marker
            id="bn-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" fill={C.fg} />
          </marker>
        </defs>

        {BATTLE_FRONTS.map(front => {
          const { x, y } = positions[front.quad]
          const cx = x + cellW / 2
          return (
            <g key={front.quad}>
              <rect
                x={x}
                y={y}
                width={cellW}
                height={cellH}
                fill="none"
                stroke={C.fg}
                strokeWidth="1.75"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={cx}
                y={y + 56}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={C.fg}
                fontSize="22"
                fontWeight="bold"
                letterSpacing="3"
              >
                {front.title}
              </text>
              {front.lines.map((line, i) => (
                <text
                  key={`p${i}`}
                  x={cx}
                  y={y + 110 + i * 28}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={C.dim}
                  fontSize="16"
                >
                  {line}
                </text>
              ))}
              {front.results.map((line, i) => (
                <text
                  key={`r${i}`}
                  x={cx}
                  y={y + 200 + i * 28}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={C.dim}
                  fontSize="16"
                >
                  {line}
                </text>
              ))}
              <text
                x={cx}
                y={y + cellH - 36}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={C.fg}
                fontSize="14"
                fontWeight="bold"
                letterSpacing="4"
              >
                {front.role}
              </text>
            </g>
          )
        })}

        <text
          x={W / 2}
          y={H / 2 - 60}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="14"
          letterSpacing="4"
          style={halo}
        >
          SIMULTANEOUS
        </text>
        <text
          x={W / 2}
          y={H / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="56"
          fontWeight="bold"
          style={halo}
        >
          4
        </text>
        <text
          x={W / 2}
          y={H / 2 + 60}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="14"
          letterSpacing="4"
          style={halo}
        >
          FRONTS
        </text>

        <path
          d={`M ${positions.tr.x} ${positions.tr.y + cellH / 2}
              Q ${W / 2} ${H / 2 + 40}
              ${positions.bl.x + cellW} ${positions.bl.y + cellH / 2}`}
          fill="none"
          stroke={C.fg}
          strokeWidth="1.75"
          strokeDasharray="8 5"
          vectorEffect="non-scaling-stroke"
          markerEnd="url(#bn-arrow)"
        />
        <text
          x={W / 2}
          y={H / 2 + 150}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="14"
          letterSpacing="2"
          style={halo}
        >
          Anakin destroys reactor
        </text>
        <text
          x={W / 2}
          y={H / 2 + 174}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="14"
          letterSpacing="2"
          style={halo}
        >
          = all droids shut down
        </text>
      </svg>
    </VizFigure>
  )
}

const ARC_CHARACTERS = [
  {
    name: 'ANAKIN',
    pivot: true,
    beats: [
      { x: 100, label: 'Hangar' },
      { x: 320, label: 'Space' },
      { x: 540, label: 'Control Ship' },
      { x: 760, label: 'Hero' },
      { x: 980, label: 'Padawan' }
    ]
  },
  {
    name: 'OBI-WAN',
    beats: [
      { x: 100, label: 'Reconcile' },
      { x: 320, label: 'Fight' },
      { x: 540, label: 'Separated' },
      { x: 650, label: 'Grief' },
      { x: 760, label: 'Kills Maul' },
      { x: 980, label: 'Knight' }
    ]
  },
  {
    name: 'PADME',
    beats: [
      { x: 100, label: 'Alliance' },
      { x: 320, label: 'Captured' },
      { x: 540, label: 'Escapes' },
      { x: 760, label: 'Victory' },
      { x: 980, label: 'Queen' }
    ]
  },
  {
    name: 'QUI-GON',
    terminates: true,
    beats: [
      { x: 100, label: 'Forgives' },
      { x: 320, label: 'Fights Maul' },
      { x: 530, label: 'Death' }
    ]
  }
]

export function CharacterArcTimeline() {
  const C = useVizColors()
  const W = 1200
  const rowH = 110
  const padTop = 60
  const padBottom = 60
  const H = padTop + ARC_CHARACTERS.length * rowH + padBottom
  const nameX = 100

  return (
    <VizFigure title="Character Arcs: Return and Battle of Naboo" size="body" aspect={`${W}/${H}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Character arc timeline for the Battle of Naboo"
        style={{
          width: '100%',
          height: '100%',
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        {ARC_CHARACTERS.map((char, ci) => {
          const y = padTop + ci * rowH + rowH / 2
          const firstX = char.beats[0].x + 180
          const lastX = char.beats[char.beats.length - 1].x + 180
          return (
            <g key={char.name}>
              <text
                x={nameX}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={C.fg}
                fontSize="16"
                fontWeight={char.pivot ? 'bold' : 'normal'}
                letterSpacing="2"
              >
                {char.name}
              </text>
              <line
                x1={firstX}
                y1={y}
                x2={lastX}
                y2={y}
                stroke={C.dim}
                strokeWidth={STROKE_SECONDARY}
                vectorEffect="non-scaling-stroke"
              />
              {char.beats.map((beat, bi) => {
                const cx = beat.x + 180
                const labelAbove = bi % 2 === 0
                return (
                  <g key={bi}>
                    <circle
                      cx={cx}
                      cy={y}
                      r={char.pivot ? 9 : 7}
                      fill={char.pivot ? C.fg : 'var(--bg-elevated)'}
                      stroke={C.fg}
                      strokeWidth={char.pivot ? 1.75 : 1}
                      vectorEffect="non-scaling-stroke"
                    />
                    <text
                      x={cx}
                      y={y + (labelAbove ? -22 : 28)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={C.dim}
                      fontSize="14"
                    >
                      {beat.label}
                    </text>
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>
    </VizFigure>
  )
}

// Character Roster: 12 portrait cells
// Editorial typology card. Each cell names a figure and the function they
// serve in the story, inside a hairline frame. Text only: the film's
// imagery is not licensed for redistribution, so none is used here.

const ROSTER = [
  {
    name: 'QUI-GON JINN',
    role: 'MENTOR'
  },
  {
    name: 'OBI-WAN KENOBI',
    role: 'PADAWAN'
  },
  {
    name: 'YODA',
    role: 'MASTER'
  },
  {
    name: 'MACE WINDU',
    role: 'COUNCIL'
  },
  {
    name: 'SIDIOUS',
    role: 'SHADOW'
  },
  {
    name: 'DARTH MAUL',
    role: 'ASSASSIN'
  },
  {
    name: 'AMIDALA',
    role: 'QUEEN'
  },
  {
    name: 'PADMÉ',
    role: 'HANDMAIDEN'
  },
  {
    name: 'ANAKIN',
    role: 'CHOSEN'
  },
  {
    name: 'SHMI',
    role: 'MOTHER'
  },
  {
    name: 'WATTO',
    role: 'TRADER'
  },
  {
    name: 'JAR JAR',
    role: 'OUTCAST'
  }
]

export function CharacterRoster() {
  const C = useVizColors()
  const W = 1600
  const H = 900
  const cols = 4
  const rows = 3
  const gutter = 36
  const cellW = (W - gutter * (cols + 1)) / cols
  const cellH = (H - gutter * (rows + 1)) / rows
  const frameH = 200

  return (
    <VizFigure title="Character Roster" size="wide" aspect="16/9">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Phantom Menace character roster: 12 portrait cells"
        style={{
          width: '100%',
          height: '100%',
          color: C.fg,
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        {ROSTER.map((c, i) => {
          const col = i % cols
          const row = Math.floor(i / cols)
          const x = gutter + col * (cellW + gutter)
          const y = gutter + row * (cellH + gutter)
          return (
            <CharacterCell
              key={c.name}
              x={x}
              y={y}
              cellW={cellW}
              frameH={frameH}
              name={c.name}
              role={c.role}
            />
          )
        })}
      </svg>
    </VizFigure>
  )
}

function CharacterCell({ x, y, cellW, frameH, name, role }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        width={cellW}
        height={frameH}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={cellW / 2}
        y={frameH / 2 - 6}
        textAnchor="middle"
        fill="currentColor"
        fontSize={FONT_BODY}
        fontWeight="bold"
        letterSpacing={2}
      >
        {name}
      </text>
      <text
        x={cellW / 2}
        y={frameH / 2 + 24}
        textAnchor="middle"
        fill="currentColor"
        fillOpacity={0.55}
        fontSize={FONT_TEX}
        letterSpacing={4}
      >
        {role}
      </text>
    </g>
  )
}

// Ships & Tech Scale Lineup
// Seven Phantom Menace ships/vehicles/droids drawn as length bars at true
// relative scale on a shared baseline, with a meter ruler beneath. The Trade
// Federation Battleship (3,170 m diameter) is too massive to fit at this
// scale and gets a separate top-banner callout.

const SHIP_SCALE = 3.33 // px per meter
const SHIP_BASELINE = 600 // y-coord where each silhouette's bottom sits

const SHIPS = [
  {
    id: 'republic',
    name: 'REPUBLIC CRUISER',
    dim: 115
  },
  {
    id: 'royal',
    name: 'NABOO ROYAL CRUISER',
    dim: 76
  },
  {
    id: 'sith',
    name: 'SITH INFILTRATOR',
    dim: 26.5
  },
  {
    id: 'n1',
    name: 'N-1 STARFIGHTER',
    dim: 11
  },
  {
    id: 'pod',
    name: 'PODRACER',
    dim: 7
  },
  {
    id: 'droideka',
    name: 'DROIDEKA',
    dim: 1.83
  },
  {
    id: 'b1',
    name: 'BATTLE DROID',
    dim: 1.93
  }
]

export function ShipScaleLineup() {
  const C = useVizColors()
  const W = 1600
  const H = 900

  // Horizontal layout: all ships on a single baseline, largest to smallest,
  // with a fixed gap between each. Each ship's WIDTH equals its true length
  // on the ruler so the ruler tick spacing matches the visible silhouettes.
  const GAP = 56
  const widths = SHIPS.map(s => s.dim * SHIP_SCALE)
  const total = widths.reduce((a, b) => a + b, 0) + GAP * (SHIPS.length - 1)
  const startX = (W - total) / 2

  let cursorX = startX
  const placed = SHIPS.map((s, i) => {
    const w = widths[i]
    const cx = cursorX + w / 2
    const left = cursorX
    cursorX += w + GAP
    return { ...s, cx, left, width: w }
  })

  return (
    <VizFigure title="Ships and Tech at Relative Scale" size="wide" aspect="16/9">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Phantom Menace ships and props at true relative scale"
        style={{
          width: '100%',
          height: '100%',
          color: C.fg,
          fontFamily: 'var(--reader-font-family)'
        }}
      >
        {/* Trade Federation Battleship callout: too massive (3,170 m) for the
            row's scale. Drawn as a bracket rather than a bar, because at this
            scale its true length would be roughly 10,500 px wide. */}
        <g transform="translate(60, 60)">
          <line
            x1={0}
            y1={0}
            x2={280}
            y2={0}
            stroke="currentColor"
            strokeWidth={1.25}
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={16}
            stroke="currentColor"
            strokeWidth={1.25}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 268 -6 L 280 0 L 268 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.25}
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <text
          x={360}
          y={80}
          fill="currentColor"
          fontSize={FONT_VALUE}
          fontWeight="bold"
          letterSpacing={3}
        >
          TRADE FEDERATION BATTLESHIP
        </text>
        <text
          x={360}
          y={108}
          fill="currentColor"
          fillOpacity={0.65}
          fontSize={FONT_CONTROL}
          letterSpacing={2}
        >
          3,170 M DIAMETER · 28× THE REPUBLIC CRUISER · OFF SCALE
        </text>

        {/* Length bars: each bar's width is the vehicle's true length on the
            ruler below, so the comparison between any two is exact. Height is
            uniform and carries no meaning, because only length is measured. */}
        {placed.map(s => {
          const barH = 52
          return (
            <g key={s.id}>
              <rect
                x={s.left}
                y={SHIP_BASELINE - barH}
                width={s.width}
                height={barH}
                fill="currentColor"
                fillOpacity={0.14}
                stroke="currentColor"
                strokeWidth={1.25}
                vectorEffect="non-scaling-stroke"
              />
            </g>
          )
        })}

        {/* Meter scale bar: spans the full ship lineup width with ticks
            every 50 m. Sits beneath the shared baseline. */}
        {(() => {
          const maxMeters = Math.ceil(total / SHIP_SCALE / 50) * 50
          const ticks = []
          for (let m = 0; m <= maxMeters; m += 50) ticks.push(m)
          return (
            <g transform={`translate(${startX}, ${SHIP_BASELINE + 30})`}>
              <line
                x1={0}
                y1={0}
                x2={maxMeters * SHIP_SCALE}
                y2={0}
                stroke="currentColor"
                strokeWidth={1.25}
                vectorEffect="non-scaling-stroke"
              />
              {ticks.map(m => (
                <g key={m} transform={`translate(${m * SHIP_SCALE}, 0)`}>
                  <line
                    x1={0}
                    y1={-5}
                    x2={0}
                    y2={5}
                    stroke="currentColor"
                    strokeWidth={STROKE_SECONDARY}
                    vectorEffect="non-scaling-stroke"
                  />
                  <text
                    x={0}
                    y={22}
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize={FONT_TEX}
                    letterSpacing={1}
                  >
                    {m}
                  </text>
                </g>
              ))}
              <text
                x={maxMeters * SHIP_SCALE + 16}
                y={4}
                fill="currentColor"
                fillOpacity={0.6}
                fontSize={FONT_TEX}
                letterSpacing={3}
              >
                METERS
              </text>
            </g>
          )
        })()}

        {/* Per-ship labels: greedy push-right placement guarantees zero
            overlap. Each label wants to sit centered under its ship; if
            its left edge would land inside the previous label's right edge
            (plus gap), it's nudged right just enough to clear. */}
        {(() => {
          const labelY = SHIP_BASELINE + 110
          const dimY = labelY + 22
          // fontSize 14 with letter-spacing 2 ≈ 11 px per character + margin
          const widthOf = name => name.length * 11 + 24
          const MIN_GAP = 12
          let lastRight = -Infinity
          const labels = placed.map(s => {
            const w = widthOf(s.name)
            const idealLeft = s.cx - w / 2
            const left = Math.max(idealLeft, lastRight + MIN_GAP)
            lastRight = left + w
            return { ...s, labelCx: left + w / 2 }
          })
          return labels.map(s => (
            <g key={`${s.id}-lbl`}>
              <text
                x={s.labelCx}
                y={labelY}
                textAnchor="middle"
                fill="currentColor"
                fontSize={FONT_CONTROL}
                fontWeight="bold"
                letterSpacing={2}
              >
                {s.name}
              </text>
              <text
                x={s.labelCx}
                y={dimY}
                textAnchor="middle"
                fill="currentColor"
                fillOpacity={0.6}
                fontSize={FONT_LABEL}
                letterSpacing={3}
              >
                {s.dim} M
              </text>
            </g>
          ))
        })()}
      </svg>
    </VizFigure>
  )
}
