// BOOK I - THE SHADOW OF THE TORTURER
// Faithful to Wolfe's text. Every node carries a section citation; every
// edge traces to a scene. Clickable nodes reveal scene tooltips.

import React from 'react'
import {
  Canvas,
  Label,
  Tooltip,
  useTooltip,
  Slider,
  Toggle,
  ModuleTimeline,
  Hatch,
  CrossHatch,
  Stipple,
  FG,
  OPACITY
} from '../../../primitives'
import {
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  LS_COMPACT,
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

// I.01.1 - Guild Hierarchy
export function GuildHierarchy() {
  const [tip, setTip] = useTooltip()
  const figures = {
    palaemon: {
      x: 170,
      y: 165,
      label: 'Palaemon',
      sub: 'teacher · lens eyes',
      cite: '§2, 11, 35',
      body: "Severian's teacher; bestows Terminus Est at the parting."
    },
    gurloes: {
      x: 400,
      y: 165,
      label: 'Gurloes',
      sub: 'head master',
      cite: '§7–12',
      body: 'Receives Thecla; complicit when Severian gives her the knife.'
    },
    malrubius: {
      x: 630,
      y: 165,
      label: 'Malrubius',
      sub: 'returns in dream',
      cite: '§13',
      body: 'Once Master of Apprentices; appears to Severian in fever-dream.'
    },
    roche: {
      x: 250,
      y: 320,
      label: 'Roche',
      sub: 'senior journeyman',
      cite: '§1, 9',
      body: 'Watches the necropolis gate the night Vodalus appears.'
    },
    others: {
      x: 550,
      y: 320,
      label: '(others)',
      sub: 'unnamed',
      cite: '-',
      body: 'The volume mentions but does not name them.'
    },
    drotte: {
      x: 200,
      y: 470,
      label: 'Drotte',
      sub: 'captain → journeyman',
      cite: '§1–11',
      body: "Severian's predecessor as Captain of Apprentices; masked in §11."
    },
    severian: {
      x: 400,
      y: 470,
      label: 'Severian',
      sub: 'captain · then exile',
      cite: '§1, 12, 35',
      body: 'Rises from apprentice to journeyman; exiled to Thrax as carnifex.'
    },
    eata: {
      x: 600,
      y: 470,
      label: 'Eata',
      sub: 'successor captain',
      cite: '§11',
      body: 'Inherits the captaincy after Severian rises.'
    }
  }
  const bars = [
    { id: 'masters', x: 400, y: 70, w: 220, label: 'MASTERS', sub: 'full guild authority' },
    { id: 'carnifex', x: 680, y: 70, w: 140, label: 'CARNIFEX', sub: 'executioner branch' },
    { id: 'journey', x: 400, y: 248, w: 220, label: 'JOURNEYMEN', sub: 'fuligin cloak · masked' },
    { id: 'apprent', x: 400, y: 390, w: 280, label: 'APPRENTICES', sub: 'captain leads them' }
  ]
  const edges = [
    [
      { x: 400, y: 88 },
      { x: 170, y: 142 }
    ],
    [
      { x: 400, y: 88 },
      { x: 400, y: 142 }
    ],
    [
      { x: 400, y: 88 },
      { x: 630, y: 142 }
    ],
    [
      { x: 170, y: 188 },
      { x: 400, y: 230 }
    ],
    [
      { x: 400, y: 188 },
      { x: 400, y: 230 }
    ],
    [
      { x: 630, y: 188 },
      { x: 400, y: 230 }
    ],
    [
      { x: 400, y: 266 },
      { x: 250, y: 300 }
    ],
    [
      { x: 400, y: 266 },
      { x: 550, y: 300 }
    ],
    [
      { x: 250, y: 340 },
      { x: 400, y: 372 }
    ],
    [
      { x: 550, y: 340 },
      { x: 400, y: 372 }
    ],
    [
      { x: 400, y: 408 },
      { x: 200, y: 450 }
    ],
    [
      { x: 400, y: 408 },
      { x: 400, y: 450 }
    ],
    [
      { x: 400, y: 408 },
      { x: 600, y: 450 }
    ],
    [{ x: 470, y: 70 }, { x: 610, y: 70 }, 'dash'],
    [{ x: 430, y: 470 }, { x: 680, y: 88 }, 'dash']
  ]
  return (
    <Canvas w={800} h={560}>
      <Label x={400} y={28} anchor="middle" size={FONT_SMALL}>
        GUILD OF THE SEEKERS FOR TRUTH AND PENITENCE
      </Label>
      {edges.map(([a, b, k], i) => (
        <line
          key={i}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_GUIDE}
          strokeDasharray={k === 'dash' ? '3 4' : null}
        />
      ))}
      {bars.map(b => (
        <g key={b.id}>
          <rect
            x={b.x - b.w / 2}
            y={b.y - 20}
            width={b.w}
            height={40}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={b.x}
            y={b.y - 2}
            fill={FG}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            letterSpacing={LS_TITLE}
          >
            {b.label}
          </text>
          <text
            x={b.x}
            y={b.y + 14}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {b.sub}
          </text>
        </g>
      ))}
      {Object.entries(figures).map(([k, f]) => (
        <g
          key={k}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: f.x, y: f.y, title: f.label, body: f.body, cite: f.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={f.x}
            cy={f.y}
            r={10}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={k === 'severian' ? OPACITY.fg : OPACITY.dim}
            strokeWidth={k === 'severian' ? STROKE_PRIMARY : STROKE_SECONDARY}
          />
          <text
            x={f.x}
            y={f.y + 24}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_COMPACT}
          >
            {f.label}
          </text>
          <text
            x={f.x}
            y={f.y + 38}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {f.sub}
          </text>
          <circle cx={f.x} cy={f.y} r={22} fill="transparent" />
        </g>
      ))}
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// I.01.2 - Citadel Map (clickable features)
export function CitadelMap() {
  const [tip, setTip] = useTooltip()
  const features = [
    {
      id: 'matachin',
      body: 'Guild seat. Severian sleeps here.\nOubliette beneath; gun above.',
      cite: '§2–13'
    },
    {
      id: 'bell',
      body: "Witches' rival keep - bells\nover the Citadel ring at duties.",
      cite: '§4'
    },
    {
      id: 'witches',
      body: "Severian's friends at the great\nbarbican; not under the Guild.",
      cite: '§4'
    },
    {
      id: 'curators',
      body: "Cyby, Master Ultan's apprentice,\nlives in the library curators' wing.",
      cite: '§5'
    },
    {
      id: 'pinako',
      body: 'Picture-galleries. Severian visits\nthe astronaut painting (Vodalus theft).',
      cite: '§5'
    },
    {
      id: 'atrium',
      body: 'Where Severian first met Valeria\nas a child; he returns at the end.',
      cite: 'Bk IV, §XXXVII'
    },
    { id: 'locked', body: 'Severian opens this to leave\nfor exile to Thrax.', cite: '§12' }
  ]
  const F = id => features.find(f => f.id === id)
  const flash = id => tip && tip.id === id
  const showTip = (id, x, y) =>
    setTip({ id, x, y, title: id.toUpperCase(), body: F(id).body, cite: F(id).cite })
  return (
    <Canvas w={800} h={580}>
      <Hatch id="cit-grass" angle={45} gap={6} opacity={0.07} />
      <Hatch id="cit-stone" angle={90} gap={3} opacity={0.18} strokeWidth={STROKE_HAIR} />
      <Hatch id="cit-river" angle={0} gap={4} opacity={0.1} />
      <CrossHatch id="cit-floor" gap={6} opacity={0.08} />

      <Label x={40} y={32} size={FONT_SMALL}>
        THE CITADEL · SOUTHERN NESSUS
      </Label>
      <Label x={760} y={32} size={FONT_SMALL} anchor="end">
        N ↑
      </Label>

      <rect x={0} y={60} width={800} height={460} fill="url(#cit-grass)" />

      <path
        d="M 140 110 Q 90 280 200 460 Q 360 540 540 500 Q 660 460 680 320 Q 690 200 600 130 Q 420 70 300 90 Z"
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <path
        d="M 140 110 Q 90 280 200 460 Q 360 540 540 500 Q 660 460 680 320 Q 690 200 600 130 Q 420 70 300 90 Z"
        fill="url(#cit-floor)"
      />
      <Stipple x={92} y={80} w={600} h={460} n={140} seed={71} opacity={0.18} r={0.7} />

      {Array.from({ length: 16 }).map((_, i) => {
        const tx = 200 + i * 22
        return <rect key={i} x={tx} y={84} width={8} height={5} fill={FG} opacity={OPACITY.dim} />
      })}
      <Label x={380} y={76} anchor="middle" size={FONT_SMALL}>
        CURTAIN WALL
      </Label>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => showTip('matachin', 400, 280)}
        onMouseLeave={() => setTip(null)}
      >
        <rect
          x={350}
          y={220}
          width={100}
          height={120}
          fill="url(#cit-stone)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: 9 }).map((_, i) => (
          <rect
            key={i}
            x={350 + i * 11}
            y={212}
            width={6}
            height={8}
            fill={FG}
            opacity={OPACITY.fg}
          />
        ))}
        {[0, 1, 2, 3].map(r => (
          <g key={r}>
            <rect
              x={376}
              y={244 + r * 22}
              width={6}
              height={12}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
            <rect
              x={418}
              y={244 + r * 22}
              width={6}
              height={12}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
          </g>
        ))}
        <path
          d="M 392 326 L 392 340 L 408 340 L 408 326 Q 408 318 400 318 Q 392 318 392 326 Z"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
      </g>
      <text
        x={400}
        y={360}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        letterSpacing={LS_TITLE}
      >
        MATACHIN
      </text>
      <text
        x={400}
        y={374}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        tower of the guild
      </text>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => showTip('bell', 230, 200)}
        onMouseLeave={() => setTip(null)}
      >
        <circle
          cx={230}
          cy={200}
          r={32}
          fill="url(#cit-stone)"
          stroke={FG}
          strokeOpacity={flash('bell') ? OPACITY.fg : OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <path
          d="M 200 200 Q 230 168 260 200"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <path
          d="M 224 188 Q 224 180 230 180 Q 236 180 236 188 L 238 200 L 222 200 Z"
          fill={FG}
          opacity={OPACITY.fg}
        />
        <circle cx={230} cy={202} r="1.8" fill="var(--bg)" />
      </g>
      <text
        x={230}
        y={252}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        letterSpacing={LS_UPPER}
      >
        BELL KEEP
      </text>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => showTip('witches', 570, 200)}
        onMouseLeave={() => setTip(null)}
      >
        <circle
          cx={570}
          cy={200}
          r={32}
          fill="url(#cit-stone)"
          stroke={FG}
          strokeOpacity={flash('witches') ? OPACITY.fg : OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <path d="M 560 174 L 570 154 L 580 174 Z" fill={FG} opacity={OPACITY.fg} />
        <path
          d="M 564 196 A 8 8 0 1 0 564 212 A 6 6 0 1 1 564 196 Z"
          fill={FG}
          opacity={OPACITY.fg}
        />
      </g>
      <text
        x={570}
        y={252}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        letterSpacing={LS_UPPER}
      >
        WITCHES' KEEP
      </text>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => showTip('curators', 240, 350)}
        onMouseLeave={() => setTip(null)}
      >
        <rect
          x={208}
          y={328}
          width={64}
          height={44}
          fill="url(#cit-stone)"
          stroke={FG}
          strokeOpacity={flash('curators') ? OPACITY.fg : OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 1, 2].map(i => (
          <rect
            key={i}
            x={216 + i * 14}
            y={340}
            width={10}
            height={20}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_HAIR}
          />
        ))}
      </g>
      <text
        x={240}
        y={386}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        curators
      </text>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => showTip('pinako', 560, 350)}
        onMouseLeave={() => setTip(null)}
      >
        <rect
          x={520}
          y={328}
          width={80}
          height={44}
          fill="url(#cit-stone)"
          stroke={FG}
          strokeOpacity={flash('pinako') ? OPACITY.fg : OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 1, 2, 3].map(i => (
          <rect
            key={i}
            x={528 + i * 18}
            y={338}
            width={12}
            height={18}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_HAIR}
          />
        ))}
      </g>
      <text
        x={560}
        y={386}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        pinakotheken
      </text>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => showTip('atrium', 400, 412)}
        onMouseLeave={() => setTip(null)}
      >
        <rect
          x={340}
          y={400}
          width={120}
          height={24}
          fill={FG}
          fillOpacity={0.04}
          stroke={FG}
          strokeOpacity={flash('atrium') ? OPACITY.fg : OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="3 3"
        />
        <circle
          cx={400}
          cy={412}
          r={6}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
        <line
          x1={400}
          y1={412}
          x2={404}
          y2={408}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
      </g>
      <text
        x={400}
        y={394}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        ATRIUM OF TIME
      </text>

      <line
        x1={400}
        y1={342}
        x2={400}
        y2={398}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_GUIDE}
        strokeDasharray="2 4"
      />
      <text x={350} y={372} fill={FG} fontSize={FONT_SMALL} textAnchor="end" opacity={OPACITY.dim}>
        oubliette ↓
      </text>

      <g
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => showTip('locked', 400, 470)}
        onMouseLeave={() => setTip(null)}
      >
        <rect
          x={384}
          y={456}
          width={32}
          height={28}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={flash('locked') ? OPACITY.fg : OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        {[0, 1, 2].map(i => (
          <line
            key={i}
            x1={390 + i * 8}
            y1={458}
            x2={390 + i * 8}
            y2={482}
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_HAIR}
          />
        ))}
        <circle cx={400} cy={470} r={1.4} fill={FG} opacity={OPACITY.fg} />
      </g>
      <text x={440} y={477} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        locked gate
      </text>

      <g>
        <path
          d="M 100 490 Q 300 510 500 488 Q 660 470 700 484"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_GUIDE}
        />
        <path
          d="M 100 510 Q 300 530 500 508 Q 660 490 700 504"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_GUIDE}
        />
        <Stipple x={120} y={476} w={560} h={60} n={70} seed={3} opacity={0.22} r={0.6} />
        {[140, 200, 260, 320, 480, 540, 600, 660].map((gx, i) => (
          <g key={i} opacity={0.4}>
            <line
              x1={gx}
              y1={500 + (i % 2) * 14}
              x2={gx}
              y2={488 + (i % 2) * 14}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_GUIDE}
            />
            <line
              x1={gx - 3}
              y1={494 + (i % 2) * 14}
              x2={gx + 3}
              y2={494 + (i % 2) * 14}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_GUIDE}
            />
          </g>
        ))}
      </g>
      <text x={730} y={485} fill={FG} fontSize={FONT_SMALL} textAnchor="end" opacity={OPACITY.dim}>
        necropolis terraces
      </text>
      <text x={730} y={510} fill={FG} fontSize={FONT_SMALL} textAnchor="end" opacity={OPACITY.dim}>
        (downhill →)
      </text>

      <g>
        <rect x={40} y={552} width={720} height={24} fill="url(#cit-river)" />
        <path
          d="M 40 564 Q 200 558 400 564 Q 600 570 760 562"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <path
          d="M 40 572 Q 200 566 400 572 Q 600 578 760 570"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_GUIDE}
        />
      </g>
      <Label x={60} y={544} size={FONT_SMALL}>
        GYOLL →
      </Label>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// I.02.1 - Power Triangle (Autarch / Vodalus / Pelerines)
