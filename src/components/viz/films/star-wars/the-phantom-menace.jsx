// STAR WARS · EPISODE I · THE PHANTOM MENACE
// Hand-rolled SVG narrative diagrams: scene timelines, character webs, ship
// layouts, race course, political power web, battle map. Each component takes
// a `C` color object from `useVizColors()` (passed by the consuming page).

import React from 'react'

export function TfaTimelineSvg({ C }) {
  return (
    <figure className="lrn-figure">
      <svg viewBox="0 0 900 160" style={{ width: '100%' }}>
        <line x1="60" y1="80" x2="840" y2="80" stroke={C.dim} strokeWidth="2" />
        {[
          { x: 60, label1: 'Opening', label2: 'Crawl' },
          { x: 180, label1: 'Cruiser', label2: 'Approach' },
          { x: 300, label1: 'Docking', label2: 'Bay' },
          { x: 420, label1: 'Conference', label2: 'Room' },
          { x: 510, label1: 'Gas', label2: 'Attack' },
          { x: 620, label1: 'Destroyer', label2: 'Droids' },
          { x: 730, label1: 'Hidden', label2: 'Army' },
          { x: 840, label1: 'Amidala', label2: 'Transmission' }
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={80} r={7} fill={C.fg} />
            <text
              x={node.x}
              y={107}
              textAnchor="middle"
              fill={C.fg}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
            >
              {node.label1}
            </text>
            <text
              x={node.x}
              y={122}
              textAnchor="middle"
              fill={C.fg}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
            >
              {node.label2}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>Scene-beat timeline: 14 scenes, 8 major beats</figcaption>
    </figure>
  )
}

export function TfaRelationshipSvg({ C }) {
  return (
    <figure className="lrn-figure">
      <svg viewBox="0 0 700 380" style={{ width: '100%' }}>
        <rect
          x="40"
          y="60"
          width="160"
          height="90"
          fill={C.faint}
          stroke={C.accent}
          strokeWidth="1.5"
        />
        <text
          x="120"
          y="90"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          fontWeight="bold"
        >
          JEDI
        </text>
        <text
          x="120"
          y="112"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Qui-Gon Jinn
        </text>
        <text
          x="120"
          y="130"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Obi-Wan Kenobi
        </text>
        <text
          x="350"
          y="45"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          letterSpacing="2"
        >
          REPUBLIC
        </text>
        <rect
          x="500"
          y="60"
          width="160"
          height="110"
          fill={C.faint}
          stroke={C.accent}
          strokeWidth="1.5"
        />
        <text
          x="580"
          y="90"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          fontWeight="bold"
        >
          FEDERATION
        </text>
        <text
          x="580"
          y="112"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Nute Gunray
        </text>
        <text
          x="580"
          y="130"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Daultay Dofine
        </text>
        <text
          x="580"
          y="148"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Rune Haako
        </text>
        <rect
          x="250"
          y="280"
          width="200"
          height="70"
          fill={C.faint}
          stroke={C.accent}
          strokeWidth="1.5"
        />
        <text
          x="350"
          y="308"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          fontWeight="bold"
        >
          NABOO
        </text>
        <text
          x="350"
          y="330"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Queen Amidala
        </text>
        <line
          x1="200"
          y1="105"
          x2="500"
          y2="105"
          stroke={C.dim}
          strokeWidth="1.5"
          strokeDasharray="5,4"
        />
        <text
          x="350"
          y="97"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          stroke="#000"
          strokeWidth="4"
          paintOrder="stroke"
        >
          ordered killed
        </text>
        <line
          x1="580"
          y1="170"
          x2="420"
          y2="280"
          stroke={C.dim}
          strokeWidth="1.5"
          strokeDasharray="5,4"
        />
        <text
          x="528"
          y="237"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          stroke="#000"
          strokeWidth="4"
          paintOrder="stroke"
        >
          blockades
        </text>
        <line x1="120" y1="150" x2="280" y2="280" stroke={C.dim} strokeWidth="1.5" />
        <text
          x="175"
          y="237"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          stroke="#000"
          strokeWidth="4"
          paintOrder="stroke"
        >
          serve
        </text>
        <line
          x1="350"
          y1="280"
          x2="490"
          y2="170"
          stroke={C.dim}
          strokeWidth="1.5"
          strokeDasharray="5,4"
        />
        <text
          x="440"
          y="262"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          stroke="#000"
          strokeWidth="4"
          paintOrder="stroke"
        >
          confronts
        </text>
      </svg>
      <figcaption>Character relationship web: three factions, four edges</figcaption>
    </figure>
  )
}

export function TfaShipLayoutSvg({ C }) {
  return (
    <figure className="lrn-figure">
      <svg viewBox="0 0 800 460" style={{ width: '100%' }}>
        <rect
          x="40"
          y="40"
          width="720"
          height="380"
          fill={C.faint}
          stroke={C.accent}
          strokeWidth="2"
          rx="6"
        />
        <text
          x="400"
          y="28"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          letterSpacing="2"
        >
          TRADE FEDERATION DROID CONTROL SHIP
        </text>
        <rect
          x="70"
          y="100"
          width="140"
          height="90"
          fill={C.faint}
          stroke={C.dim}
          strokeWidth="1"
        />
        <text
          x="140"
          y="138"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          DOCKING BAY
        </text>
        <text
          x="140"
          y="156"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          entry point
        </text>
        <rect
          x="240"
          y="100"
          width="80"
          height="90"
          fill={C.faint}
          stroke={C.dim}
          strokeWidth="1"
        />
        <text
          x="280"
          y="141"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          HALL-
        </text>
        <text
          x="280"
          y="157"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          WAY
        </text>
        <rect
          x="350"
          y="80"
          width="150"
          height="130"
          fill={C.faint}
          stroke={C.dim}
          strokeWidth="1"
        />
        <text
          x="425"
          y="128"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          CONFERENCE
        </text>
        <text
          x="425"
          y="146"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          ROOM
        </text>
        <text
          x="425"
          y="164"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          gas attack here
        </text>
        <rect
          x="530"
          y="80"
          width="140"
          height="130"
          fill={C.faint}
          stroke={C.dim}
          strokeWidth="1"
        />
        <text
          x="600"
          y="133"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          BRIDGE
        </text>
        <text
          x="600"
          y="151"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          blast doors sealed
        </text>
        <rect
          x="150"
          y="270"
          width="480"
          height="120"
          fill={C.faint}
          stroke={C.dim}
          strokeWidth="1"
        />
        <text
          x="390"
          y="318"
          textAnchor="middle"
          fill={C.fg}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          MAIN HANGAR BAY
        </text>
        <text
          x="390"
          y="340"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Hidden army, thousands of battle droids loading onto landing craft
        </text>
        <line x1="210" y1="145" x2="240" y2="145" stroke={C.dim} strokeWidth="1.5" />
        <line x1="320" y1="145" x2="350" y2="145" stroke={C.dim} strokeWidth="1.5" />
        <line x1="500" y1="145" x2="530" y2="145" stroke={C.dim} strokeWidth="1.5" />
        <line
          x1="390"
          y1="210"
          x2="390"
          y2="270"
          stroke={C.dim}
          strokeWidth="1.5"
          strokeDasharray="4,3"
        />
        <text x="402" y="248" fill={C.dim} fontSize="13" fontFamily="D-DIN, sans-serif">
          vent shaft
        </text>
      </svg>
      <figcaption>Ship layout: tactical positions</figcaption>
    </figure>
  )
}

export function TfaThemeMapSvg({ C }) {
  return (
    <figure className="lrn-figure">
      <svg viewBox="0 0 700 380" style={{ width: '100%' }}>
        <line x1="350" y1="40" x2="350" y2="340" stroke={C.dim} strokeWidth="1.5" />
        <line x1="50" y1="190" x2="650" y2="190" stroke={C.dim} strokeWidth="1.5" />
        <text
          x="350"
          y="194"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
          letterSpacing="3"
        >
          TENSION
        </text>
        <text
          x="160"
          y="100"
          textAnchor="middle"
          fill={C.fg}
          fontSize="16"
          fontFamily="D-DIN, sans-serif"
          fontWeight="bold"
        >
          CALM
        </text>
        <text
          x="160"
          y="120"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Jedi
        </text>
        <text
          x="540"
          y="100"
          textAnchor="middle"
          fill={C.dim}
          fontSize="16"
          fontFamily="D-DIN, sans-serif"
          fontWeight="bold"
        >
          PANIC
        </text>
        <text
          x="540"
          y="120"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Federation
        </text>
        <text
          x="160"
          y="265"
          textAnchor="middle"
          fill={C.fg}
          fontSize="15"
          fontFamily="D-DIN, sans-serif"
          fontWeight="bold"
        >
          PRESENT
        </text>
        <text
          x="160"
          y="283"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Qui-Gon
        </text>
        <text
          x="540"
          y="258"
          textAnchor="middle"
          fill={C.dim}
          fontSize="14"
          fontFamily="D-DIN, sans-serif"
          fontWeight="bold"
        >
          FUTURE ANXIETY
        </text>
        <text
          x="540"
          y="276"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          Obi-Wan
        </text>
        <text
          x="350"
          y="360"
          textAnchor="middle"
          fill={C.dim}
          fontSize="13"
          fontFamily="D-DIN, sans-serif"
        >
          COURTESY vs VIOLENCE | SMALL FORCE vs MASSIVE ARMY
        </text>
      </svg>
      <figcaption>Theme map: four tensions driving the opening scene</figcaption>
    </figure>
  )
}

export function RaceCourseMap({ C }) {
  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="auto"
      aria-label="Boonta Eve Classic race course overhead map"
      role="img"
    >
      <text
        x="400"
        y="36"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="18"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        BOONTA EVE CLASSIC, RACE CIRCUIT
      </text>

      {/* Course outer boundary */}
      <path
        d="M 120 120 Q 200 80 340 90 Q 480 100 580 80 Q 700 60 730 150 Q 750 220 710 300 Q 680 360 600 390 Q 500 420 400 410 Q 300 420 220 390 Q 130 360 100 280 Q 80 210 120 120 Z"
        fill={C.faint}
        stroke={C.dim}
        strokeWidth="1.5"
      />
      {/* Inner boundary: track corridor */}
      <path
        d="M 160 150 Q 220 120 340 128 Q 460 136 560 120 Q 660 108 685 180 Q 700 240 670 305 Q 645 350 565 370 Q 460 392 390 384 Q 310 392 240 365 Q 165 338 148 265 Q 135 210 160 150 Z"
        fill="none"
        stroke={C.dim}
        strokeWidth="1"
        strokeDasharray="6 4"
      />

      {/* Start/Finish line */}
      <line x1="245" y1="365" x2="245" y2="415" stroke={C.accent} strokeWidth="3" />
      <text
        x="245"
        y="432"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        START / FINISH
      </text>

      {/* Sebulba crash zone */}
      <circle cx="310" cy="378" r="10" fill="none" stroke={C.fg} strokeWidth="2" />
      <line x1="304" y1="372" x2="316" y2="384" stroke={C.fg} strokeWidth="1.5" />
      <line x1="316" y1="372" x2="304" y2="384" stroke={C.fg} strokeWidth="1.5" />
      <text
        x="310"
        y="400"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        SEBULBA CRASH
      </text>

      {/* Tusken Raider ambush */}
      <polygon points="560,92 567,78 574,92" fill={C.dim} />
      <text
        x="568"
        y="72"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        TUSKEN AMBUSH
      </text>

      {/* Mawhonic crash */}
      <circle cx="675" cy="200" r="8" fill="none" stroke={C.dim} strokeWidth="1.5" />
      <line x1="670" y1="195" x2="680" y2="205" stroke={C.dim} strokeWidth="1.5" />
      <line x1="680" y1="195" x2="670" y2="205" stroke={C.dim} strokeWidth="1.5" />
      <text
        x="720"
        y="198"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        MAWHONIC CRASH
      </text>

      {/* Service ramp */}
      <rect x="492" y="124" width="30" height="10" fill={C.dim} opacity="0.7" />
      <text
        x="507"
        y="115"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        SERVICE RAMP
      </text>

      {/* Cliff drop-off */}
      <path
        d="M 695 255 Q 700 265 695 275"
        fill="none"
        stroke={C.dim}
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <text
        x="724"
        y="264"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        CLIFF DROP
      </text>

      {/* Direction arrow */}
      <defs>
        <marker id="tpr-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 Z" fill={C.accent} />
        </marker>
      </defs>
      <path
        d="M 155 230 Q 148 245 155 260"
        fill="none"
        stroke={C.accent}
        strokeWidth="2"
        markerEnd="url(#tpr-arrow)"
      />
      <text
        x="133"
        y="244"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        LAP DIR.
      </text>

      {/* Lap count watermark */}
      <text
        x="400"
        y="252"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="48"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.06em"
      >
        3 LAPS
      </text>

      {/* Grandstands */}
      <rect x="40" y="462" width="120" height="28" fill="none" stroke={C.faint} strokeWidth="1" />
      <text
        x="100"
        y="476"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        GRANDSTANDS
      </text>

      {/* Legend */}
      <circle cx="570" cy="448" r="7" fill="none" stroke={C.fg} strokeWidth="2" />
      <line x1="564" y1="442" x2="576" y2="454" stroke={C.fg} strokeWidth="1.5" />
      <line x1="576" y1="442" x2="564" y2="454" stroke={C.fg} strokeWidth="1.5" />
      <text
        x="584"
        y="448"
        textAnchor="start"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        CRASH
      </text>
      <polygon points="618,440 623,430 628,440" fill={C.dim} />
      <text
        x="636"
        y="436"
        textAnchor="start"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        HAZARD
      </text>
    </svg>
  )
}

export function PodracerLineup({ C }) {
  const racers = [
    { name: 'ANAKIN SKYWALKER', role: 'Hero / Winner', note: 'Slave boy, Force-guided reflexes' },
    { name: 'SEBULBA', role: 'Champion / Villain', note: 'Side-exhaust sabotage, serial cheater' },
    { name: 'GASGANO', role: 'Blocker', note: 'Anakin leaps over him at cliff drop' },
    { name: 'MAWHONIC', role: 'First casualty', note: 'Destroyed by Sebulba, lap 1 turn 1' },
    {
      name: 'BEN QUADINAROS',
      role: 'Comic relief',
      note: 'All four engines explode at worst moment'
    },
    { name: 'ODY MANDRELL', role: 'Pit incident', note: 'Droid DUM-4 sucked into his engine' },
    { name: 'XELBREE', role: 'Lap 2 casualty', note: "Destroyed by Sebulba's side vent" }
  ]

  const rowH = 54
  const svgH = racers.length * rowH + 82

  return (
    <svg
      viewBox={`0 0 800 ${svgH}`}
      width="100%"
      height="auto"
      aria-label="Podracer lineup for the Boonta Eve Classic"
      role="img"
    >
      <text
        x="400"
        y="32"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="18"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        BOONTA EVE CLASSIC, STARTING LINEUP
      </text>

      <text
        x="60"
        y="60"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        PILOT
      </text>
      <text
        x="280"
        y="60"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        RACE ROLE
      </text>
      <text
        x="440"
        y="60"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        OUTCOME / NOTE
      </text>
      <line x1="40" y1="70" x2="760" y2="70" stroke={C.faint} strokeWidth="1" />

      {racers.map((r, i) => {
        const y = 80 + i * rowH
        const isHero = i === 0
        const isVillain = i === 1
        const nameColor = isHero ? C.fg : isVillain ? C.accent : C.dim
        return (
          <g key={r.name}>
            <line
              x1="40"
              y1={y + rowH - 2}
              x2="760"
              y2={y + rowH - 2}
              stroke={C.faint}
              strokeWidth="0.5"
            />
            <text
              x="48"
              y={y + rowH / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
            >
              {String(i + 1).padStart(2, '0')}
            </text>
            <text
              x="68"
              y={y + rowH / 2}
              dominantBaseline="middle"
              fill={nameColor}
              fontSize="14"
              fontFamily="D-DIN, sans-serif"
              letterSpacing="0.03em"
            >
              {r.name}
            </text>
            <text
              x="280"
              y={y + rowH / 2}
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
            >
              {r.role}
            </text>
            <text
              x="440"
              y={y + rowH / 2}
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="12"
              fontFamily="D-DIN, sans-serif"
            >
              {r.note}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function RaceTimeline({ C }) {
  const events = [
    {
      lap: 'PRE-RACE',
      label: "Sebulba sabotages Anakin's engine strap, undetected",
      type: 'threat'
    },
    {
      lap: 'START',
      label: "Green light fires. Anakin's engine stalls. All others roar ahead.",
      type: 'crisis'
    },
    {
      lap: 'LAP 1',
      label: 'Sebulba destroys Mawhonic on turn 1. Stakes established.',
      type: 'threat'
    },
    {
      lap: 'LAP 1',
      label: 'Anakin battles Gasgano. Leaps over him at cliff drop-off.',
      type: 'hero'
    },
    { lap: 'LAP 1', label: 'Tusken Raiders open fire on field. Racers scatter.', type: 'threat' },
    { lap: 'LAP 2', label: 'Sebulba destroys Xelbree with side-exhaust vent.', type: 'threat' },
    {
      lap: 'LAP 2',
      label: 'Ody Mandrell pits. Droid DUM-4 sucked into engine, explodes.',
      type: 'action'
    },
    {
      lap: 'LAP 2',
      label: 'Ben Quadinaros: all four engines explode simultaneously.',
      type: 'action'
    },
    {
      lap: 'LAP 2',
      label: "Sebulba breaks Anakin's engine strap. Mechanical crisis.",
      type: 'crisis'
    },
    {
      lap: 'LAP 2',
      label: 'Anakin saves via service ramp. Force-instinct payoff. Climbs to second.',
      type: 'hero'
    },
    {
      lap: 'LAP 3',
      label: 'Anakin catches Sebulba. Side-by-side duel at full speed.',
      type: 'hero'
    },
    {
      lap: 'LAP 3',
      label: 'Steering rods hook together. Both Pods locked in tandem.',
      type: 'crisis'
    },
    {
      lap: 'LAP 3',
      label: "Anakin's arm breaks free. Sebulba hits ancient statue, crashes.",
      type: 'hero'
    },
    {
      lap: 'FINISH',
      label: 'Anakin wins. Crowd erupts. Probe droid observes Qui-Gon.',
      type: 'hero'
    }
  ]

  const typeColors = { threat: C.dim, crisis: C.accent, action: C.dim, hero: C.fg }
  const rowH = 44
  const svgH = events.length * rowH + 90

  return (
    <svg
      viewBox={`0 0 800 ${svgH}`}
      width="100%"
      height="auto"
      aria-label="Podrace event timeline: key moments across three laps"
      role="img"
    >
      <text
        x="400"
        y="32"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="18"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        RACE EVENT TIMELINE
      </text>

      <circle cx="130" cy="58" r="5" fill={C.fg} />
      <text
        x="140"
        y="58"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        HERO BEAT
      </text>
      <circle cx="242" cy="58" r="5" fill={C.accent} />
      <text
        x="252"
        y="58"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        CRISIS
      </text>
      <circle cx="322" cy="58" r="5" fill={C.dim} />
      <text
        x="332"
        y="58"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        ACTION / THREAT
      </text>

      <line x1="150" y1="75" x2="150" y2={svgH - 20} stroke={C.dim} strokeWidth="1.5" />

      {events.map((ev, i) => {
        const y = 80 + i * rowH
        const dotColor = typeColors[ev.type] || C.dim
        return (
          <g key={i}>
            <text
              x="60"
              y={y + rowH / 2 - 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="11"
              fontFamily="D-DIN, sans-serif"
              letterSpacing="0.06em"
            >
              {ev.lap}
            </text>
            <circle cx="150" cy={y + rowH / 2 - 2} r="5" fill={dotColor} />
            <line
              x1="155"
              y1={y + rowH / 2 - 2}
              x2="175"
              y2={y + rowH / 2 - 2}
              stroke={C.dim}
              strokeWidth="1"
            />
            <text
              x="182"
              y={y + rowH / 2 - 2}
              dominantBaseline="middle"
              fill={ev.type === 'hero' ? C.fg : C.dim}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
            >
              {ev.label}
            </text>
            <line
              x1="40"
              y1={y + rowH - 2}
              x2="760"
              y2={y + rowH - 2}
              stroke={C.faint}
              strokeWidth="0.4"
            />
          </g>
        )
      })}
    </svg>
  )
}

export function PodraceCharacterWeb({ C }) {
  const nodes = [
    {
      id: 'anakin',
      x: 400,
      y: 250,
      label: 'ANAKIN',
      sublabel: 'slave / pilot / hero',
      primary: true
    },
    { id: 'quigon', x: 400, y: 100, label: 'QUI-GON', sublabel: 'orchestrates the bet' },
    { id: 'watto', x: 570, y: 190, label: 'WATTO', sublabel: 'owner / loser' },
    { id: 'sebulba', x: 560, y: 350, label: 'SEBULBA', sublabel: 'rival / saboteur' },
    { id: 'shmi', x: 240, y: 350, label: 'SHMI', sublabel: 'watching mother' },
    { id: 'padme', x: 230, y: 190, label: 'PADME', sublabel: 'disguised queen' }
  ]

  const edges = [
    { from: 'anakin', to: 'quigon', label: 'coached / freed' },
    { from: 'anakin', to: 'watto', label: 'enslaved by' },
    { from: 'anakin', to: 'sebulba', label: 'rivals' },
    { from: 'anakin', to: 'shmi', label: 'son / farewell' },
    { from: 'anakin', to: 'padme', label: 'dream / kiss' },
    { from: 'quigon', to: 'watto', label: 'outwits via Force' }
  ]

  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <svg
      viewBox="0 0 800 450"
      width="100%"
      height="auto"
      aria-label="Character relationship diagram for The Podrace"
      role="img"
    >
      <text
        x="400"
        y="32"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="18"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        CHARACTER RELATIONSHIPS
      </text>

      {edges.map((e, i) => {
        const a = nodeMap[e.from]
        const b = nodeMap[e.to]
        const mx = (a.x + b.x) / 2
        const my = (a.y + b.y) / 2
        return (
          <g key={i}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={C.dim} strokeWidth="1.5" />
            <text
              x={mx}
              y={my - 8}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="11"
              fontFamily="D-DIN, sans-serif"
              letterSpacing="0.03em"
            >
              {e.label}
            </text>
          </g>
        )
      })}

      {nodes.map(n => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.primary ? 36 : 28}
            fill={C.faint}
            stroke={n.primary ? C.fg : C.dim}
            strokeWidth={n.primary ? 2 : 1}
          />
          <text
            x={n.x}
            y={n.y - 6}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={n.primary ? C.fg : C.accent}
            fontSize={n.primary ? 15 : 13}
            fontFamily="D-DIN, sans-serif"
            letterSpacing="0.04em"
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={C.dim}
            fontSize="11"
            fontFamily="D-DIN, sans-serif"
          >
            {n.sublabel}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function DmsCharacterWebSvg({ C }) {
  const nodes = [
    { id: 'anakin', label: 'ANAKIN', x: 400, y: 250, role: 'Center' },
    { id: 'shmi', label: 'SHMI', x: 220, y: 130, role: 'Mother' },
    { id: 'quigon', label: 'QUI-GON', x: 580, y: 130, role: 'Mentor' },
    { id: 'padme', label: 'PADME', x: 620, y: 360, role: 'Future Partner' },
    { id: 'obiwan', label: 'OBI-WAN', x: 400, y: 410, role: 'Future Master' },
    { id: 'kitster', label: 'KITSTER', x: 175, y: 360, role: 'Friend' },
    { id: 'threepio', label: 'THREEPIO', x: 215, y: 270, role: 'Creation' },
    { id: 'maul', label: 'DARTH MAUL', x: 580, y: 255, role: 'Enemy' }
  ]

  const edges = [
    { from: 'anakin', to: 'shmi', label: 'separation / wound' },
    { from: 'anakin', to: 'quigon', label: 'destiny / distance' },
    { from: 'anakin', to: 'padme', label: 'japor snippet / care' },
    { from: 'anakin', to: 'obiwan', label: 'skepticism / awe' },
    { from: 'anakin', to: 'kitster', label: 'loyalty / farewell' },
    { from: 'anakin', to: 'threepio', label: 'creator / unfinished' },
    { from: 'anakin', to: 'maul', label: 'witness to first clash' },
    { from: 'quigon', to: 'maul', label: 'first lightsaber duel' }
  ]

  const nodeMap = {}
  nodes.forEach(n => {
    nodeMap[n.id] = n
  })

  return (
    <svg
      viewBox="0 0 800 500"
      width="100%"
      height="auto"
      aria-label="Character relationship web for Departure and Maul Strikes"
      role="img"
    >
      <text
        x="400"
        y="36"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="17"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        CHARACTER WEB: DEPARTURE AND MAUL STRIKES
      </text>

      {edges.map((e, i) => {
        const a = nodeMap[e.from]
        const b = nodeMap[e.to]
        const mx = (a.x + b.x) / 2
        const my = (a.y + b.y) / 2
        return (
          <g key={i}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={C.dim}
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text
              x={mx}
              y={my}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="10"
              fontFamily="D-DIN, sans-serif"
              letterSpacing="0.03em"
            >
              {e.label}
            </text>
          </g>
        )
      })}

      {nodes.map(n => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r="34"
            fill="var(--bg)"
            stroke={n.id === 'anakin' ? C.accent : n.id === 'maul' ? C.fg : C.dim}
            strokeWidth={n.id === 'anakin' ? 2.5 : 1.5}
          />
          <text
            x={n.x}
            y={n.y - 8}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={n.id === 'anakin' ? C.accent : C.fg}
            fontSize="12"
            fontFamily="D-DIN, sans-serif"
            letterSpacing="0.05em"
            fontWeight="bold"
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={C.dim}
            fontSize="10"
            fontFamily="D-DIN, sans-serif"
            letterSpacing="0.03em"
          >
            {n.role}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function DarkSideTimelineSvg({ C }) {
  const beats = [
    { x: 110, label: 'PROBE DROID', sub: 'watches from hill', phase: 'covert' },
    { x: 260, label: 'DROID REPORTS', sub: 'Maul receives signal', phase: 'covert' },
    { x: 410, label: 'MAUL RIDES', sub: 'speeder to Mos Espa', phase: 'mobile' },
    { x: 555, label: 'FIRST STRIKE', sub: 'lightsaber drawn', phase: 'attack' },
    { x: 700, label: 'REPELLED', sub: 'knocked off ramp', phase: 'retreat' }
  ]

  return (
    <svg
      viewBox="0 0 800 220"
      width="100%"
      height="auto"
      aria-label="Dark side threat timeline from covert surveillance to open attack"
      role="img"
    >
      <text
        x="400"
        y="30"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="16"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        DARK SIDE THREAT ARC: COVERT TO OPEN
      </text>

      <line x1="80" y1="120" x2="730" y2="120" stroke={C.dim} strokeWidth="1.5" />

      <rect x="80" y="108" width="330" height="24" fill={C.faint} rx="2" opacity="0.6" />
      <text
        x="245"
        y="98"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.06em"
      >
        SURVEILLANCE
      </text>
      <rect x="410" y="108" width="145" height="24" fill={C.faint} rx="2" opacity="0.4" />
      <text
        x="482"
        y="98"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.06em"
      >
        TRANSIT
      </text>
      <rect x="555" y="108" width="175" height="24" fill={C.faint} rx="2" opacity="0.8" />
      <text
        x="642"
        y="98"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.06em"
      >
        ASSAULT
      </text>

      {beats.map((b, i) => (
        <g key={i}>
          <circle
            cx={b.x}
            cy={120}
            r="8"
            fill="var(--bg)"
            stroke={b.phase === 'attack' || b.phase === 'retreat' ? C.fg : C.dim}
            strokeWidth={b.phase === 'attack' ? 2.5 : 1.5}
          />
          <text
            x={b.x}
            y={150}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={b.phase === 'attack' ? C.fg : C.dim}
            fontSize="12"
            fontFamily="D-DIN, sans-serif"
            letterSpacing="0.04em"
          >
            {b.label}
          </text>
          <text
            x={b.x}
            y={170}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={C.dim}
            fontSize="10"
            fontFamily="D-DIN, sans-serif"
          >
            {b.sub}
          </text>
        </g>
      ))}

      <text
        x="400"
        y="205"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        The dark side shifts from watching to striking across a single scene sequence.
      </text>
    </svg>
  )
}

export function IncompleteLiberationSvg({ C }) {
  return (
    <svg
      viewBox="0 0 800 300"
      width="100%"
      height="auto"
      aria-label="Anakin's freedom vs Shmi's continued captivity"
      role="img"
    >
      <text
        x="400"
        y="32"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="15"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        THE INCOMPLETE LIBERATION
      </text>

      {/* Anakin column - FREE */}
      <rect
        x="80"
        y="60"
        width="260"
        height="190"
        fill="var(--bg)"
        stroke={C.accent}
        strokeWidth="1.5"
      />
      <text
        x="210"
        y="90"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.06em"
        fontWeight="bold"
      >
        ANAKIN
      </text>
      <text
        x="210"
        y="115"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
      >
        FREED
      </text>
      <text
        x="210"
        y="155"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        Wins the podrace.
      </text>
      <text
        x="210"
        y="175"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        Watto releases his contract.
      </text>
      <text
        x="210"
        y="195"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        Walks onto the ship.
      </text>
      <text
        x="210"
        y="225"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        COST: everything else
      </text>

      {/* Shmi column - STILL ENSLAVED */}
      <rect
        x="460"
        y="60"
        width="260"
        height="190"
        fill="var(--bg)"
        stroke={C.dim}
        strokeWidth="1.5"
        strokeDasharray="6 3"
      />
      <text
        x="590"
        y="90"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.06em"
        fontWeight="bold"
      >
        SHMI
      </text>
      <text
        x="590"
        y="115"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
      >
        STILL ENSLAVED
      </text>
      <text
        x="590"
        y="155"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        Watto refused the offer.
      </text>
      <text
        x="590"
        y="175"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        Money was not enough.
      </text>
      <text
        x="590"
        y="195"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        Stays on Tatooine.
      </text>
      {/* Arrow between */}
      <line
        x1="345"
        y1="155"
        x2="455"
        y2="155"
        stroke={C.dim}
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <text
        x="400"
        y="145"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        PAID FOR BY
      </text>
    </svg>
  )
}

export function FarewellCascadeSvg({ C }) {
  const steps = [
    { x: 80, label: 'WAKES THREEPIO', sub: 'leaves him unfinished' },
    { x: 220, label: 'GIVES KITSTER', sub: 'coins, promises to remember' },
    { x: 360, label: 'STARTS WALKING', sub: 'toward Qui-Gon' },
    { x: 500, label: 'RUNS BACK', sub: '"I cannot do it, Mom"' },
    { x: 640, label: 'STARTS AGAIN', sub: 'Shmi points him forward' }
  ]

  return (
    <svg
      viewBox="0 0 720 200"
      width="100%"
      height="auto"
      aria-label="Anakin's five-step farewell cascade"
      role="img"
    >
      <text
        x="360"
        y="28"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="15"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.07em"
      >
        THE FAREWELL CASCADE: FIVE ATTEMPTS TO LEAVE
      </text>

      <line x1="65" y1="95" x2="660" y2="95" stroke={C.dim} strokeWidth="1" strokeDasharray="3 2" />

      {steps.map((s, i) => (
        <g key={i}>
          <circle
            cx={s.x}
            cy={95}
            r="10"
            fill="var(--bg)"
            stroke={i === 3 ? C.accent : C.dim}
            strokeWidth={i === 3 ? 2 : 1.5}
          />
          <text
            x={s.x}
            y={68}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={i === 3 ? C.accent : C.fg}
            fontSize="10"
            fontFamily="D-DIN, sans-serif"
            letterSpacing="0.04em"
          >
            {s.label}
          </text>
          <text
            x={s.x}
            y={125}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={C.dim}
            fontSize="9"
            fontFamily="D-DIN, sans-serif"
          >
            {s.sub}
          </text>
          {i < steps.length - 1 && (
            <text
              x={s.x + 70}
              y={88}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="16"
              fontFamily="D-DIN, sans-serif"
            >
              {i === 2 ? '!' : '>'}
            </text>
          )}
        </g>
      ))}

      <text
        x="360"
        y="168"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.03em"
      >
        Each return shows loyalty past the point of comfort. The run-back is highlighted.
      </text>
    </svg>
  )
}

export function TwoInstructionsSvg({ C }) {
  return (
    <svg
      viewBox="0 0 800 240"
      width="100%"
      height="auto"
      aria-label="Anakin's two contradictory instructions pulling him apart"
      role="img"
    >
      <text
        x="400"
        y="28"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="15"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.07em"
      >
        TWO INSTRUCTIONS, ONE WOUND
      </text>

      {/* Left arrow: Anakin's vow */}
      <text
        x="130"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        "I WILL COME BACK"
      </text>
      <text
        x="130"
        y="120"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        Anakin's promise
      </text>
      <line
        x1="240"
        y1="130"
        x2="340"
        y2="130"
        stroke={C.accent}
        strokeWidth="1.5"
        markerEnd="url(#arrow-l)"
      />

      {/* Center: Anakin */}
      <circle cx="400" cy="130" r="30" fill="var(--bg)" stroke={C.fg} strokeWidth="2" />
      <text
        x="400"
        y="126"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
        fontWeight="bold"
      >
        ANAKIN
      </text>
      <text
        x="400"
        y="142"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="9"
        fontFamily="D-DIN, sans-serif"
      >
        torn
      </text>

      {/* Right arrow: Shmi's instruction */}
      <line x1="460" y1="130" x2="560" y2="130" stroke={C.dim} strokeWidth="1.5" />
      <text
        x="670"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        "DON'T LOOK BACK"
      </text>
      <text
        x="670"
        y="120"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        Shmi's instruction
      </text>

      <text
        x="400"
        y="195"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.03em"
      >
        He cannot follow both. The instruction and the flaw are the same.
      </text>
    </svg>
  )
}

export function MaulAttackSvg({ C }) {
  return (
    <svg
      viewBox="0 0 800 280"
      width="100%"
      height="auto"
      aria-label="Maul attack spatial map and combat tempo"
      role="img"
    >
      <text
        x="400"
        y="28"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="15"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.07em"
      >
        MAUL'S ATTACK: POSITION AND TEMPO
      </text>

      {/* Ground */}
      <line x1="60" y1="200" x2="740" y2="200" stroke={C.dim} strokeWidth="1" />
      <text
        x="400"
        y="218"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        TATOOINE DESERT
      </text>

      {/* Naboo ship */}
      <rect
        x="65"
        y="155"
        width="80"
        height="40"
        fill="var(--bg)"
        stroke={C.dim}
        strokeWidth="1.5"
      />
      <text
        x="105"
        y="172"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        NABOO
      </text>
      <text
        x="105"
        y="185"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        SHIP
      </text>

      {/* Maul speeder approach */}
      <line
        x1="700"
        y1="200"
        x2="430"
        y2="200"
        stroke={C.fg}
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <circle cx="700" cy="200" r="8" fill="var(--bg)" stroke={C.fg} strokeWidth="1.5" />
      <text
        x="700"
        y="178"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        MAUL
      </text>
      <text
        x="700"
        y="165"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="9"
        fontFamily="D-DIN, sans-serif"
      >
        speeder arrives
      </text>

      {/* Duel zone */}
      <circle
        cx="400"
        cy="190"
        r="20"
        fill="var(--bg)"
        stroke={C.accent}
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <text
        x="400"
        y="153"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        DUEL ZONE
      </text>
      <text
        x="400"
        y="143"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="9"
        fontFamily="D-DIN, sans-serif"
      >
        Qui-Gon barely blocks
      </text>

      {/* Qui-Gon position */}
      <circle cx="270" cy="200" r="8" fill="var(--bg)" stroke={C.dim} strokeWidth="1.5" />
      <text
        x="270"
        y="178"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="11"
        fontFamily="D-DIN, sans-serif"
      >
        QUI-GON
      </text>

      {/* Anakin runs */}
      <line
        x1="270"
        y1="200"
        x2="155"
        y2="200"
        stroke={C.dim}
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <text
        x="210"
        y="175"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="9"
        fontFamily="D-DIN, sans-serif"
      >
        Anakin runs
      </text>

      {/* Tempo rows */}
      <text
        x="400"
        y="245"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        Maul jumps before the speeder stops. His lightsaber swings before his feet land.
      </text>
      <text
        x="400"
        y="262"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        Attack is already in progress before arrival. Qui-Gon is always one beat behind.
      </text>
    </svg>
  )
}

export function FirstMeetingSvg({ C }) {
  return (
    <svg
      viewBox="0 0 800 260"
      width="100%"
      height="auto"
      aria-label="First meeting between Obi-Wan and Anakin"
      role="img"
    >
      <text
        x="400"
        y="28"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="15"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.07em"
      >
        FIRST MEETING: OBI-WAN AND ANAKIN
      </text>

      {/* Obi-Wan */}
      <rect
        x="80"
        y="65"
        width="240"
        height="155"
        fill="var(--bg)"
        stroke={C.dim}
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="95"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
        fontWeight="bold"
      >
        OBI-WAN
      </text>
      <text
        x="200"
        y="120"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        SKEPTICAL
      </text>
      <text
        x="200"
        y="145"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        "pathetic life form"
      </text>
      <text
        x="200"
        y="163"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        sees a boy, not a Jedi
      </text>
      <text
        x="200"
        y="181"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        gives "the look"
      </text>
      <text
        x="200"
        y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        cool, distant
      </text>

      {/* Anakin */}
      <rect
        x="480"
        y="65"
        width="240"
        height="155"
        fill="var(--bg)"
        stroke={C.accent}
        strokeWidth="1.5"
      />
      <text
        x="600"
        y="95"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
        fontWeight="bold"
      >
        ANAKIN
      </text>
      <text
        x="600"
        y="120"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        AWESTRUCK
      </text>
      <text
        x="600"
        y="145"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        "Wow! You're a Jedi too?"
      </text>
      <text
        x="600"
        y="163"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        innocent, open
      </text>
      <text
        x="600"
        y="181"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        already lost everything
      </text>
      <text
        x="600"
        y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
      >
        trusts completely
      </text>

      <text
        x="400"
        y="142"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        VS.
      </text>

      <text
        x="400"
        y="238"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="10"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.03em"
      >
        Obi-Wan is one step behind seeing who Anakin truly is.
      </text>
    </svg>
  )
}

const POWER_WEB_NODES = [
  { id: 'palpatine', x: 400, y: 240, label: 'PALPATINE', sub: 'Hidden Architect', highlight: true },
  { id: 'valorum', x: 200, y: 130, label: 'VALORUM', sub: 'Supreme Chancellor' },
  { id: 'amidala', x: 580, y: 130, label: 'AMIDALA', sub: 'Queen of Naboo' },
  { id: 'senate', x: 130, y: 310, label: 'SENATE', sub: 'Bureaucratic Body' },
  { id: 'jedi', x: 580, y: 360, label: 'JEDI COUNCIL', sub: 'Guardians of Peace' },
  { id: 'federation', x: 720, y: 240, label: 'TRADE FED.', sub: 'Lott Dod / Nute Gunray' }
]

const POWER_WEB_EDGES = [
  { x1: 400, y1: 240, x2: 580, y2: 130, label: 'manipulates', dashed: true, accent: true },
  { x1: 400, y1: 240, x2: 200, y2: 130, label: 'betrays', dashed: true, accent: false },
  { x1: 400, y1: 240, x2: 720, y2: 240, label: 'orchestrates', dashed: true, accent: false },
  { x1: 580, y1: 130, x2: 130, y2: 310, label: 'addresses', dashed: false, accent: false },
  { x1: 200, y1: 130, x2: 130, y2: 310, label: 'chairs', dashed: false, accent: false },
  { x1: 720, y1: 240, x2: 130, y2: 310, label: 'obstructs', dashed: true, accent: false },
  { x1: 580, y1: 130, x2: 580, y2: 360, label: 'travels with', dashed: false, accent: false },
  { x1: 400, y1: 240, x2: 580, y2: 360, label: 'withholds from', dashed: true, accent: false }
]

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

const TIMELINE_ROW_H = 48
const TIMELINE_SVG_H = TIMELINE_EVENTS.length * TIMELINE_ROW_H + 80

function phaseColor(phase, C) {
  if (phase === 'manipulation' || phase === 'senate') return C.accent
  if (phase === 'jedi') return C.fg
  return C.dim
}

export function PoliticalPowerWeb({ C }) {
  return (
    <svg
      viewBox="0 0 800 480"
      width="100%"
      height="auto"
      aria-label="Political power web showing Palpatine's manipulation of Coruscant factions"
      role="img"
    >
      <text
        x="400"
        y="30"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="16"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        CORUSCANT POWER WEB
      </text>

      {POWER_WEB_EDGES.map((e, i) => (
        <line
          key={i}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke={e.accent ? C.accent : C.dim}
          strokeWidth={e.accent ? 1.5 : 1}
          strokeDasharray={e.dashed ? '6 4' : undefined}
          opacity={e.dashed ? 0.7 : 0.5}
        />
      ))}

      {POWER_WEB_NODES.map(n => (
        <g key={n.id}>
          <rect
            x={n.x - 62}
            y={n.y - 26}
            width={124}
            height={52}
            fill="var(--bg)"
            stroke={n.highlight ? C.accent : C.dim}
            strokeWidth={n.highlight ? 1.5 : 1}
          />
          <text
            x={n.x}
            y={n.y - 7}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={n.highlight ? C.accent : C.fg}
            fontSize="13"
            fontFamily="D-DIN, sans-serif"
            letterSpacing="0.06em"
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + 11}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={C.dim}
            fontSize="13"
            fontFamily="D-DIN, sans-serif"
          >
            {n.sub}
          </text>
        </g>
      ))}

      <text
        x="400"
        y="460"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        DASHED = hidden influence · SOLID = public relationship · HIGHLIGHTED = architect of
        outcomes
      </text>
    </svg>
  )
}

export function CoruscantModuleTimeline({ C }) {
  return (
    <svg
      viewBox={`0 0 800 ${TIMELINE_SVG_H}`}
      width="100%"
      height="auto"
      aria-label="Scene-by-scene timeline of the Coruscant Politics module"
      role="img"
    >
      <text
        x="400"
        y="28"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="16"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        SCENE TIMELINE
      </text>

      <line x1="120" y1="52" x2="120" y2={TIMELINE_SVG_H - 16} stroke={C.dim} strokeWidth="1" />

      {TIMELINE_EVENTS.map((e, i) => {
        const y = 56 + i * TIMELINE_ROW_H
        const color = phaseColor(e.phase, C)
        return (
          <g key={i}>
            <circle cx="120" cy={y + TIMELINE_ROW_H / 2 - 6} r="5" fill={color} />
            <line
              x1="125"
              y1={y + TIMELINE_ROW_H / 2 - 6}
              x2="145"
              y2={y + TIMELINE_ROW_H / 2 - 6}
              stroke={color}
              strokeWidth="1"
            />
            <text
              x="96"
              y={y + TIMELINE_ROW_H / 2 - 6}
              textAnchor="end"
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
            >
              {String(i + 1).padStart(2, '0')}
            </text>
            <text
              x="150"
              y={y + TIMELINE_ROW_H / 2 - 14}
              dominantBaseline="middle"
              fill={color}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
              letterSpacing="0.04em"
            >
              {e.label}
            </text>
            <text
              x="150"
              y={y + TIMELINE_ROW_H / 2 + 4}
              dominantBaseline="middle"
              fill={C.dim}
              fontSize="13"
              fontFamily="D-DIN, sans-serif"
            >
              {e.sub}
            </text>
            <line
              x1="40"
              y1={y + TIMELINE_ROW_H - 2}
              x2="760"
              y2={y + TIMELINE_ROW_H - 2}
              stroke={C.faint}
              strokeWidth="0.5"
            />
          </g>
        )
      })}

      <text
        x="400"
        y={TIMELINE_SVG_H - 6}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        HIGHLIGHTED = Palpatine's manipulation arc · WHITE = Jedi thread · DIM =
        personal/transitional
      </text>
    </svg>
  )
}

export function BattleMap({ C }) {
  return (
    <svg
      viewBox="0 0 800 520"
      width="100%"
      height="auto"
      aria-label="Four simultaneous battle fronts at the Battle of Naboo"
      role="img"
    >
      <text
        x="400"
        y="32"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="18"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        BATTLE OF NABOO: FOUR SIMULTANEOUS FRONTS
      </text>

      {/* ── FRONT 1: Gungan Plains (bottom-left) ─────────────────────────── */}
      <rect x="60" y="290" width="220" height="170" fill={C.faint} stroke={C.dim} strokeWidth="1" />
      <text
        x="170"
        y="312"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        GRASS PLAINS
      </text>
      <text
        x="170"
        y="334"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
      >
        Gungan Army
      </text>
      <text
        x="170"
        y="354"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        vs. Droid Army
      </text>
      <text
        x="170"
        y="380"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Result: Captured
      </text>
      <text
        x="170"
        y="400"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        then freed by Anakin
      </text>
      <text
        x="170"
        y="440"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        DIVERSION FRONT
      </text>

      {/* ── FRONT 2: Theed Palace (bottom-right) ─────────────────────────── */}
      <rect
        x="520"
        y="290"
        width="220"
        height="170"
        fill={C.faint}
        stroke={C.dim}
        strokeWidth="1"
      />
      <text
        x="630"
        y="312"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        THEED PALACE
      </text>
      <text
        x="630"
        y="334"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
      >
        Padme's Team
      </text>
      <text
        x="630"
        y="354"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        vs. Nute Gunray
      </text>
      <text
        x="630"
        y="380"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Result: Viceroy captured
      </text>
      <text
        x="630"
        y="440"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        POLITICAL OBJECTIVE
      </text>

      {/* ── FRONT 3: Power Generator (top-left) ─────────────────────────── */}
      <rect x="60" y="80" width="220" height="180" fill={C.faint} stroke={C.dim} strokeWidth="1" />
      <text
        x="170"
        y="102"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        POWER GENERATOR
      </text>
      <text
        x="170"
        y="124"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
      >
        Qui-Gon + Obi-Wan
      </text>
      <text
        x="170"
        y="144"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        vs. Darth Maul
      </text>
      <text
        x="170"
        y="170"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Result: Qui-Gon killed
      </text>
      <text
        x="170"
        y="190"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Maul defeated by Obi-Wan
      </text>
      <text
        x="170"
        y="240"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        JEDI DUEL
      </text>

      {/* ── FRONT 4: Space Battle (top-right) ─────────────────────────── */}
      <rect x="520" y="80" width="220" height="180" fill={C.faint} stroke={C.dim} strokeWidth="1" />
      <text
        x="630"
        y="102"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="14"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.05em"
      >
        ORBIT / SPACE
      </text>
      <text
        x="630"
        y="124"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
      >
        Anakin (accidental)
      </text>
      <text
        x="630"
        y="144"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        vs. Droid Control Ship
      </text>
      <text
        x="630"
        y="170"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Result: Reactor destroyed
      </text>
      <text
        x="630"
        y="190"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        ALL droids shut down
      </text>
      <text
        x="630"
        y="240"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.accent}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
      >
        DECISIVE FRONT
      </text>

      {/* ── Center label ─────────────────────────────────────────────────── */}
      <text
        x="400"
        y="185"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="13"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
        stroke="#000"
        strokeWidth="4"
        paintOrder="stroke"
      >
        SIMULTANEOUS
      </text>
      <text
        x="400"
        y="205"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="rgba(255, 255, 255, 0.18)"
        fontSize="40"
        fontFamily="D-DIN, sans-serif"
      >
        4
      </text>
      <text
        x="400"
        y="235"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.04em"
        stroke="#000"
        strokeWidth="4"
        paintOrder="stroke"
      >
        FRONTS
      </text>

      {/* ── Connection arrow: Space to Plains (Anakin wins = droids stop) ── */}
      <defs>
        <marker id="rbn-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 Z" fill={C.accent} />
        </marker>
      </defs>
      <path
        d="M 520 170 Q 400 170 280 375"
        fill="none"
        stroke={C.accent}
        strokeWidth="1.5"
        strokeDasharray="6 4"
        markerEnd="url(#rbn-arrow)"
      />
      <text
        x="380"
        y="270"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.03em"
        stroke="#000"
        strokeWidth="4"
        paintOrder="stroke"
      >
        Anakin destroys reactor
      </text>
      <text
        x="380"
        y="288"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.03em"
        stroke="#000"
        strokeWidth="4"
        paintOrder="stroke"
      >
        = all droids shut down
      </text>
    </svg>
  )
}

export function CharacterArcTimeline({ C }) {
  const characters = [
    {
      name: 'ANAKIN',
      color: C.fg,
      beats: [
        { x: 100, label: 'Hangar' },
        { x: 260, label: 'Space' },
        { x: 420, label: 'Control Ship' },
        { x: 580, label: 'Hero' },
        { x: 700, label: 'Padawan' }
      ]
    },
    {
      name: 'OBI-WAN',
      color: C.dim,
      beats: [
        { x: 100, label: 'Reconcile' },
        { x: 260, label: 'Fight' },
        { x: 420, label: 'Separated' },
        { x: 500, label: 'Grief' },
        { x: 580, label: 'Kills Maul' },
        { x: 700, label: 'Knight' }
      ]
    },
    {
      name: 'PADME',
      color: C.accent,
      beats: [
        { x: 100, label: 'Alliance' },
        { x: 260, label: 'Captured' },
        { x: 420, label: 'Escapes' },
        { x: 580, label: 'Victory' },
        { x: 700, label: 'Queen' }
      ]
    },
    {
      name: 'QUI-GON',
      color: C.dim,
      beats: [
        { x: 100, label: 'Forgives' },
        { x: 260, label: 'Fights Maul' },
        { x: 380, label: 'Death' }
      ]
    }
  ]

  return (
    <svg
      viewBox="0 0 800 390"
      width="100%"
      height="auto"
      aria-label="Character arc timeline for the Battle of Naboo"
      role="img"
    >
      <text
        x="400"
        y="32"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.fg}
        fontSize="18"
        fontFamily="D-DIN, sans-serif"
        letterSpacing="0.08em"
      >
        CHARACTER ARCS: RETURN AND BATTLE OF NABOO
      </text>

      {characters.map((char, ci) => {
        const y = 80 + ci * 72
        const lineY = y + 18
        return (
          <g key={char.name}>
            {/* Character name */}
            <text
              x="36"
              y={lineY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={char.color}
              fontSize="12"
              fontFamily="D-DIN, sans-serif"
              letterSpacing="0.05em"
            >
              {char.name}
            </text>
            {/* Arc line */}
            <line
              x1={char.beats[0].x}
              y1={lineY}
              x2={char.beats[char.beats.length - 1].x}
              y2={lineY}
              stroke={char.color}
              strokeWidth="1.5"
              opacity="0.5"
            />
            {/* Beat dots and labels */}
            {char.beats.map((beat, bi) => (
              <g key={bi}>
                <circle cx={beat.x} cy={lineY} r="5" fill={char.color} />
                <text
                  x={beat.x}
                  y={lineY + (bi % 2 === 0 ? 18 : -14)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={char.color}
                  fontSize="11"
                  fontFamily="D-DIN, sans-serif"
                >
                  {beat.label}
                </text>
              </g>
            ))}
          </g>
        )
      })}

      {/* Legend */}
      <circle cx="100" cy="368" r="5" fill={C.fg} />
      <text
        x="112"
        y="368"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Anakin
      </text>
      <circle cx="200" cy="368" r="5" fill={C.dim} />
      <text
        x="212"
        y="368"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Obi-Wan / Qui-Gon
      </text>
      <circle cx="380" cy="368" r="5" fill={C.accent} />
      <text
        x="392"
        y="368"
        dominantBaseline="middle"
        fill={C.dim}
        fontSize="12"
        fontFamily="D-DIN, sans-serif"
      >
        Padme
      </text>
    </svg>
  )
}