export function PowerTriangle() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    autarch: {
      x: 400,
      y: 100,
      w: 280,
      h: 70,
      label: 'THE AUTARCH',
      sub: 'sovereign · face hidden by Inire',
      cite: '§7 (in story), §30 (cell)',
      body: 'Severian glimpses his face\nonce - and does not recognise it.\nThe Autarch is also the prisoner.'
    },
    vodalus: {
      x: 150,
      y: 460,
      w: 220,
      h: 70,
      label: 'VODALUS',
      sub: 'rebel of the northern forest',
      cite: '§1, 14, 35',
      body: 'Opens graves to fund his war;\npresses a chrisos on Severian\nat the necropolis.'
    },
    pelerines: {
      x: 650,
      y: 460,
      w: 220,
      h: 70,
      label: 'PELERINES',
      sub: 'red-clad wandering order',
      cite: '§22, 31',
      body: 'Keepers of the Claw. Severian\nfinds it in his sabretache after\nthe altar of Pelerines is upset.'
    },
    guild: {
      x: 400,
      y: 290,
      label: 'THE GUILD',
      r: 48,
      sub: 'instrument of the Autarch',
      cite: 'Bk I throughout',
      body: 'Carries out punishments\nordered by the Commonwealth\non behalf of the Autarch.'
    },
    chrisos: {
      x: 400,
      y: 425,
      label: 'CHRISOS',
      r: 22,
      sub: 'gold coin with Autarch face',
      cite: '§1, 3',
      body: "Bears the Autarch's face on one\nside; pressed on Severian by\nVodalus. He hides it."
    }
  }
  return (
    <Canvas w={800} h={540}>
      <Label x={400} y={28} anchor="middle" size={FONT_SMALL}>
        POWER STRUCTURE OF THE COMMONWEALTH
      </Label>
      <polygon
        points="400,110 150,460 650,460"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.faint}
        strokeWidth={STROKE_GUIDE}
        strokeDasharray="4 4"
      />
      {['autarch', 'vodalus', 'pelerines'].map(k => {
        const n = nodes[k]
        return (
          <g
            key={k}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() =>
              setTip({ x: n.x, y: n.y, title: n.label, body: n.body, cite: n.cite })
            }
            onMouseLeave={() => setTip(null)}
          >
            <rect
              x={n.x - n.w / 2}
              y={n.y - n.h / 2}
              width={n.w}
              height={n.h}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={n.x}
              y={n.y - 4}
              fill={FG}
              fontSize={FONT_TEX}
              textAnchor="middle"
              letterSpacing={LS_CONTROL}
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + 14}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {n.sub}
            </text>
          </g>
        )
      })}
      {['guild', 'chrisos'].map(k => {
        const n = nodes[k]
        return (
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
              r={n.r}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={n.x}
              y={n.y + 4}
              fill={FG}
              fontSize={FONT_LABEL}
              textAnchor="middle"
              letterSpacing={LS_UPPER}
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + n.r + 14}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {n.sub}
            </text>
          </g>
        )
      })}
      <line
        x1={400}
        y1={170}
        x2={400}
        y2={242}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={414}
        y={210}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_LABEL}
      >
        COMMANDS
      </text>
      <line
        x1={358}
        y1={320}
        x2={210}
        y2={448}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_GUIDE}
        strokeDasharray="3 3"
      />
      <text
        x={250}
        y={395}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_LABEL}
        transform="rotate(-39 250 395)"
      >
        PUNISHES
      </text>
      <line
        x1={400}
        y1={335}
        x2={400}
        y2={402}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_HAIR}
        strokeDasharray="2 4"
      />
      <text
        x={400}
        y={480}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        textAnchor="middle"
      >
        the contested coin - bears the Autarch's face, paid by Vodalus
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// I.03.1 - Nessus Route (clickable stops)
export function NessusRoute() {
  const [tip, setTip] = useTooltip()
  const stops = [
    {
      n: '1',
      x: 80,
      y: 470,
      label: 'Algedonic Quarter',
      sub: 'rag shop · the avern',
      cite: '§19',
      body: 'Severian and Agia visit a rag shop; she\nleads him to the Botanic Gardens.'
    },
    {
      n: '2',
      x: 220,
      y: 430,
      label: 'Adamnian Steps',
      sub: 'descent to the river',
      cite: '§19',
      body: 'They take the Adamnian Steps down,\nhead toward the cathedral.'
    },
    {
      n: '3',
      x: 360,
      y: 355,
      label: 'The Fiacre',
      sub: 'death-talk en route',
      cite: '§20',
      body: 'In a hired carriage Severian and Agia\ntalk of his guild and the avern.'
    },
    {
      n: '4',
      x: 470,
      y: 235,
      label: 'Pelerine Cathedral',
      sub: 'altar smashed',
      cite: '§22',
      body: "The Cathedral of the Pelerines burns;\nthe altar's Claw - unbeknown - falls\ninto Severian's sabretache."
    },
    {
      n: '5',
      x: 580,
      y: 160,
      label: 'Botanic Gardens',
      sub: "Inire's mirrors · Dorcas",
      cite: '§21, 26',
      body: 'In the Garden of Endless Sleep,\nDorcas rises from the lake.'
    },
    {
      n: '6',
      x: 660,
      y: 290,
      label: 'Sanguinary Field',
      sub: 'avern duel',
      cite: '§28',
      body: "Severian fights Agilus (the 'Septentrion').\nThe avern is thrown, not swung."
    },
    {
      n: '7',
      x: 720,
      y: 420,
      label: 'Inn of Lost Loves',
      sub: 'first night with the company',
      cite: '§31–34',
      body: "Dr. Talos's troupe lodges here; Severian\nfinds the Claw in his sabretache."
    }
  ]
  const path = 'M ' + stops.map(s => `${s.x} ${s.y}`).join(' L ')
  return (
    <Canvas w={800} h={540}>
      <Label x={40} y={32} size={FONT_SMALL}>
        NESSUS · A DAY'S WALK ACROSS THE CITY
      </Label>
      <line
        x1={40}
        y1={500}
        x2={760}
        y2={500}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <Label x={60} y={516} size={FONT_SMALL}>
        GYOLL →
      </Label>
      <path
        d="M 60 70 Q 220 50 380 90 Q 540 130 700 110"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.faint}
        strokeWidth={STROKE_GUIDE}
        strokeDasharray="4 4"
      />
      <Label x={700} y={100} anchor="end" size={FONT_SMALL}>
        THE WALL (north)
      </Label>
      <path
        d={path}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
        fill="none"
      />
      {stops.map((s, i) => (
        <g
          key={i}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: s.x, y: s.y, title: s.label, body: s.body, cite: s.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={s.x}
            cy={s.y}
            r="14"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text x={s.x} y={s.y + 4} fill={FG} fontSize={FONT_LABEL} textAnchor="middle">
            {s.n}
          </text>
        </g>
      ))}
      {stops.map((s, i) => (
        <g
          key={`L-${i}`}
          transform={`translate(40,${64 + i * 22})`}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: 140, y: 64 + i * 22 + 4, title: s.label, body: s.body, cite: s.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <text
            x={0}
            y={0}
            fill={FG}
            fontSize={FONT_LABEL}
            opacity={OPACITY.dim}
            letterSpacing={LS_OPEN}
          >
            {s.n}
          </text>
          <text x={18} y={0} fill={FG} fontSize={FONT_LABEL}>
            {s.label}
          </text>
          <text x={18} y={13} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
            {s.sub}
          </text>
        </g>
      ))}
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// I.04.1 - Father Inire's Mirrors (draggable subject)
export function InireMirrors() {
  const [pos, setPos] = React.useState(0.5)
  const MA_X = 200,
    MB_X = 600
  const subjectX = MA_X + (MB_X - MA_X) * pos
  const W = MB_X - MA_X
  const svgRef = React.useRef(null)
  function onMove(e) {
    if (e.buttons !== 1 && e.type !== 'click') return
    const svg = svgRef.current
    if (!svg) return
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const ctm = svg.getScreenCTM()
    if (!ctm) return
    const loc = pt.matrixTransform(ctm.inverse())
    setPos(Math.max(0.04, Math.min(0.96, (loc.x - MA_X) / W)))
  }
  function Figure({ cx, cy, h = 36, opacity = 1 }) {
    const headR = h * 0.18
    const bodyTop = cy - h / 2 + headR * 2
    return (
      <g opacity={opacity}>
        <circle cx={cx} cy={cy - h / 2 + headR} r={headR} fill={FG} />
        <line
          x1={cx}
          y1={bodyTop}
          x2={cx}
          y2={cy + h / 2}
          stroke={FG}
          strokeWidth={Math.max(STROKE_HAIR, h * 0.05)}
          strokeOpacity={1}
        />
        <line
          x1={cx}
          y1={bodyTop + h * 0.2}
          x2={cx - h * 0.18}
          y2={bodyTop + h * 0.42}
          stroke={FG}
          strokeWidth={Math.max(STROKE_HAIR, h * 0.04)}
        />
        <line
          x1={cx}
          y1={bodyTop + h * 0.2}
          x2={cx + h * 0.18}
          y2={bodyTop + h * 0.42}
          stroke={FG}
          strokeWidth={Math.max(STROKE_HAIR, h * 0.04)}
        />
        <line
          x1={cx}
          y1={cy + h / 2}
          x2={cx - h * 0.15}
          y2={cy + h / 2 + h * 0.2}
          stroke={FG}
          strokeWidth={Math.max(STROKE_HAIR, h * 0.04)}
        />
        <line
          x1={cx}
          y1={cy + h / 2}
          x2={cx + h * 0.15}
          y2={cy + h / 2 + h * 0.2}
          stroke={FG}
          strokeWidth={Math.max(STROKE_HAIR, h * 0.04)}
        />
      </g>
    )
  }
  const distA = subjectX - MA_X
  const distB = MB_X - subjectX
  const N = 8
  const leftImages = []
  for (let i = 0; i < N; i++) {
    const odd = i % 2 === 0
    const extra = Math.floor((i + 1) / 2) * 2 * (odd ? distB : distA)
    const x = MA_X - (distA + extra)
    if (x < -200) break
    leftImages.push(x)
  }
  const rightImages = []
  for (let i = 0; i < N; i++) {
    const odd = i % 2 === 0
    const extra = Math.floor((i + 1) / 2) * 2 * (odd ? distA : distB)
    const x = MB_X + (distB + extra)
    if (x > 1000) break
    rightImages.push(x)
  }
  const totalReflections = leftImages.length + rightImages.length
  const subjectY = 290

  return (
    <div style={{ width: '100%' }}>
      <svg
        ref={svgRef}
        viewBox="0 0 800 480"
        style={{ display: 'block', maxWidth: '100%', color: 'var(--text-primary)' }}
        onMouseMove={onMove}
        onClick={onMove}
      >
        <Hatch id="ir-floor" angle={0} gap={3} opacity={0.06} />
        <text
          x={400}
          y={28}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          textAnchor="middle"
          letterSpacing={LS_CONTROL}
          style={{ textTransform: 'uppercase' }}
        >
          FATHER INIRE'S SPECULA
        </text>

        <defs>
          <clipPath id="ir-clip">
            <rect x={MA_X} y={150} width={W} height={220} />
          </clipPath>
        </defs>

        <polygon
          points={`${MA_X} 360 ${MB_X} 360 ${MB_X - 60} 380 ${MA_X + 60} 380`}
          fill="url(#ir-floor)"
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
        />
        {[0.25, 0.5, 0.75].map((p, i) => (
          <line
            key={i}
            x1={MA_X + W * p}
            y1={150}
            x2={MA_X + W * 0.5}
            y2={310}
            stroke={FG}
            strokeOpacity={OPACITY.faint * 0.5}
            strokeWidth={STROKE_HAIR}
          />
        ))}

        <g clipPath="url(#ir-clip)">
          {leftImages.map((vx, i) => {
            const fade = Math.pow(0.78, i + 1)
            const apparentX = MA_X + (MA_X - vx)
            if (apparentX < MA_X || apparentX > MB_X) return null
            return (
              <Figure key={`L${i}`} cx={apparentX} cy={subjectY} h={36 * fade} opacity={fade} />
            )
          })}
          {rightImages.map((vx, i) => {
            const fade = Math.pow(0.78, i + 1)
            const apparentX = MB_X - (vx - MB_X)
            if (apparentX < MA_X || apparentX > MB_X) return null
            return (
              <Figure key={`R${i}`} cx={apparentX} cy={subjectY} h={36 * fade} opacity={fade} />
            )
          })}
        </g>

        <g>
          <rect
            x={MA_X - 14}
            y={140}
            width={14}
            height={250}
            fill={FG}
            fillOpacity={0.08}
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1={MA_X - 13}
              y1={146 + i * 28}
              x2={MA_X - 1}
              y2={146 + i * 28 + 10}
              stroke={FG}
              strokeOpacity={0.18}
              strokeWidth={STROKE_HAIR}
            />
          ))}
          <text
            x={MA_X - 30}
            y={265}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_TITLE}
            transform={`rotate(-90 ${MA_X - 30} 265)`}
            opacity={OPACITY.dim}
          >
            MIRROR A
          </text>
        </g>

        <g>
          <rect
            x={MB_X}
            y={140}
            width={14}
            height={250}
            fill={FG}
            fillOpacity={0.08}
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1={MB_X + 1}
              y1={146 + i * 28}
              x2={MB_X + 13}
              y2={146 + i * 28 + 10}
              stroke={FG}
              strokeOpacity={0.18}
              strokeWidth={STROKE_HAIR}
            />
          ))}
          <text
            x={MB_X + 30}
            y={265}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_TITLE}
            transform={`rotate(90 ${MB_X + 30} 265)`}
            opacity={OPACITY.dim}
          >
            MIRROR B
          </text>
        </g>

        <g style={{ cursor: 'grab' }}>
          <Figure cx={subjectX} cy={subjectY} h={48} opacity={1} />
          <text
            x={subjectX}
            y={subjectY + 44}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_TITLE}
          >
            DOMNINA
          </text>
          <text
            x={subjectX}
            y={subjectY + 58}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            drag along the corridor
          </text>
          <line
            x1={subjectX - 60}
            y1={subjectY - 60}
            x2={subjectX - 30}
            y2={subjectY - 60}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
          />
          <polyline
            points={`${subjectX - 38},${subjectY - 64} ${subjectX - 30},${subjectY - 60} ${subjectX - 38},${
              subjectY - 56
            }`}
            fill="none"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
          />
          <line
            x1={subjectX + 30}
            y1={subjectY - 60}
            x2={subjectX + 60}
            y2={subjectY - 60}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
          />
          <polyline
            points={`${subjectX + 52},${subjectY - 64} ${subjectX + 60},${subjectY - 60} ${subjectX + 52},${
              subjectY - 56
            }`}
            fill="none"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
          />
        </g>

        <text
          x={400}
          y={102}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
          letterSpacing={LS_UPPER}
        >
          {totalReflections} REFLECTIONS · INFINITE IN THE LIMIT
        </text>

        <g transform="translate(40,420)">
          <text
            x={0}
            y={0}
            fill={FG}
            fontSize={FONT_SMALL}
            opacity={OPACITY.dim}
            letterSpacing={LS_TITLE}
          >
            CLAIM
          </text>
          <text x={0} y={16} fill={FG} fontSize={FONT_LABEL}>
            enough reflections - a duplicate condenses.
          </text>
        </g>
        <g transform="translate(540,420)">
          <text
            x={0}
            y={0}
            fill={FG}
            fontSize={FONT_SMALL}
            opacity={OPACITY.dim}
            letterSpacing={LS_TITLE}
          >
            DOMNINA
          </text>
          <text x={0} y={16} fill={FG} fontSize={FONT_LABEL}>
            saw herself walk away from herself.
          </text>
        </g>
      </svg>
      <Slider
        label="position"
        value={pos}
        min={0.04}
        max={0.96}
        step={0.01}
        onChange={setPos}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

// I.05.1 - Avern Duel (clickable exchanges)
export function AvernDuel() {
  const [tip, setTip] = useTooltip()
  const exchanges = [
    {
      id: 1,
      d: 'M 184 232 Q 400 130 616 232',
      label: '1 · first leaf - passes wide',
      cite: '§28',
      body: 'Severian throws first. The leaf passes\nwide. Agia watches her brother,\nnot the duel.'
    },
    {
      id: 2,
      d: 'M 618 244 Q 400 330 188 244',
      label: '2 · return leaf - grazes',
      cite: '§28',
      body: 'Agilus returns. The leaf grazes\nSeverian; he feels the cold.'
    },
    {
      id: 3,
      d: 'M 184 252 Q 360 370 616 252',
      label: '3 · the strike that ends it',
      cite: '§28',
      body: "Severian's third throw kills.\nThe Septentrion turns out to be\nAgilus in disguise."
    }
  ]

  function AvernPlant({ cx, cy, r = 24, opacity = 1 }) {
    return (
      <g opacity={opacity} transform={`translate(${cx} ${cy})`}>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 2
          return (
            <path
              key={i}
              d={`M 0 0 Q ${Math.cos(a + 0.2) * r * 0.4} ${Math.sin(a + 0.2) * r * 0.4} ${Math.cos(a) * r} ${
                Math.sin(a) * r
              } Q ${Math.cos(a - 0.2) * r * 0.4} ${Math.sin(a - 0.2) * r * 0.4} 0 0 Z`}
              fill="none"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_GUIDE}
            />
          )
        })}
        <circle cx={0} cy={0} r={3} fill={FG} opacity={OPACITY.fg} />
      </g>
    )
  }

  function Combatant({ cx, cy, label, sub, sub2 }) {
    return (
      <g>
        <circle cx={cx} cy={cy - 28} r="6" fill={FG} />
        <path
          d={`M ${cx - 18} ${cy + 36} L ${cx - 10} ${cy - 22} L ${cx + 10} ${cy - 22} L ${cx + 18} ${cy + 36} Z`}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={cx}
          y1={cy - 12}
          x2={cx + (cx < 400 ? 28 : -28)}
          y2={cy - 4}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={cx}
          y={cy + 60}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_MEDIUM}
        >
          {label}
        </text>
        <text
          x={cx}
          y={cy + 74}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          {sub}
        </text>
        {sub2 && (
          <text
            x={cx}
            y={cy + 86}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {sub2}
          </text>
        )}
      </g>
    )
  }

  return (
    <Canvas w={800} h={500}>
      <CrossHatch id="avern-grass" gap={8} opacity={0.07} />
      <Label x={400} y={28} anchor="middle" size={FONT_SMALL}>
        THE AVERN DUEL · SANGUINARY FIELD
      </Label>
      <rect
        x={60}
        y={90}
        width={680}
        height={300}
        fill="url(#avern-grass)"
        stroke={FG}
        strokeOpacity={OPACITY.faint}
        strokeWidth={STROKE_HAIR}
      />
      <line
        x1={60}
        y1={240}
        x2={740}
        y2={240}
        stroke={FG}
        strokeOpacity={OPACITY.faint}
        strokeWidth={STROKE_HAIR}
        strokeDasharray="2 6"
      />
      {[200, 300, 400, 500, 600].map((tx, i) => (
        <g key={i}>
          <line
            x1={tx}
            y1={236}
            x2={tx}
            y2={244}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_HAIR}
          />
          <text
            x={tx}
            y={258}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {i + 1}
          </text>
        </g>
      ))}
      <text
        x={400}
        y={272}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        PACES
      </text>

      <AvernPlant cx={130} cy={210} r={28} opacity={0.7} />
      <AvernPlant cx={670} cy={210} r={28} opacity={0.7} />
      <text
        x={130}
        y={154}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        AVERN BUSH
      </text>
      <text
        x={670}
        y={154}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        AVERN BUSH
      </text>

      <Combatant cx={200} cy={240} label="SEVERIAN" sub="tricked into the field" />
      <Combatant cx={600} cy={240} label="SEPTENTRION" sub="Agilus disguised" />

      <g transform="translate(720,200)">
        <circle cx={0} cy={0} r="5" fill={FG} />
        <path
          d="M -6 6 L -3 28 L 3 28 L 6 6 Z"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_GUIDE}
        />
        <text
          x={0}
          y={50}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          Agia
        </text>
        <text
          x={0}
          y={62}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          watching
        </text>
        <line
          x1={-2}
          y1={-2}
          x2={-120}
          y2={50}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_HAIR}
          strokeDasharray="2 3"
        />
      </g>

      {exchanges.map(ex => {
        const active = tip && tip.id === ex.id
        return (
          <g
            key={ex.id}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() =>
              setTip({
                id: ex.id,
                x: 400,
                y: ex.id === 3 ? 360 : ex.id === 2 ? 320 : 140,
                title: ex.label,
                body: ex.body,
                cite: ex.cite
              })
            }
            onMouseLeave={() => setTip(null)}
          >
            <path
              d={ex.d}
              stroke={FG}
              strokeOpacity={active ? OPACITY.fg : OPACITY.dim}
              strokeWidth={active ? STROKE_PRIMARY : STROKE_GUIDE}
              fill="none"
              strokeDasharray={ex.id === 3 ? null : '4 3'}
            />
            <path d={ex.d} stroke="transparent" strokeWidth="22" fill="none" />
            <polygon
              points={
                ex.id === 1
                  ? '610,228 622,232 612,238'
                  : ex.id === 2
                    ? '188,240 194,244 188,250'
                    : '610,247 622,252 612,258'
              }
              fill={FG}
              opacity={active ? OPACITY.fg : OPACITY.dim}
            />
            {(() => {
              const midX = 400
              const midY = ex.id === 1 ? 160 : ex.id === 2 ? 310 : 340
              return (
                <g
                  transform={`translate(${midX} ${midY}) rotate(${ex.id === 2 ? -10 : ex.id === 3 ? 5 : 0})`}
                >
                  <path
                    d="M 0 0 Q -6 -8 0 -16 Q 6 -8 0 0 Z"
                    fill="var(--bg)"
                    stroke={FG}
                    strokeOpacity={active ? OPACITY.fg : OPACITY.dim}
                    strokeWidth={STROKE_GUIDE}
                  />
                  <line
                    x1={0}
                    y1={-2}
                    x2={0}
                    y2={-14}
                    stroke={FG}
                    strokeOpacity={active ? OPACITY.fg : OPACITY.dim}
                    strokeWidth={STROKE_HAIR}
                  />
                </g>
              )
            })()}
            <text
              x={400}
              y={ex.id === 1 ? 124 : ex.id === 2 ? 360 : 388}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={active ? OPACITY.fg : OPACITY.dim}
            >
              {ex.label}
            </text>
          </g>
        )
      })}
      <text
        x={400}
        y={446}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        the avern is a thrown weapon, lethal on contact
      </text>
      <text
        x={60}
        y={470}
        fill={FG}
        fontSize={FONT_SMALL}
        letterSpacing={LS_TITLE}
        opacity={OPACITY.dim}
      >
        AGIA'S TELL
      </text>
      <text x={60} y={482} fill={FG} fontSize={FONT_SMALL}>
        she watches her brother, not the duel
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// I.06.1 - Character Network (ego-centric, clickable)
export function CharacterNetwork() {
  const [tip, setTip] = useTooltip()
  const cx = 400,
    cy = 320
  const factions = [
    {
      name: 'GUILD',
      angle: -2.03,
      radius: 200,
      members: [
        { name: 'Palaemon', tag: 'mentor', cite: '§2, 11, 35', body: 'Bestows Terminus Est.' },
        {
          name: 'Gurloes',
          tag: 'head master',
          cite: '§7',
          body: "Lets Severian into Thecla's cell."
        },
        { name: 'Malrubius', tag: 'ghost', cite: '§13', body: 'Returns to him in dream.' },
        { name: 'Drotte', tag: 'former captain', cite: '§1', body: 'At the necropolis gate.' },
        { name: 'Roche', tag: 'journeyman', cite: '§9', body: 'Brothels with Severian.' },
        { name: 'Eata', tag: 'successor', cite: '§11', body: 'Inherits the captaincy.' }
      ]
    },
    {
      name: 'AUTARCHY',
      angle: -0.95,
      radius: 210,
      members: [
        {
          name: 'Thecla',
          tag: 'beloved · client',
          cite: '§7–11',
          body: 'Severian gives her the knife.'
        },
        {
          name: 'Autarch',
          tag: 'unseen',
          cite: '§7 (mentioned)',
          body: "Father Inire's master."
        },
        {
          name: 'F. Inire',
          tag: 'shadow vizier',
          cite: '§6',
          body: "Mirror-builder. Domnina's tale."
        },
        {
          name: 'Valeria',
          tag: 'a stranger met',
          cite: '§6',
          body: 'In the Atrium of Time as a girl.'
        }
      ]
    },
    {
      name: 'VODALARII',
      angle: 0.6,
      radius: 210,
      members: [
        { name: 'Vodalus', tag: 'ideal', cite: '§1, 35', body: 'Presses a chrisos on him.' },
        {
          name: 'Hildegrin',
          tag: 'the Badger',
          cite: '§1, 26',
          body: 'Boats Severian out of the Garden.'
        },
        { name: 'V.’s lady', tag: 'glimpsed', cite: '§1', body: 'At the grave by torchlight.' }
      ]
    },
    {
      name: 'AGIA & AGILUS',
      angle: 1.9,
      radius: 200,
      members: [
        { name: 'Agia', tag: 'guide · trap', cite: '§19–28', body: 'Leads him across Nessus.' },
        { name: 'Agilus', tag: 'Septentrion', cite: '§28', body: 'Killed in the avern duel.' }
      ]
    },
    {
      name: "TALOS'S TROUPE",
      angle: 3.32,
      radius: 210,
      members: [
        { name: 'Dr. Talos', tag: 'showman', cite: '§17', body: 'Director of the play.' },
        { name: 'Baldanders', tag: 'giant', cite: '§17', body: 'Severian wakes to find him.' },
        { name: 'Jolenta', tag: 'actress', cite: '§34', body: 'Will join the troupe later.' }
      ]
    },
    {
      name: 'THE ROAD',
      angle: -3.62,
      labelR: 130,
      radius: 200,
      members: [
        {
          name: 'Dorcas',
          tag: 'raised from the lake',
          cite: '§26',
          body: 'Rises beside Severian.'
        },
        {
          name: 'Jonas',
          tag: 'gate companion',
          cite: '§35',
          body: 'At the gate, with iron hand.'
        },
        {
          name: 'Hethor',
          tag: 'old sailor',
          cite: '§33',
          body: 'Follows Severian for the sword.'
        }
      ]
    }
  ]
  factions.forEach(f => {
    f.members.forEach((m, i) => {
      const a = f.angle + (i - (f.members.length - 1) / 2) * 0.2
      const r = f.radius + (i % 2 === 0 ? 0 : 36)
      m._x = cx + Math.cos(a) * r
      m._y = cy + Math.sin(a) * r
    })
  })
  return (
    <Canvas w={800} h={640}>
      <Label x={40} y={32} size={FONT_SMALL}>
        SEVERIAN'S RELATIONAL FIELD
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
            <text x={m._x} y={m._y + 24} fill={FG} fontSize={FONT_SMALL} textAnchor="middle">
              {m.name}
            </text>
            <text
              x={m._x}
              y={m._y + 38}
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
          apprentice → exile
        </text>
      </g>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// I.06.2 - Journey Arc (interactive section scrubber)
export function JourneyArc() {
  const fullSections = [
    [1, 'Resurrection and death', 'CITADEL'],
    [2, 'Severian', 'CITADEL'],
    [3, 'The autarch’s face', 'CITADEL'],
    [4, 'Triskele', 'CITADEL'],
    [5, 'The picture-cleaner and others', 'CITADEL'],
    [6, 'The master of the curators', 'CITADEL'],
    [7, 'The traitress', 'CITADEL'],
    [8, 'The conversationalist', 'CITADEL'],
    [9, 'The botanic gardens (later set up)', 'CITADEL'],
    [10, 'The chatelaine', 'CITADEL'],
    [11, 'The feast', 'CITADEL'],
    [12, 'The librarian’s tale', 'CITADEL'],
    [13, 'The lictor of Thrax (named)', 'EXILE'],
    [14, 'The vagrant’s purse', 'EXILE'],
    [15, 'Baldanders', 'EXILE'],
    [16, 'The bell and the hammer', 'EXILE'],
    [17, 'The challenge', 'NESSUS'],
    [18, 'The destruction of the altar', 'NESSUS'],
    [19, 'The rag shop', 'GARDENS'],
    [20, 'Mirrors', 'GARDENS'],
    [21, 'The botanic gardens', 'GARDENS'],
    [22, 'The cathedral of the Pelerines', 'GARDENS'],
    [23, 'Hildegrin', 'GARDENS'],
    [24, 'Domnina', 'GARDENS'],
    [25, 'The garden of endless sleep', 'GARDENS'],
    [26, 'Dorcas', 'GARDENS'],
    [27, 'Is he dead?', 'FIELD'],
    [28, 'The avern duel', 'FIELD'],
    [29, 'The Pelerines', 'FIELD'],
    [30, 'The night', 'LAZARET'],
    [31, 'The lictor of Saltus (no - that’s Bk II)', 'LAZARET'],
    [32, 'Agilus', 'LAZARET'],
    [33, 'The claw of the Conciliator (discovered)', 'LAZARET'],
    [34, 'The inn of lost loves', 'WALL'],
    [35, 'Through the wall', 'WALL']
  ]
  const moodMap = {
    1: 0.55,
    2: 0.5,
    3: 0.45,
    4: 0.55,
    5: 0.5,
    6: 0.65,
    7: 0.55,
    8: 0.5,
    9: 0.55,
    10: 0.6,
    11: 0.55,
    12: 0.4,
    13: 0.35,
    14: 0.55,
    15: 0.5,
    16: 0.45,
    17: 0.6,
    18: 0.35,
    19: 0.55,
    20: 0.5,
    21: 0.6,
    22: 0.3,
    23: 0.4,
    24: 0.5,
    25: 0.55,
    26: 0.7,
    27: 0.5,
    28: 0.25,
    29: 0.4,
    30: 0.45,
    31: 0.35,
    32: 0.3,
    33: 0.7,
    34: 0.6,
    35: 0.55
  }
  const data = fullSections.map(([n, label, band]) => ({ n, label, sub: band }))
  const moods = data.map(c => moodMap[c.n])
  const beats = [
    { i: 0, label: 'Vodalus at grave' },
    { i: 6, label: 'Thecla' },
    { i: 11, label: 'The knife' },
    { i: 17, label: 'Agia' },
    { i: 25, label: 'Dorcas rises' },
    { i: 27, label: 'Avern duel' },
    { i: 32, label: 'Claw found' },
    { i: 34, label: 'Through the Wall' }
  ]
  const [current, setCurrent] = React.useState(0)
  return (
    <div style={{ width: '100%' }}>
      <ModuleTimeline
        sections={data}
        moods={moods}
        beats={beats}
        current={current}
        onScrub={setCurrent}
        width={780}
        height={240}
        topLabel="THE SHADOW OF THE TORTURER · SECTIONS 1-35"
      />
    </div>
  )
}

// I.06.3 - Symbol Network (toggleable clusters)
export function SymbolNetwork() {
  const [tip, setTip] = useTooltip()
  const clusters = {
    CLAW: { color: 'CLAW', nodes: ['claw', 'conciliator', 'newSun', 'pelerines'] },
    COIN: { color: 'COIN', nodes: ['chrisos', 'autarchFace', 'identity'] },
    MIRROR: { color: 'MIRROR', nodes: ['mirrors', 'doubling', 'twins'] },
    GRAVE: { color: 'GRAVE', nodes: ['necropolis', 'resurrection', 'dyingSun'] }
  }
  const [active, setActive] = React.useState({ CLAW: true, COIN: true, MIRROR: true, GRAVE: true })
  const nodes = {
    claw: {
      x: 200,
      y: 130,
      label: 'CLAW',
      sub: 'relic in his pouch',
      cluster: 'CLAW',
      cite: '§22, 33',
      body: 'Falls into his sabretache when\nthe altar is overturned.'
    },
    conciliator: {
      x: 380,
      y: 90,
      label: 'CONCILIATOR',
      sub: 'messianic figure',
      cluster: 'CLAW',
      cite: 'Bk II §28',
      body: 'Legendary precursor - said\nto have raised the dead.'
    },
    newSun: {
      x: 580,
      y: 130,
      label: 'NEW SUN',
      sub: 'awaited renewal',
      cluster: 'CLAW',
      cite: 'Bk II §31',
      body: 'Prophecy: a new star will\ncome to warm the dying Urth.'
    },
    dyingSun: {
      x: 680,
      y: 280,
      label: 'DYING SUN',
      sub: 'red, contracting',
      cluster: 'GRAVE',
      cite: '§1, 4',
      body: "The sun is failing - a recurring\nimage from Severian's youth."
    },
    pelerines: {
      x: 90,
      y: 240,
      label: 'PELERINES',
      sub: 'order in red',
      cluster: 'CLAW',
      cite: '§22, 29',
      body: 'They lose the Claw and grieve.\nSeverian conceals what he carries.'
    },
    chrisos: {
      x: 380,
      y: 250,
      label: 'CHRISOS',
      sub: 'gold coin',
      cluster: 'COIN',
      cite: '§1, 3',
      body: 'The coin Vodalus presses\non Severian after the grave.'
    },
    autarchFace: {
      x: 540,
      y: 360,
      label: "AUTARCH'S FACE",
      sub: 'on coin · in painting',
      cluster: 'COIN',
      cite: '§5, 7',
      body: "Severian sees it on the coin and\nin Fechin's portrait of the woman."
    },
    identity: {
      x: 380,
      y: 430,
      label: 'IDENTITY',
      sub: 'made by symbols',
      cluster: 'COIN',
      cite: 'Bk I throughout',
      body: "Severian's becoming is recorded\nin coins, faces, and masks."
    },
    mirrors: {
      x: 200,
      y: 360,
      label: 'MIRRORS',
      sub: "Inire's specula",
      cluster: 'MIRROR',
      cite: '§6',
      body: 'Two facing mirrors - finite\ndistance, infinite reflections.'
    },
    doubling: {
      x: 100,
      y: 460,
      label: 'DOUBLING',
      sub: 'twins · reflections',
      cluster: 'MIRROR',
      cite: '§32',
      body: 'Agilus and Agia are twins;\nSeverian sees the duplication.'
    },
    twins: {
      x: 240,
      y: 530,
      label: 'AGIA / AGILUS',
      sub: 'twin reveal in cell',
      cluster: 'MIRROR',
      cite: '§32',
      body: "At the cell, Agia uncovers\nthe duplicate's secret."
    },
    necropolis: {
      x: 580,
      y: 540,
      label: 'NECROPOLIS',
      sub: 'opened grave · Ch 1',
      cluster: 'GRAVE',
      cite: '§1',
      body: "Where Vodalus's party exhume\nthe dead - the volume's first scene."
    },
    resurrection: {
      x: 720,
      y: 470,
      label: 'RESURRECTION',
      sub: 'Dorcas from the lake',
      cluster: 'GRAVE',
      cite: '§26',
      body: 'Dorcas rises from the Lake of\nBirds in the Garden of Endless Sleep.'
    }
  }
  const edges = [
    ['claw', 'conciliator', 'relic of'],
    ['conciliator', 'newSun', 'returns as'],
    ['claw', 'pelerines', 'belongs to'],
    ['newSun', 'dyingSun', 'opposes'],
    ['chrisos', 'autarchFace', 'depicts'],
    ['autarchFace', 'identity', 'is read as'],
    ['chrisos', 'identity', 'mints'],
    ['mirrors', 'doubling', 'produces'],
    ['doubling', 'twins', 'realised by'],
    ['mirrors', 'identity', 'threatens'],
    ['necropolis', 'resurrection', 'site of'],
    ['necropolis', 'claw', 'first movement', 0.7],
    ['claw', 'identity', 'reorients']
  ]
  const isOn = k => active[nodes[k].cluster]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={800} h={620}>
        <Label x={40} y={32} size={FONT_SMALL}>
          MOTIF NETWORK
        </Label>
        {edges.map(([a, b, rel, t = 0.5], i) => {
          if (!isOn(a) || !isOn(b)) return null
          const n1 = nodes[a],
            n2 = nodes[b]
          const mx = n1.x + (n2.x - n1.x) * t,
            my = n1.y + (n2.y - n1.y) * t
          return (
            <g key={i}>
              <line
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke={FG}
                strokeOpacity={OPACITY.faint}
                strokeWidth={STROKE_GUIDE}
              />
              <text
                x={mx}
                y={my - 4}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                opacity={OPACITY.dim}
                letterSpacing={LS_TIGHT}
              >
                {rel}
              </text>
            </g>
          )
        })}
        {Object.entries(nodes).map(([k, n]) => {
          if (!isOn(k)) return null
          return (
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
                r="10"
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={n.x}
                y={n.y + 28}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                letterSpacing={LS_TIGHT}
              >
                {n.label}
              </text>
              <text
                x={n.x}
                y={n.y + 42}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                opacity={OPACITY.dim}
              >
                {n.sub}
              </text>
              <circle cx={n.x} cy={n.y} r="24" fill="transparent" />
            </g>
          )
        })}
        <Tooltip tip={tip} />
      </Canvas>
      <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {Object.keys(clusters).map(k => (
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
