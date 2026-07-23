// BOOK IV - THE CITADEL OF THE AUTARCH
// The resurrection of the soldier, the Pelerine lazaret, the war, the Autarch's
// composite self, and the time loop that closes the series.

import React from 'react'
import {
  Canvas,
  Label,
  Tooltip,
  useTooltip,
  Slider,
  Toggle,
  PlayPause,
  useAnimationTime,
  Hatch,
  Stipple,
  Rays,
  FG,
  OPACITY
} from '../../../primitives'
import {
  stroke,
  strokeSoft,
  strokeFaint,
  text,
  textSoft,
  textFaint,
  textGhost,
  fill,
  fillSoft,
  fillMid,
  figureStyle,
  svgStyle
} from '../../../theme'
import {
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TITLE,
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

// Reusable mood-curve chart (module-private)
function ArcChart4({ beats, title, w = 800, h = 360 }) {
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

// IV.01.1 - Structure Diagram (§1)
export function Ch01StructureDiagram() {
  return (
    <Canvas w={800} h={420}>
      <Label x={40} y={32} size={FONT_SMALL}>
        SECTION 1 · TWO HALVES JOINED BY THE CLAW
      </Label>
      <g>
        <rect
          x={60}
          y={120}
          width={300}
          height={180}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={80}
          y={144}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          FIRST HALF
        </text>
        <text x={80} y={168} fill={FG} fontSize={FONT_LABEL} letterSpacing={LS_LABEL}>
          corpse on the field
        </text>
        <text x={80} y={188} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · not named; "the soldier"
        </text>
        <text x={80} y={204} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · Severian carries him from
        </text>
        <text x={80} y={218} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          {' '}
          the battlefield
        </text>
        <text x={80} y={238} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · starves him through two days
        </text>
        <text x={80} y={258} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          {' '}
          of grief and hunger
        </text>
        <text x={80} y={282} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          p. 1–12
        </text>
      </g>
      <g>
        <circle
          cx={400}
          cy={210}
          r="40"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={400}
          y={206}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          CLAW
        </text>
        <text
          x={400}
          y={222}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          hinge
        </text>
      </g>
      <g>
        <rect
          x={440}
          y={120}
          width={300}
          height={180}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={460}
          y={144}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          SECOND HALF
        </text>
        <text x={460} y={168} fill={FG} fontSize={FONT_LABEL} letterSpacing={LS_LABEL}>
          a man called "Miles"
        </text>
        <text x={460} y={188} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · named; companion
        </text>
        <text x={460} y={204} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · Severian feeds him
        </text>
        <text x={460} y={224} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · helps him walk
        </text>
        <text x={460} y={244} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · they go on together
        </text>
        <text x={460} y={282} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          p. 12–18
        </text>
      </g>
      <line
        x1={360}
        y1={210}
        x2={362}
        y2={210}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <line
        x1={438}
        y1={210}
        x2={440}
        y2={210}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={400}
        y={104}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        THE SECTION PIVOTS EXACTLY HERE
      </text>
    </Canvas>
  )
}

// IV.01.2 - Resurrection Sequence
export function Ch01ResurrectionSequence() {
  const beats = [
    {
      id: 1,
      label: 'CLAW APPLIED',
      page: 'p. 12',
      body: 'Severian presses the Claw\nagainst the dead skin.'
    },
    { id: 2, label: 'NOTHING', page: 'p. 13', body: 'Hours pass. No movement.\nSeverian doubts.' },
    {
      id: 3,
      label: 'BLOOD',
      page: 'p. 14',
      body: 'Fresh blood wells through\nthe dead skin. The hinge.'
    },
    {
      id: 4,
      label: 'LONG WAIT',
      page: 'p. 15',
      body: 'Through the night the soldier\nlies between worlds.'
    },
    {
      id: 5,
      label: 'MORNING · BREATH',
      page: 'p. 16',
      body: 'Quiet proof at dawn:\nthe soldier breathes.'
    }
  ]
  return (
    <Canvas w={800} h={300}>
      <Label x={40} y={32} size={FONT_SMALL}>
        RESURRECTION · FIVE BEATS · §1 PAGES 12–16
      </Label>
      {beats.map((b, i) => {
        const x = 80 + i * 140
        const isPivot = b.id === 3
        return (
          <g key={b.id}>
            <rect
              x={x - 50}
              y={100}
              width={100}
              height={130}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={isPivot ? OPACITY.fg : OPACITY.dim}
              strokeWidth={isPivot ? STROKE_EMPHASIS : STROKE_SECONDARY}
            />
            <text
              x={x}
              y={120}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
              letterSpacing={LS_TITLE}
            >
              BEAT {b.id}
            </text>
            <text
              x={x}
              y={144}
              fill={FG}
              fontSize={FONT_LABEL}
              textAnchor="middle"
              letterSpacing={LS_LABEL}
            >
              {b.label}
            </text>
            <text
              x={x}
              y={162}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {b.page}
            </text>
            {b.body.split('\n').map((ln, j) => (
              <text
                key={j}
                x={x}
                y={186 + j * 14}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                opacity={OPACITY.dim}
              >
                {ln}
              </text>
            ))}
            {i < beats.length - 1 && (
              <line
                x1={x + 50}
                y1={165}
                x2={x + 90}
                y2={165}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
            )}
          </g>
        )
      })}
    </Canvas>
  )
}

// IV.01.3 - Emotional Arc (§1)
export function Ch01EmotionalArc() {
  const beats = [
    { x: 0, y: 0.75, label: 'war horizon · awe' },
    { x: 1, y: 0.4, label: 'first day hunger' },
    { x: 2, y: 0.2, label: 'second day' },
    { x: 3, y: 0.5, label: 'eats - recovers' },
    { x: 4, y: 0.3, label: 'night vigil · memory' },
    { x: 5, y: 0.55, label: 'morning · life' }
  ]
  return <ArcChart4 beats={beats} title="EMOTIONAL ARC · §1" />
}

// IV.01.4 - Character Web (§1)
export function Ch01CharacterWeb() {
  const [tip, setTip] = useTooltip()
  const sev = { x: 400, y: 280 }
  const memory = [
    { name: 'Dorcas', x: 200, y: 120, cite: 'memory', body: 'Lost; rises during vigil.' },
    { name: 'Thecla', x: 600, y: 120, cite: 'within', body: 'Still inside, speaking faintly.' },
    { name: 'Master P', x: 120, y: 280, cite: 'memory', body: 'Palaemon and the sword.' },
    { name: 'Vodalus', x: 680, y: 280, cite: 'memory', body: 'His chrisos at the grave.' },
    { name: 'Triskele', x: 200, y: 440, cite: 'memory', body: 'The hound from the kennels.' },
    { name: 'Jonas', x: 600, y: 440, cite: 'memory', body: 'Lost into a mirror.' }
  ]
  const soldier = { x: 400, y: 440, cite: '§1', body: 'Just resurrected.\nNot yet named Miles.' }
  const claw = {
    x: 400,
    y: 120,
    cite: '§1',
    body: "In Severian's sabretache.\nThe only present link."
  }
  return (
    <Canvas w={800} h={580}>
      <Label x={40} y={32} size={FONT_SMALL}>
        CHARACTER WEB · §1 (ALONE WITH THE CLAW)
      </Label>
      {memory.map((m, i) => (
        <line
          key={i}
          x1={sev.x}
          y1={sev.y}
          x2={m.x}
          y2={m.y}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_GUIDE}
          strokeDasharray="4 5"
        />
      ))}
      <line
        x1={sev.x}
        y1={sev.y}
        x2={soldier.x}
        y2={soldier.y}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <line
        x1={sev.x}
        y1={sev.y}
        x2={claw.x}
        y2={claw.y}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      {[...memory, soldier, claw].map((n, i) => (
        <g
          key={i}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({
              x: n.x,
              y: n.y,
              title: n.name || (n === soldier ? 'SOLDIER' : 'CLAW'),
              body: n.body,
              cite: n.cite
            })
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={n === soldier || n === claw ? 11 : 8}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={n === soldier || n === claw ? OPACITY.fg : OPACITY.dim}
            strokeWidth={n === soldier || n === claw ? STROKE_PRIMARY : STROKE_SECONDARY}
          />
          <text
            x={n.x}
            y={n.y + (n === soldier || n === claw ? 28 : 22)}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_TIGHT}
          >
            {n.name || (n === soldier ? 'SOLDIER' : 'CLAW')}
          </text>
          <circle cx={n.x} cy={n.y} r="22" fill="transparent" />
        </g>
      ))}
      <g>
        <circle
          cx={sev.x}
          cy={sev.y}
          r="14"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={sev.x}
          y={sev.y + 32}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SEVERIAN
        </text>
      </g>
      <text
        x={40}
        y={550}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        SOLID = PRESENT · DASHED = MEMORY ONLY
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// IV.02.1 - Structure Diagram (§2)
export function Ch02StructureDiagram() {
  return (
    <Canvas w={800} h={380}>
      <Label x={40} y={32} size={FONT_SMALL}>
        SECTION 2 · OPEN ROAD → CLOSED TENT-WORLD
      </Label>
      <g>
        <rect
          x={60}
          y={120}
          width={240}
          height={160}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={80}
          y={144}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          SCENE A
        </text>
        <text x={80} y={170} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_OPEN}>
          OPEN ROAD
        </text>
        <text x={80} y={196} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          Severian + Miles ride
        </text>
        <text x={80} y={212} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          find the lazaret tents
        </text>
        <text x={80} y={240} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          (approach)
        </text>
      </g>
      <g>
        <rect
          x={320}
          y={140}
          width={160}
          height={120}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={400}
          y={166}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
          opacity={OPACITY.dim}
        >
          PIVOT
        </text>
        <text x={400} y={188} fill={FG} fontSize={FONT_LABEL} textAnchor="middle">
          PELERINE'S REFUSAL
        </text>
        <text
          x={400}
          y={210}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          "the Claw cannot be
        </text>
        <text
          x={400}
          y={226}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          surrendered, only used"
        </text>
      </g>
      <g>
        <rect
          x={500}
          y={120}
          width={240}
          height={160}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={520}
          y={144}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          SCENE B
        </text>
        <text x={520} y={170} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_OPEN}>
          CLOSED TENT-WORLD
        </text>
        <text x={520} y={196} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          lazaret of the Pelerines
        </text>
        <text x={520} y={212} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          Foila, Hallvard, Melito,
        </text>
        <text x={520} y={228} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          Ascian prisoner, Miles
        </text>
      </g>
      <line x1={300} y1={200} x2={320} y2={200} stroke={FG} strokeOpacity={OPACITY.fg} />
      <line x1={480} y1={200} x2={500} y2={200} stroke={FG} strokeOpacity={OPACITY.fg} />
    </Canvas>
  )
}

// IV.02.2 - Ascian Speech Grammar
export function Ch02AscianSpeechGrammar() {
  const fragments = [
    'No one is alone.',
    'Those who do not labour are the enemies of those who do.',
    'The flames of conflict are kindled by those who lay them.',
    'Where the people are united, no army can stand.',
    'Hear what is said by the Group of Seventeen.',
    'In times past, loyalty to the cause of the people was enough.',
    'A traveller comes; that is well.',
    'Friend or enemy: which is he?'
  ]
  const [chain, setChain] = React.useState([0, 5, 6, 7])
  const toggle = i => {
    setChain(c => (c.includes(i) ? c.filter(x => x !== i) : [...c, i]))
  }
  return (
    <Canvas w={800} h={500}>
      <Label x={40} y={32} size={FONT_SMALL}>
        ASCIAN SPEECH · APPROVED FRAGMENTS · §XI
      </Label>
      {fragments.map((f, i) => {
        const y = 80 + i * 44
        const on = chain.includes(i)
        return (
          <g key={i} style={{ cursor: 'pointer' }} onClick={() => toggle(i)}>
            <rect
              x={40}
              y={y - 16}
              width={400}
              height={32}
              fill={on ? FG : '#000'}
              fillOpacity={on ? 0.05 : 1}
              stroke={FG}
              strokeOpacity={on ? OPACITY.fg : OPACITY.faint}
              strokeWidth={on ? STROKE_PRIMARY : STROKE_HAIR}
            />
            <text
              x={56}
              y={y + 5}
              fill={FG}
              fontSize={FONT_LABEL}
              opacity={on ? OPACITY.fg : OPACITY.dim}
            >
              {f}
            </text>
          </g>
        )
      })}
      <text
        x={460}
        y={70}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        COMPOSED PARABLE →
      </text>
      {chain.map((i, k) => {
        const y = 90 + k * 38
        return (
          <text key={k} x={460} y={y} fill={FG} fontSize={FONT_LABEL} opacity={OPACITY.fg}>
            ‹{i + 1}› {fragments[i]}
          </text>
        )
      })}
      <text
        x={460}
        y={440}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        CLICK FRAGMENTS
      </text>
      <text x={460} y={456} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        to assemble a meaning;
      </text>
      <text x={460} y={472} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        the system is complete
      </text>
      <text x={460} y={488} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        but the user is not free.
      </text>
    </Canvas>
  )
}

// IV.02.3 - Character Web (§2 lazaret)
export function Ch02CharacterWeb() {
  const [tip, setTip] = useTooltip()
  const cx = 400,
    cy = 290
  const ring = [
    {
      name: 'Foila',
      a: -Math.PI / 2,
      cite: '§4',
      body: "Cherkaji rider. Centre of\nthe lazaret's love triangle."
    },
    {
      name: 'Hallvard',
      a: -Math.PI / 2 + (1 * Math.PI) / 4,
      cite: '§4',
      body: 'Islander; one of two suitors.'
    },
    {
      name: 'Melito',
      a: -Math.PI / 2 + (2 * Math.PI) / 4,
      cite: '§4',
      body: 'Hoplite; the second suitor.'
    },
    {
      name: 'Ascian',
      a: -Math.PI / 2 + (3 * Math.PI) / 4,
      cite: '§XI',
      body: 'Speaks in approved fragments;\ntells a story by composition.'
    },
    {
      name: 'Pelerine',
      a: Math.PI / 2,
      cite: '§2',
      body: 'Refuses to take the Claw;\nsays it cannot be surrendered.'
    },
    {
      name: 'Mannea',
      a: Math.PI / 2 + (1 * Math.PI) / 4,
      cite: '§10',
      body: 'Pelerine sent on the errand\nthat leads Severian out.'
    },
    {
      name: 'Miles',
      a: Math.PI / 2 + (2 * Math.PI) / 4,
      cite: '§1–end',
      body: 'The resurrected soldier;\nrenamed Miles in §1.'
    },
    {
      name: 'Winnoc',
      a: Math.PI / 2 + (3 * Math.PI) / 4,
      cite: '§12',
      body: 'Pelerine slave; explains\nthe three paths into slavery.'
    }
  ].map(r => ({ ...r, x: cx + Math.cos(r.a) * 170, y: cy + Math.sin(r.a) * 170 }))
  return (
    <Canvas w={800} h={580}>
      <Label x={40} y={32} size={FONT_SMALL}>
        LAZARET OF THE PELERINES · §2–13
      </Label>
      {ring.map((r, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={r.x}
          y2={r.y}
          stroke={FG}
          strokeOpacity={tip && tip.title === r.name ? OPACITY.fg : OPACITY.faint}
          strokeWidth={tip && tip.title === r.name ? STROKE_PRIMARY : STROKE_HAIR}
        />
      ))}
      {ring.map(r => (
        <g
          key={r.name}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setTip({ x: r.x, y: r.y, title: r.name, body: r.body, cite: r.cite })}
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={r.x}
            cy={r.y}
            r="8"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={r.x}
            y={r.y + 22}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_LABEL}
          >
            {r.name}
          </text>
          <circle cx={r.x} cy={r.y} r="22" fill="transparent" />
        </g>
      ))}
      <g>
        <circle
          cx={cx}
          cy={cy}
          r="14"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={cx}
          y={cy + 32}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SEVERIAN
        </text>
      </g>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// IV.02.4 - Claw Paradox
export function Ch02ClawParadox() {
  return (
    <Canvas w={800} h={420}>
      <Label x={40} y={32} size={FONT_SMALL}>
        CLAW PARADOX · §2
      </Label>
      <g>
        <rect
          x={60}
          y={110}
          width={280}
          height={200}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={80}
          y={134}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          PELERINE
        </text>
        <text x={80} y={164} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_TIGHT}>
          THE TRUE CLAW WAS
        </text>
        <text x={80} y={182} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_TIGHT}>
          A SAPPHIRE
        </text>
        <text x={80} y={216} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          Severian's relic broke
        </text>
        <text x={80} y={232} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          in Baldanders's castle.
        </text>
        <text x={80} y={262} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          What he carries now
        </text>
        <text x={80} y={278} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          cannot be the Claw.
        </text>
      </g>
      <g>
        <rect
          x={460}
          y={110}
          width={280}
          height={200}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={480}
          y={134}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          SEVERIAN
        </text>
        <text x={480} y={164} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_TIGHT}>
          THE CLAW HEALED
        </text>
        <text x={480} y={182} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_TIGHT}>
          A DEAD SOLDIER
        </text>
        <text x={480} y={216} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          I saw it work.
        </text>
        <text x={480} y={232} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          Miles is alive.
        </text>
        <text x={480} y={262} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          Whatever I carry,
        </text>
        <text x={480} y={278} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          it is the Claw.
        </text>
      </g>
      <line
        x1={340}
        y1={210}
        x2={460}
        y2={210}
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
        strokeDasharray="3 3"
      />
      <text
        x={400}
        y={200}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        CONTRADICTION
      </text>
      <text
        x={400}
        y={224}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        both presented as fact
      </text>
      <text
        x={400}
        y={360}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        letterSpacing={LS_TITLE}
      >
        resolution: every thorn is the Claw (§XXXI)
      </text>
    </Canvas>
  )
}

// IV.03.1 - Structure Diagram (Module 03)
export function Ch03StructureDiagram() {
  return (
    <Canvas w={800} h={400}>
      <Label x={40} y={32} size={FONT_SMALL}>
        MODULE 03 · TURN AT SECTION XIV
      </Label>
      <g>
        <rect
          x={60}
          y={110}
          width={300}
          height={180}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={80}
          y={134}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          BEFORE
        </text>
        <text x={80} y={162} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_LABEL}>
          carries the Claw
        </text>
        <text x={80} y={190} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · Foila's circle
        </text>
        <text x={80} y={206} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · three suitors' tales
        </text>
        <text x={80} y={222} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · slavery paths
        </text>
        <text x={80} y={238} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · the Ascian's parable
        </text>
        <text x={80} y={266} fill={FG} fontSize={FONT_LABEL}>
          listens to stories
        </text>
      </g>
      <g>
        <circle
          cx={400}
          cy={200}
          r="40"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={400}
          y={200}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          XIV
        </text>
        <text
          x={400}
          y={216}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          Claw returned
        </text>
      </g>
      <g>
        <rect
          x={440}
          y={110}
          width={300}
          height={180}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={460}
          y={134}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          AFTER
        </text>
        <text x={460} y={162} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_LABEL}>
          an errand for Mannea
        </text>
        <text x={460} y={190} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · anchorite Master Ash
        </text>
        <text x={460} y={206} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · the Last House
        </text>
        <text x={460} y={222} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
          · geography thins out
        </text>
        <text x={460} y={266} fill={FG} fontSize={FONT_LABEL}>
          walks alone
        </text>
      </g>
      <line
        x1={360}
        y1={200}
        x2={362}
        y2={200}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <line
        x1={438}
        y1={200}
        x2={440}
        y2={200}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
    </Canvas>
  )
}

// IV.03.2 - Character Web (Module 03)
export function Ch03CharacterWeb() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    foila: {
      x: 300,
      y: 200,
      label: 'Foila',
      sub: 'cherkaji',
      cite: '§4',
      body: "Judge of the three suitors' tales."
    },
    hallvard: {
      x: 160,
      y: 120,
      label: 'Hallvard',
      sub: 'islander · suitor',
      cite: '§5–7',
      body: 'Tells the tale of the boat.'
    },
    melito: {
      x: 160,
      y: 280,
      label: 'Melito',
      sub: 'hoplite · suitor',
      cite: '§5–7',
      body: 'Tells the tale of the cock.'
    },
    loyal: {
      x: 300,
      y: 340,
      label: 'Loyal',
      sub: 'Ascian',
      cite: '§11',
      body: 'Tells the parable of Correct Thought.'
    },
    sev: {
      x: 480,
      y: 280,
      label: 'SEVERIAN',
      sub: 'judge',
      cite: 'throughout',
      body: 'Sits across from Foila as judge\nof the tales.'
    },
    mannea: {
      x: 640,
      y: 200,
      label: 'Mannea',
      sub: 'Pelerine',
      cite: '§14',
      body: 'Sends Severian on the errand\nthat takes him out of the lazaret.'
    },
    ash: {
      x: 640,
      y: 340,
      label: 'Master Ash',
      sub: 'anchorite',
      cite: '§15–17',
      body: 'Lives in a house rooted in time;\nspeaks of the final ice.'
    }
  }
  const edges = [
    ['hallvard', 'foila', 'loves'],
    ['melito', 'foila', 'loves'],
    ['loyal', 'foila', 'tells'],
    ['foila', 'sev', 'judge'],
    ['sev', 'mannea', 'errand'],
    ['mannea', 'ash', 'sent to']
  ]
  return (
    <Canvas w={800} h={420}>
      <Label x={40} y={32} size={FONT_SMALL}>
        MODULE 03 · CHARACTER WEB
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
            r={k === 'sev' || k === 'foila' ? 12 : 8}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={k === 'sev' ? STROKE_EMPHASIS : STROKE_SECONDARY}
          />
          <text
            x={n.x}
            y={n.y + (k === 'sev' || k === 'foila' ? 28 : 22)}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_LABEL}
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + (k === 'sev' || k === 'foila' ? 42 : 36)}
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

// IV.03.3 - Ascian Story Arc
export function Ch03AscianStoryArc() {
  const fragments = [
    { quote: '"In times past, loyalty to the cause of the people was enough."', gloss: 'OPENING' },
    { quote: '"The People look to the Group of Seventeen for the right path."', gloss: 'ORDER' },
    { quote: '"Friend or enemy: which is he?"', gloss: 'QUESTION' },
    { quote: '"He is no friend of the Populace."', gloss: 'ANSWER' },
    { quote: '"Where the People are united, no army can stand."', gloss: 'FINALE' }
  ]
  return (
    <Canvas w={800} h={500}>
      <Label x={40} y={32} size={FONT_SMALL}>
        "THE TALE OF LOYAL TO THE GROUP" · §XI
      </Label>
      {fragments.map((f, i) => {
        const y = 80 + i * 70
        return (
          <g key={i}>
            <text
              x={40}
              y={y}
              fill={FG}
              fontSize={FONT_SMALL}
              opacity={OPACITY.dim}
              letterSpacing={LS_TITLE}
            >
              FRAGMENT {i + 1}
            </text>
            <text
              x={120}
              y={y}
              fill={FG}
              fontSize={FONT_SMALL}
              opacity={OPACITY.dim}
              letterSpacing={LS_MEDIUM}
            >
              {f.gloss}
            </text>
            <rect
              x={40}
              y={y + 8}
              width={500}
              height={36}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text x={56} y={y + 30} fill={FG} fontSize={FONT_LABEL}>
              {f.quote}
            </text>
            {i < fragments.length - 1 && (
              <line
                x1={290}
                y1={y + 48}
                x2={290}
                y2={y + 60}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
              />
            )}
          </g>
        )
      })}
      <text
        x={580}
        y={86}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        WHAT IT MEANS
      </text>
      <text x={580} y={112} fill={FG} fontSize={FONT_LABEL}>
        A loyal soldier
      </text>
      <text x={580} y={130} fill={FG} fontSize={FONT_LABEL}>
        is sent on a mission.
      </text>
      <text x={580} y={160} fill={FG} fontSize={FONT_LABEL}>
        He meets a stranger;
      </text>
      <text x={580} y={178} fill={FG} fontSize={FONT_LABEL}>
        questions him.
      </text>
      <text x={580} y={208} fill={FG} fontSize={FONT_LABEL}>
        The stranger is an
      </text>
      <text x={580} y={226} fill={FG} fontSize={FONT_LABEL}>
        enemy of the Group.
      </text>
      <text x={580} y={256} fill={FG} fontSize={FONT_LABEL}>
        He returns; reports;
      </text>
      <text x={580} y={274} fill={FG} fontSize={FONT_LABEL}>
        is rewarded.
      </text>
      <text x={580} y={304} fill={FG} fontSize={FONT_LABEL}>
        Unity is sufficient;
      </text>
      <text x={580} y={322} fill={FG} fontSize={FONT_LABEL}>
        no army can stand.
      </text>
      <text
        x={400}
        y={478}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        constraint does not prevent expression - it selects for it
      </text>
    </Canvas>
  )
}

// IV.03.4 - Slavery Paths
export function Ch03SlaveryPaths() {
  const paths = [
    { id: 1, label: 'BIRTH', body: 'born into the order;\nno other life known.' },
    { id: 2, label: 'CONDEMNED', body: 'a sentence passed;\nslavery instead of execution.' },
    {
      id: 3,
      label: 'CHOSEN',
      body: "the freeman walks in\nand binds himself willingly.\nWinnoc's path."
    }
  ]
  return (
    <Canvas w={800} h={420}>
      <Label x={40} y={32} size={FONT_SMALL}>
        WINNOC NAMES THE THREE PATHS · §XII
      </Label>
      {paths.map((p, i) => {
        const x = 80 + i * 240
        return (
          <g key={i}>
            <rect
              x={x}
              y={120}
              width={200}
              height={180}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={p.id === 3 ? OPACITY.fg : OPACITY.dim}
              strokeWidth={p.id === 3 ? STROKE_EMPHASIS : STROKE_SECONDARY}
            />
            <text
              x={x + 16}
              y={146}
              fill={FG}
              fontSize={FONT_SMALL}
              opacity={OPACITY.dim}
              letterSpacing={LS_TITLE}
            >
              PATH {p.id}
            </text>
            <text x={x + 16} y={174} fill={FG} fontSize={FONT_TITLE} letterSpacing={LS_UPPER}>
              {p.label}
            </text>
            {p.body.split('\n').map((ln, j) => (
              <text
                key={j}
                x={x + 16}
                y={210 + j * 16}
                fill={FG}
                fontSize={FONT_SMALL}
                opacity={OPACITY.dim}
              >
                {ln}
              </text>
            ))}
            {p.id === 3 && (
              <text x={x + 16} y={280} fill={FG} fontSize={FONT_SMALL} letterSpacing={LS_LABEL}>
                ← Winnoc
              </text>
            )}
          </g>
        )
      })}
      <text
        x={400}
        y={360}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        named casually, as common knowledge - and as the frame for Winnoc's own story
      </text>
    </Canvas>
  )
}

// IV.03.5 - Three Suitors Routes
export function Ch03ThreeSuitorsRoutes() {
  const suitors = [
    { x: 140, label: 'ELDEST', route: 'forces', outcome: 'fails', cite: '§6' },
    { x: 400, label: 'MIDDLE', route: 'tricks', outcome: 'fails', cite: '§6' },
    { x: 660, label: 'YOUNGEST', route: 'accepts', outcome: 'wins', cite: '§6' }
  ]
  return (
    <Canvas w={800} h={420}>
      <Label x={40} y={32} size={FONT_SMALL}>
        THREE SUITORS · THREE RESPONSES · §VI
      </Label>
      <g>
        <circle
          cx={400}
          cy={350}
          r="36"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={400}
          y={348}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          BROWN FIGURE
        </text>
        <text
          x={400}
          y={366}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          (the daughter shifted)
        </text>
      </g>
      {suitors.map(s => (
        <g key={s.label}>
          <circle
            cx={s.x}
            cy={140}
            r="22"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={s.x}
            y={144}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_MEDIUM}
          >
            {s.label}
          </text>
          <text x={s.x} y={186} fill={FG} fontSize={FONT_LABEL} textAnchor="middle">
            {s.route}
          </text>
          <text
            x={s.x}
            y={206}
            fill={FG}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            opacity={s.outcome === 'wins' ? OPACITY.fg : OPACITY.dim}
          >
            → {s.outcome}
          </text>
          <line
            x1={s.x}
            y1={216}
            x2={s.x === 400 ? s.x : s.x === 140 ? s.x + 30 : s.x - 30}
            y2={314}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
          />
        </g>
      ))}
      <text
        x={400}
        y={398}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        the youngest wins by accepting guidance instead of forcing or tricking
      </text>
    </Canvas>
  )
}

// IV.03.6 - Last House Time
export function Ch03LastHouseTime() {
  return (
    <Canvas w={800} h={520}>
      <Label x={40} y={32} size={FONT_SMALL}>
        MASTER ASH'S HOUSE · §17
      </Label>
      <line
        x1={40}
        y1={300}
        x2={760}
        y2={300}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={40}
        y={292}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        PRESENT
      </text>
      <rect
        x={300}
        y={220}
        width={200}
        height={80}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={400}
        y={250}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        letterSpacing={LS_MEDIUM}
      >
        THE HOUSE
      </text>
      <text
        x={400}
        y={268}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        (present floor)
      </text>
      <rect
        x={340}
        y={140}
        width={120}
        height={80}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={400}
        y={172}
        fill={FG}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        letterSpacing={LS_MEDIUM}
      >
        UPPER ROOM
      </text>
      <text
        x={400}
        y={188}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        against the final ice
      </text>
      <polyline
        points="40,110 200,90 400,100 580,80 760,110"
        fill="none"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={40}
        y={80}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        FUTURE · ICE
      </text>
      {[330, 360, 400, 440, 470].map((x, i) => (
        <path
          key={i}
          d={`M ${x} 300 Q ${x + (i - 2) * 12} ${380 + i * 20} ${x + (i - 2) * 30} ${460}`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
      ))}
      <text
        x={40}
        y={478}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        PAST
      </text>
      <text x={520} y={470} fill={FG} fontSize={FONT_LABEL}>
        "time is a weaving,
      </text>
      <text x={520} y={488} fill={FG} fontSize={FONT_LABEL}>
        not a single thread"
      </text>
      <text x={520} y={506} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
        -Master Ash
      </text>
    </Canvas>
  )
}

// IV.04.1 - Section Arc
export function Ch04ModuleArc() {
  const beats = [
    { x: 0, y: 0.3, label: 'Foila dies · promise' },
    { x: 1, y: 0.45, label: 'standoff at the coach' },
    { x: 2, y: 0.4, label: 'march · fear' },
    { x: 3, y: 0.2, label: 'pinned under horse' },
    { x: 4, y: 0.55, label: 'Daria · counsel' },
    { x: 5, y: 0.85, label: 'rises in flier · Autarch revealed' }
  ]
  return <ArcChart4 beats={beats} title="MODULE 04 · SECTION ARC" />
}

// IV.04.2 - Three-Faction Standoff
export function Ch04ThreeFactionStandoff() {
  return (
    <Canvas w={800} h={480}>
      <Label x={40} y={32} size={FONT_SMALL}>
        STANDOFF OVER A MIRED COACH
      </Label>
      <g>
        <rect
          x={340}
          y={210}
          width={120}
          height={60}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={400}
          y={236}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          MIRED COACH
        </text>
        <text
          x={400}
          y={254}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          contains the Autarch
        </text>
      </g>
      {[
        { x: 120, y: 140, label: 'MAN-BEASTS', sub: 'appeal to honour' },
        { x: 680, y: 140, label: 'ASCIANS', sub: 'use their own formulae' },
        { x: 400, y: 400, label: 'ANPIELS', sub: 'descend, close the standoff' }
      ].map((f, i) => (
        <g key={i}>
          <circle
            cx={f.x}
            cy={f.y}
            r="40"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={f.x}
            y={f.y - 4}
            fill={FG}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            letterSpacing={LS_MEDIUM}
          >
            {f.label}
          </text>
          <text
            x={f.x}
            y={f.y + 14}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {f.sub}
          </text>
          <line
            x1={f.x}
            y1={f.y}
            x2={400}
            y2={240}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
            strokeDasharray="3 3"
          />
        </g>
      ))}
      <text
        x={400}
        y={460}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        SEVERIAN BROKERS THROUGH THE LANGUAGE OF EACH PARTY
      </text>
    </Canvas>
  )
}

// IV.04.3 - Battle Formation
export function Ch04BattleFormation() {
  return (
    <Canvas w={800} h={520}>
      <Label x={40} y={32} size={FONT_SMALL}>
        VALLEY BATTLE · ASCIANS vs COMMONWEALTH
      </Label>
      <text
        x={200}
        y={80}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        letterSpacing={LS_TITLE}
        opacity={OPACITY.dim}
      >
        ASCIAN ARMY (NORTH)
      </text>
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <rect
            key={`${r}-${c}`}
            x={60 + c * 36}
            y={100 + r * 22}
            width={28}
            height={16}
            fill={(r + c) % 2 ? FG : '#000'}
            fillOpacity={(r + c) % 2 ? 0.15 : 1}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_HAIR}
          />
        ))
      )}
      <text
        x={200}
        y={262}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        CHECKERBOARD INFANTRY
      </text>
      {Array.from({ length: 4 }).map((_, i) => {
        const x = 90 + i * 76
        return (
          <g key={i}>
            <circle cx={x} cy={300} r="6" fill="var(--bg)" stroke={FG} strokeOpacity={OPACITY.fg} />
            <circle
              cx={x + 16}
              cy={300}
              r="6"
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
            />
            <line x1={x + 4} y1={300} x2={x + 12} y2={300} stroke={FG} strokeOpacity={OPACITY.fg} />
          </g>
        )
      })}
      <text
        x={200}
        y={326}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        BLIND-SWORDSMAN PAIRS
      </text>
      <text
        x={600}
        y={80}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        letterSpacing={LS_TITLE}
        opacity={OPACITY.dim}
      >
        COMMONWEALTH (SOUTH)
      </text>
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 500 + i * 32
        return (
          <g key={i}>
            <circle cx={x} cy={120} r="8" fill={FG} opacity={OPACITY.fg} />
            <line x1={x} y1={128} x2={x} y2={140} stroke={FG} strokeOpacity={OPACITY.fg} />
          </g>
        )
      })}
      <text
        x={600}
        y={158}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        cherkajis · cavalry
      </text>
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 490 + i * 26
        return (
          <polygon
            key={i}
            points={`${x},190 ${x + 12},190 ${x + 6},176`}
            fill={FG}
            opacity={OPACITY.fg}
          />
        )
      })}
      <text
        x={600}
        y={210}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        peltasts
      </text>
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 490 + i * 32
        return (
          <g key={i}>
            <rect
              x={x}
              y={230}
              width={14}
              height={10}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
            />
            <line x1={x + 7} y1={230} x2={x + 7} y2={222} stroke={FG} strokeOpacity={OPACITY.fg} />
          </g>
        )
      })}
      <text
        x={600}
        y={258}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        hobilers
      </text>
      {Array.from({ length: 4 }).map((_, i) => {
        const x = 510 + i * 44
        return (
          <g key={i}>
            <ellipse
              cx={x}
              cy={310}
              rx={18}
              ry={10}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <circle cx={x - 8} cy={300} r="4" fill={FG} />
            <line x1={x - 14} y1={300} x2={x - 8} y2={296} stroke={FG} strokeOpacity={OPACITY.fg} />
          </g>
        )
      })}
      <text
        x={600}
        y={336}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        Daughters of War on arsinoithers
      </text>
      <line
        x1={350}
        y1={380}
        x2={450}
        y2={380}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_EMPHASIS}
      />
      <text
        x={400}
        y={400}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        letterSpacing={LS_UPPER}
      >
        ENGAGEMENT LINE
      </text>
      <text
        x={400}
        y={470}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        Severian, on horseback, is pinned under his dead horse during the clash
      </text>
    </Canvas>
  )
}

// IV.04.4 - Autarch Identity Web
export function Ch04AutarchIdentityWeb() {
  const [tip, setTip] = useTooltip()
  const cx = 400,
    cy = 290
  const ids = [
    {
      name: 'AUTARCH',
      cite: 'Bk II §X',
      body: 'Severian glimpsed him in the\nHouse Absolute corridor.'
    },
    {
      name: 'innkeeper',
      cite: 'Bk I §17',
      body: 'At the Inn of Lost Loves - and\nSeverian did not recognise him.'
    },
    {
      name: 'old man',
      cite: 'Bk I §7',
      body: 'Stooped figure in the Atrium of\nTime; Severian thought him servile.'
    },
    { name: 'mercer', cite: 'Bk II', body: 'Sold cloth in Saltus.' },
    { name: 'beggar', cite: 'Bk III', body: 'A blind beggar Severian passed\non the road.' },
    { name: 'soldier', cite: 'Bk IV', body: 'Encountered in the war camp.' },
    { name: 'father', cite: 'Bk IV §23', body: 'Sees Severian only once.' },
    {
      name: 'composite',
      cite: 'Bk IV §22',
      body: 'The Autarchy is many men;\nthe Throne wears them all.'
    }
  ]
  ids.forEach((id, i) => {
    const a = (i / ids.length) * Math.PI * 2 - Math.PI / 2
    id._x = cx + Math.cos(a) * 200
    id._y = cy + Math.sin(a) * 180
  })
  return (
    <Canvas w={800} h={620}>
      <Label x={40} y={32} size={FONT_SMALL}>
        AUTARCH HOLDS EIGHT IDENTITIES SIMULTANEOUSLY
      </Label>
      {ids.map((id, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={id._x}
          y2={id._y}
          stroke={FG}
          strokeOpacity={tip && tip.title === id.name ? OPACITY.fg : OPACITY.faint}
          strokeWidth={tip && tip.title === id.name ? STROKE_PRIMARY : STROKE_HAIR}
        />
      ))}
      {ids.map((id, i) => (
        <g
          key={i}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: id._x, y: id._y, title: id.name, body: id.body, cite: id.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={id._x}
            cy={id._y}
            r="8"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={id._x}
            y={id._y + 22}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_LABEL}
          >
            {id.name}
          </text>
          <circle cx={id._x} cy={id._y} r="22" fill="transparent" />
        </g>
      ))}
      <g>
        <circle
          cx={cx}
          cy={cy}
          r="44"
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
          letterSpacing={LS_TITLE}
        >
          ONE BODY
        </text>
      </g>
      <text
        x={400}
        y={580}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        SEVERIAN HAD SEEN HIM TWICE BEFORE WITHOUT KNOWING
      </text>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// IV.05.1 - Three Faction Collapse
export function Ch05ThreeFactionCollapse() {
  return (
    <Canvas w={800} h={500}>
      <Label x={40} y={32} size={FONT_SMALL}>
        MODULE 05 · THREE STRUCTURES CONVERGE
      </Label>
      {[
        { x: 140, label: 'AUTARCHY', fate: 'dies · transfers to Severian', cite: '§XXIX' },
        { x: 400, label: "VODALUS'S REVOLUTION", fate: 'Vodalus killed by Agia', cite: '§XXXI' },
        { x: 660, label: 'ASCIAN ARMY', fate: 'loses Severian to Malrubius', cite: '§XXX' }
      ].map((f, i) => (
        <g key={i}>
          <rect
            x={f.x - 90}
            y={100}
            width={180}
            height={120}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text
            x={f.x}
            y={128}
            fill={FG}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            letterSpacing={LS_UPPER}
          >
            {f.label}
          </text>
          <text
            x={f.x}
            y={156}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {f.fate.split(' ').slice(0, 3).join(' ')}
          </text>
          <text
            x={f.x}
            y={172}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            {f.fate.split(' ').slice(3).join(' ')}
          </text>
          <text
            x={f.x}
            y={196}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
            letterSpacing={LS_MEDIUM}
          >
            {f.cite}
          </text>
          <line
            x1={f.x}
            y1={220}
            x2={400}
            y2={340}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
          />
        </g>
      ))}
      <circle
        cx={400}
        cy={380}
        r="16"
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_EMPHASIS}
      />
      <text
        x={400}
        y={414}
        fill={FG}
        fontSize={FONT_TITLE}
        textAnchor="middle"
        letterSpacing={LS_TITLE}
      >
        SEVERIAN
      </text>
      <text
        x={400}
        y={432}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        new Autarch
      </text>
    </Canvas>
  )
}

// IV.05.2 - Autarch Identity Stack
export function Ch05AutarchIdentityStack() {
  const [n, setN] = React.useState(2)
  const stack = [
    { label: 'SEVERIAN', note: 'present self' },
    { label: 'THECLA', note: 'within since Bk II' },
    { label: 'OLD AUTARCH', note: 'pharmacon ingested' },
    { label: 'PRIOR AUTARCH', note: 'previously absorbed' },
    { label: 'PRIOR AUTARCH', note: 'previously absorbed' },
    { label: '…', note: 'hundreds back' },
    { label: 'THE RACE', note: 'collective bedrock' }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={800} h={520}>
        <Label x={40} y={32} size={FONT_SMALL}>
          IDENTITY STACK · DRAG TO PEEL LAYERS
        </Label>
        {stack.map((s, i) => {
          const visible = i < n
          const y = 90 + i * 50
          return (
            <g key={i} opacity={visible ? 1 - i * 0.1 : 0.05}>
              <rect
                x={200}
                y={y}
                width={400}
                height={36}
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={visible ? OPACITY.fg : OPACITY.faint}
                strokeWidth={visible ? STROKE_SECONDARY : STROKE_HAIR}
              />
              <text x={220} y={y + 22} fill={FG} fontSize={FONT_LABEL} letterSpacing={LS_MEDIUM}>
                {s.label}
              </text>
              <text
                x={580}
                y={y + 22}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor="end"
                opacity={OPACITY.dim}
              >
                {s.note}
              </text>
            </g>
          )
        })}
      </Canvas>
      <Slider
        label="layers"
        value={n}
        min={1}
        max={stack.length}
        step={1}
        onChange={v => setN(Math.round(v))}
        format={v => Math.round(v).toString()}
      />
    </div>
  )
}

// IV.05.3 - Aquastor Projection
export function Ch05AquastorProjection() {
  const [inRange, setInRange] = React.useState(true)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={800} h={460}>
        <Label x={40} y={32} size={FONT_SMALL}>
          AQUASTOR PROJECTION · §XXXVII
        </Label>
        <ellipse
          cx={150}
          cy={200}
          rx={60}
          ry={20}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={150}
          y={204}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SHIP
        </text>
        <text
          x={150}
          y={236}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          thinking machine · scans Severian
        </text>
        {inRange && (
          <g>
            <line
              x1={210}
              y1={200}
              x2={420}
              y2={240}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeDasharray="2 3"
            />
            <line
              x1={210}
              y1={200}
              x2={420}
              y2={300}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeDasharray="2 3"
            />
          </g>
        )}
        <circle
          cx={500}
          cy={270}
          r="10"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={500}
          y={296}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_MEDIUM}
        >
          SEVERIAN
        </text>
        <g opacity={inRange ? 1 : 0.1}>
          <circle
            cx={620}
            cy={210}
            r="22"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
            strokeDasharray={inRange ? null : '2 3'}
          />
          <text x={620} y={214} fill={FG} fontSize={FONT_SMALL} textAnchor="middle">
            Malrubius
          </text>
          <text
            x={620}
            y={246}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            aquastor
          </text>
        </g>
        <g opacity={inRange ? 1 : 0.1}>
          <circle
            cx={680}
            cy={330}
            r="18"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
            strokeDasharray={inRange ? null : '2 3'}
          />
          <text x={680} y={334} fill={FG} fontSize={FONT_SMALL} textAnchor="middle">
            Triskele
          </text>
          <text
            x={680}
            y={358}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            aquastor
          </text>
        </g>
        {!inRange && (
          <g>
            <text
              x={620}
              y={210}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              ↓ dust
            </text>
            <text
              x={680}
              y={330}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              ↓ dust
            </text>
          </g>
        )}
        <text
          x={400}
          y={420}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
        >
          aquastors are sustained constructs - not ghosts, not miracles
        </text>
      </Canvas>
      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
        <Toggle on={inRange} onChange={setInRange} label={inRange ? 'IN RANGE' : 'OUT OF RANGE'} />
      </div>
    </div>
  )
}

// IV.05.4 - Thorn Bush Claw
export function Ch05ThornBushClaw() {
  return (
    <Canvas w={800} h={560}>
      <Label x={40} y={32} size={FONT_SMALL}>
        ON THE BEACH AT OCEAN · §XXXIX
      </Label>

      <Stipple x={40} y={60} w={720} h={120} n={70} seed={777} opacity={0.4} r={0.5} />

      <line
        x1={40}
        y1={200}
        x2={760}
        y2={200}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
      />
      {[210, 220, 232, 246, 264, 286, 310].map((wy, i) => (
        <path
          key={i}
          d={`M 40 ${wy} Q 200 ${wy + 4 * Math.sin(i)} 400 ${wy - 2} Q 600 ${wy + 3} 760 ${wy + (i % 2 ? 2 : -2)}`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim * (1 - i * 0.1)}
          strokeWidth={STROKE_HAIR}
        />
      ))}
      <text
        x={40}
        y={194}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_MEDIUM}
      >
        OCEAN
      </text>

      <Stipple x={40} y={340} w={720} h={180} n={120} seed={11} opacity={0.2} r={0.7} />

      {Array.from({ length: 6 }).map((_, i) => {
        const fx = 80 + i * 70
        const fy = 480 - i * 8
        return (
          <g key={i} opacity={0.5 - i * 0.06}>
            <ellipse
              cx={fx}
              cy={fy}
              rx={5}
              ry={3}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
            <ellipse
              cx={fx + 20}
              cy={fy - 6}
              rx={5}
              ry={3}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
          </g>
        )
      })}

      <g transform="translate(540 340)">
        <path
          d="M 0 80 Q -8 40 0 0 Q 12 -40 -6 -90 Q -20 -120 4 -150"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <path
          d="M 0 40 Q 20 30 36 0 Q 44 -20 60 -28"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <path
          d="M -2 10 Q -30 -10 -50 -30 Q -68 -50 -76 -78"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <path
          d="M 0 -40 Q 28 -50 50 -78 Q 64 -100 80 -110"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <path
          d="M -6 -60 Q -34 -68 -52 -94 Q -60 -110 -78 -120"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <path
          d="M -2 -110 Q 18 -120 32 -136"
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_GUIDE}
        />
        {[
          [0, 80, -30],
          [6, 55, -20],
          [12, 40, 15],
          [-4, 20, -40],
          [20, 30, 40],
          [32, 10, 80],
          [-26, 0, -110],
          [-50, -30, -140],
          [-70, -60, -160],
          [-76, -78, 180],
          [40, -12, 60],
          [54, -25, 30],
          [60, -30, 40],
          [28, -50, 90],
          [50, -78, 120],
          [64, -100, 135],
          [80, -110, 150],
          [6, -40, -70],
          [2, -80, -50],
          [-6, -90, -90],
          [-34, -70, -130],
          [-50, -94, -150],
          [-78, -120, -160],
          [4, -150, -40],
          [18, -120, 120],
          [32, -136, 150],
          [-12, -60, -100],
          [-2, -110, -30]
        ].map(([tx, ty, deg], i) => {
          const rad = (deg * Math.PI) / 180
          const lx = tx + Math.cos(rad) * 8
          const ly = ty + Math.sin(rad) * 8
          return (
            <g key={i}>
              <line
                x1={tx}
                y1={ty}
                x2={lx}
                y2={ly}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_GUIDE}
              />
              <path
                d={`M ${lx} ${ly}
                       q ${Math.cos(rad - Math.PI / 2) * 2} ${Math.sin(rad - Math.PI / 2) * 2}
                         ${Math.cos(rad) * 3 + Math.cos(rad - Math.PI / 2) * 1.5} ${Math.sin(rad) * 3 + Math.sin(rad - Math.PI / 2) * 1.5}
                       L ${lx + Math.cos(rad) * 5} ${ly + Math.sin(rad) * 5}
                       L ${lx + Math.cos(rad + Math.PI / 2) * 1.5} ${ly + Math.sin(rad + Math.PI / 2) * 1.5} Z`}
                fill={FG}
                opacity={OPACITY.fg}
              />
            </g>
          )
        })}
        {[
          [18, -5, 25],
          [-30, -22, -110],
          [40, -50, 60],
          [-50, -60, -130],
          [70, -90, 90],
          [22, -100, 120]
        ].map(([lx, ly, rot], i) => (
          <g key={`l${i}`} transform={`translate(${lx} ${ly}) rotate(${rot})`}>
            <path
              d="M 0 0 Q -3 -6 0 -10 Q 3 -6 0 0 Z"
              fill="none"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
          </g>
        ))}
      </g>

      <g transform="translate(220 360)">
        <path
          d="M 0 0 L 100 -20 L 130 0 L 100 20 Z"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <g transform="translate(120 0)">
          <Rays cx={0} cy={0} r0={4} r1={22} count={10} opacity={0.5} strokeWidth={STROKE_HAIR} />
          <path d="M 0 -6 L 4 0 L 0 6 L -4 0 Z" fill={FG} opacity={OPACITY.fg} />
        </g>
        <text
          x={50}
          y={45}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
          letterSpacing={LS_MEDIUM}
        >
          A THORN IN HIS ARM
        </text>
      </g>

      <text
        x={400}
        y={520}
        fill={FG}
        fontSize={FONT_TITLE}
        textAnchor="middle"
        letterSpacing={LS_CONTROL}
      >
        EVERY THORN IS THE CLAW
      </text>
      <text
        x={400}
        y={540}
        fill={FG}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        opacity={OPACITY.dim}
      >
        - the Increate rests in everything (§XXXIX)
      </text>
    </Canvas>
  )
}

// IV.06.1 - Route Map
export function Ch06RouteMap() {
  const [tip, setTip] = useTooltip()
  const stops = [
    {
      id: 1,
      x: 80,
      y: 430,
      label: 'Samru landfall',
      cite: '§XXX',
      body: 'Ship sets him down south of Nessus.'
    },
    {
      id: 2,
      x: 170,
      y: 380,
      label: 'Gyoll mouth',
      cite: '§XXXII',
      body: 'Mouth of the river; barge upriver.'
    },
    {
      id: 3,
      x: 300,
      y: 300,
      label: 'Algedonic Quarter',
      cite: '§XXXII',
      body: 'Where the rag shop was; revisited.'
    },
    {
      id: 4,
      x: 400,
      y: 250,
      label: 'Botanic Gardens',
      cite: '§XXXIII',
      body: 'Dorcas met here.'
    },
    {
      id: 5,
      x: 500,
      y: 220,
      label: 'Sanguinary Field',
      cite: '§XXXIII',
      body: 'The duel field is empty.'
    },
    {
      id: 6,
      x: 580,
      y: 240,
      label: 'Pelerine site',
      cite: '§XXXIV',
      body: 'Cathedral ruins. Memorial.'
    },
    {
      id: 7,
      x: 650,
      y: 290,
      label: 'Necropolis',
      cite: '§XXXV',
      body: "Vodalus's grave entry; he meets Ouen."
    },
    {
      id: 8,
      x: 680,
      y: 340,
      label: 'Citadel gate',
      cite: '§XXXV',
      body: 'Returns through the locked gate.'
    },
    {
      id: 9,
      x: 700,
      y: 400,
      label: 'Matachin Tower',
      cite: '§XXXV–VI',
      body: 'Severian and Palaemon meet.'
    },
    {
      id: 10,
      x: 660,
      y: 440,
      label: 'Atrium of Time',
      cite: '§XXXVII',
      body: 'Valeria. The loop reveals itself.'
    }
  ]
  return (
    <Canvas w={800} h={520}>
      <Label x={40} y={32} size={FONT_SMALL}>
        MODULE 06 · HOMECOMING CIRCUIT
      </Label>
      <path
        d="M 40 360 Q 100 200 240 160 Q 420 130 600 160 Q 720 200 760 320 Q 720 460 540 470 Q 360 480 200 460 Q 80 440 40 360 Z"
        fill={FG}
        fillOpacity="0.03"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_GUIDE}
      />
      <path
        d={'M ' + stops.map(s => `${s.x} ${s.y}`).join(' L ')}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
        fill="none"
      />
      {stops.map(s => (
        <g
          key={s.id}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() =>
            setTip({ x: s.x, y: s.y, title: s.label, body: s.body, cite: s.cite })
          }
          onMouseLeave={() => setTip(null)}
        >
          <circle
            cx={s.x}
            cy={s.y}
            r="11"
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <text x={s.x} y={s.y + 4} fill={FG} fontSize={FONT_SMALL} textAnchor="middle">
            {s.id}
          </text>
        </g>
      ))}
      {stops.map((s, i) => (
        <text
          key={`L-${i}`}
          x={40}
          y={64 + i * 16}
          fill={FG}
          fontSize={FONT_SMALL}
          opacity={OPACITY.dim}
        >
          {s.id}. {s.label}
        </text>
      ))}
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// IV.06.2 - Character Web (Module 06)
export function Ch06CharacterWeb() {
  const [tip, setTip] = useTooltip()
  const nodes = {
    sev: { x: 400, y: 290, label: 'SEVERIAN', sub: 'autarch' },
    palaemon: {
      x: 160,
      y: 160,
      label: 'Palaemon',
      sub: 'old teacher',
      cite: '§XXXV',
      body: 'They meet in the tower;\nthe sword returns to him.'
    },
    dorcas: {
      x: 160,
      y: 420,
      label: 'Dorcas',
      sub: 'left him in Bk III',
      cite: '§XXXII',
      body: 'She is now a grieving widow\nin the Algedonic Quarter.'
    },
    ouen: {
      x: 640,
      y: 160,
      label: 'Ouen',
      sub: 'father by blood',
      cite: '§XXXV',
      body: 'Severian recognises his face\nin the innkeeper of Nessus.'
    },
    valeria: {
      x: 640,
      y: 420,
      label: 'Valeria',
      sub: 'wife to be',
      cite: '§XXXVII',
      body: 'He returns to the Atrium\nand finds her there again.'
    },
    mandragora: {
      x: 400,
      y: 120,
      label: 'Mandragora',
      sub: 'mirror-self',
      cite: '§XXXVI',
      body: "The homunculus offers a\nreflection of Severian's loops."
    },
    claw: {
      x: 400,
      y: 460,
      label: 'CLAW',
      sub: 'no longer carried',
      cite: 'XXIX',
      body: 'Returned in Module 05.'
    }
  }
  const edges = [
    ['sev', 'palaemon'],
    ['sev', 'dorcas'],
    ['sev', 'ouen'],
    ['sev', 'valeria'],
    ['sev', 'mandragora'],
    ['sev', 'claw']
  ]
  return (
    <Canvas w={800} h={540}>
      <Label x={40} y={32} size={FONT_SMALL}>
        MODULE 06 · HOMECOMING WEB
      </Label>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={FG}
          strokeOpacity={tip && tip.title === nodes[b].label ? OPACITY.fg : OPACITY.faint}
          strokeWidth={tip && tip.title === nodes[b].label ? STROKE_PRIMARY : STROKE_HAIR}
        />
      ))}
      {Object.entries(nodes).map(([k, n]) =>
        k === 'sev' ? null : (
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
              r="8"
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={n.x}
              y={n.y + 22}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing={LS_LABEL}
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y + 36}
              fill={FG}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              opacity={OPACITY.dim}
            >
              {n.sub}
            </text>
            <circle cx={n.x} cy={n.y} r="22" fill="transparent" />
          </g>
        )
      )}
      <g>
        <circle
          cx={nodes.sev.x}
          cy={nodes.sev.y}
          r="14"
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={nodes.sev.x}
          y={nodes.sev.y + 32}
          fill={FG}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_UPPER}
        >
          SEVERIAN
        </text>
      </g>
      <Tooltip tip={tip} />
    </Canvas>
  )
}

// IV.06.3 - Returns and Callbacks
export function Ch06ReturnsAndCallbacks() {
  const callbacks = [
    { now: 'Necropolis', then: 'Bk I §1', note: 'Vodalus at the grave' },
    { now: 'Atrium of Time', then: 'Bk I §6', note: 'Valeria as a girl' },
    { now: 'Inn of Lost Loves', then: 'Bk I §31', note: 'the same innkeeper' },
    { now: 'Garden of Endless Sleep', then: 'Bk I §26', note: 'where Dorcas rose' },
    { now: 'Sanguinary Field', then: 'Bk I §28', note: 'the avern duel' },
    { now: 'Pelerine cathedral', then: 'Bk I §22', note: 'altar smashed' },
    { now: 'Matachin Tower', then: 'Bk I §2', note: "Severian's home" },
    { now: 'Library', then: 'Bk I §5', note: 'Master Ultan' }
  ]
  return (
    <Canvas w={800} h={560}>
      <Label x={40} y={32} size={FONT_SMALL}>
        EIGHT RETURNS · MODULE 06 REVISITS BOOKS I–III
      </Label>
      <text
        x={140}
        y={70}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        NOW
      </text>
      <text
        x={460}
        y={70}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        CALLBACK
      </text>
      <text
        x={640}
        y={70}
        fill={FG}
        fontSize={FONT_SMALL}
        opacity={OPACITY.dim}
        letterSpacing={LS_TITLE}
      >
        NOTE
      </text>
      {callbacks.map((c, i) => {
        const y = 100 + i * 50
        return (
          <g key={i}>
            <rect
              x={40}
              y={y - 18}
              width={720}
              height={36}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <text x={56} y={y + 4} fill={FG} fontSize={FONT_LABEL}>
              {c.now}
            </text>
            <text x={460} y={y + 4} fill={FG} fontSize={FONT_SMALL} opacity={OPACITY.dim}>
              {c.then}
            </text>
            <text x={640} y={y + 4} fill={FG} fontSize={FONT_SMALL}>
              {c.note}
            </text>
            <line x1={300} y1={y} x2={340} y2={y} stroke={FG} strokeOpacity={OPACITY.dim} />
            <polyline
              points={`332,${y - 4} 340,${y} 332,${y + 4}`}
              fill="none"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
            />
          </g>
        )
      })}
    </Canvas>
  )
}

// IV.06.4 - Time Loop Diagram
export function Ch06TimeLoopDiagram() {
  const [playing, setPlaying] = React.useState(false)
  const tRaw = useAnimationTime(playing, 0.18)
  // RESET rebases the clock so the marker returns to station 1 (t = 0)
  const [tBase, setTBase] = React.useState(0)
  const t = tRaw - tBase
  const stations = [
    { ang: -Math.PI / 2, label: 'Severian becomes Autarch', cite: 'Bk IV §XXIX' },
    {
      ang: -Math.PI / 2 + (1 * Math.PI) / 4,
      label: 'sails for the stars',
      cite: 'Bk IV §XXXVII'
    },
    {
      ang: -Math.PI / 2 + (2 * Math.PI) / 4,
      label: "hears the Conciliator's tale",
      cite: 'Urth of the New Sun'
    },
    { ang: -Math.PI / 2 + (3 * Math.PI) / 4, label: 'becomes the Conciliator', cite: 'Urth' },
    { ang: Math.PI / 2, label: "returns to Urth's past", cite: 'Urth' },
    { ang: Math.PI / 2 + (1 * Math.PI) / 4, label: 'founds the Pelerines', cite: 'Urth' },
    {
      ang: Math.PI / 2 + (2 * Math.PI) / 4,
      label: 'hides the Claw in cathedral',
      cite: 'Urth (echoed Bk I)'
    },
    {
      ang: Math.PI / 2 + (3 * Math.PI) / 4,
      label: 'is found by young Severian',
      cite: 'Bk I §1'
    }
  ]
  const cx = 400,
    cy = 290,
    R = 170
  const dotAng = -Math.PI / 2 + (((t % 1) + 1) % 1) * Math.PI * 2

  function ouroborosPath(Rin, thickness) {
    const inner = Rin - thickness / 2
    const outer = Rin + thickness / 2
    return `M ${cx + outer} ${cy}
            A ${outer} ${outer} 0 1 0 ${cx - outer} ${cy}
            A ${outer} ${outer} 0 1 0 ${cx + outer} ${cy} Z
            M ${cx + inner} ${cy}
            A ${inner} ${inner} 0 1 1 ${cx - inner} ${cy}
            A ${inner} ${inner} 0 1 1 ${cx + inner} ${cy} Z`
  }

  return (
    <div style={{ width: '100%' }}>
      <Canvas w={800} h={600}>
        <Hatch id="time-scale" angle={45} gap={3} opacity={0.16} strokeWidth={STROKE_HAIR} />
        <Label x={40} y={32} size={FONT_SMALL}>
          TIME LOOP · THE SERIES IS A CAUSAL CIRCUIT
        </Label>

        <Stipple x={40} y={56} w={720} h={520} n={120} seed={409} opacity={0.18} r={0.5} />

        <path
          d={ouroborosPath(R, 26)}
          fillRule="evenodd"
          fill="url(#time-scale)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />

        {Array.from({ length: 60 }).map((_, i) => {
          const a = (i / 60) * Math.PI * 2
          const r1 = R + 11,
            r2 = R + 4
          return (
            <line
              key={i}
              x1={cx + Math.cos(a) * r2}
              y1={cy + Math.sin(a) * r2}
              x2={cx + Math.cos(a) * r1}
              y2={cy + Math.sin(a) * r1}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_HAIR}
            />
          )
        })}

        {(() => {
          const a = -Math.PI / 2 + 0.06
          const hx = cx + Math.cos(a) * R
          const hy = cy + Math.sin(a) * R
          return (
            <g transform={`translate(${hx} ${hy}) rotate(${(a * 180) / Math.PI + 90})`}>
              <path
                d="M -14 -10 L 0 -16 L 16 -12 L 18 0 L 14 6 L 0 8 L -16 4 Z"
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <circle cx={4} cy={-4} r="2.4" fill={FG} opacity={OPACITY.fg} />
              <circle cx={4} cy={-4} r="0.8" fill="var(--bg)" />
              <line
                x1={-12}
                y1={-6}
                x2={-22}
                y2={-12}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_GUIDE}
              />
              <line
                x1={-12}
                y1={4}
                x2={-22}
                y2={12}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_GUIDE}
              />
            </g>
          )
        })()}

        {(() => {
          const a = -Math.PI / 2 - 0.06
          const tx = cx + Math.cos(a) * R
          const ty = cy + Math.sin(a) * R
          return (
            <g transform={`translate(${tx} ${ty}) rotate(${(a * 180) / Math.PI - 90})`}>
              <polygon
                points="-8 0 0 22 8 0"
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_SECONDARY}
              />
            </g>
          )
        })()}

        {stations.map((s, i) => {
          const x = cx + Math.cos(s.ang) * R
          const y = cy + Math.sin(s.ang) * R
          const lxr = R + 50
          const lx = cx + Math.cos(s.ang) * lxr
          const ly = cy + Math.sin(s.ang) * lxr
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={7}
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <text
                x={x}
                y={y + 3}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                letterSpacing={LS_LABEL}
              >
                {i + 1}
              </text>
              <line
                x1={cx + Math.cos(s.ang) * (R + 12)}
                y1={cy + Math.sin(s.ang) * (R + 12)}
                x2={cx + Math.cos(s.ang) * (lxr - 8)}
                y2={cy + Math.sin(s.ang) * (lxr - 8)}
                stroke={FG}
                strokeOpacity={OPACITY.faint}
                strokeWidth={STROKE_HAIR}
              />
              <text
                x={lx}
                y={ly - 2}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor={lx < cx - 10 ? 'end' : lx > cx + 10 ? 'start' : 'middle'}
                letterSpacing={LS_TIGHT}
              >
                {s.label}
              </text>
              <text
                x={lx}
                y={ly + 12}
                fill={FG}
                fontSize={FONT_SMALL}
                textAnchor={lx < cx - 10 ? 'end' : lx > cx + 10 ? 'start' : 'middle'}
                opacity={OPACITY.dim}
              >
                {s.cite}
              </text>
            </g>
          )
        })}

        <g>
          <circle
            cx={cx + Math.cos(dotAng) * R}
            cy={cy + Math.sin(dotAng) * R}
            r="9"
            fill="none"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <circle
            cx={cx + Math.cos(dotAng) * R}
            cy={cy + Math.sin(dotAng) * R}
            r="3"
            fill={FG}
            opacity={OPACITY.fg}
          />
          {[0.06, 0.12, 0.2, 0.3, 0.45].map((d, k) => (
            <circle
              key={k}
              cx={cx + Math.cos(dotAng - d) * R}
              cy={cy + Math.sin(dotAng - d) * R}
              r={3 - k * 0.5}
              fill={FG}
              opacity={OPACITY.fg * (0.6 - k * 0.1)}
            />
          ))}
        </g>

        <g transform={`translate(${cx} ${cy})`}>
          <Rays
            cx={0}
            cy={0}
            r0={50}
            r1={130}
            count={18}
            opacity={0.18}
            strokeWidth={STROKE_HAIR}
          />
          <rect
            x={-46}
            y={-32}
            width={92}
            height={64}
            fill="var(--bg)"
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <path
            d="M -46 -32 Q -50 -28 -46 -22"
            fill="none"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
          />
          <path
            d="M  46 -32 Q  50 -28  46 -22"
            fill="none"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
          />
          {[-18, -8, 2, 12, 22].map((ly, i) => (
            <line
              key={i}
              x1={-36}
              y1={ly}
              x2={36 - (i === 4 ? 12 : 0)}
              y2={ly}
              stroke={FG}
              strokeOpacity={OPACITY.dim * (1 - i * 0.12)}
              strokeWidth={STROKE_HAIR}
            />
          ))}
          <text
            x={0}
            y={48}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing={LS_TITLE}
          >
            THE MANUSCRIPT
          </text>
          <text
            x={0}
            y={62}
            fill={FG}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            opacity={OPACITY.dim}
          >
            reaches the reader
          </text>
        </g>

        <text
          x={400}
          y={576}
          fill={FG}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          opacity={OPACITY.dim}
          letterSpacing={LS_TITLE}
        >
          CAUSE AND EFFECT OF ITSELF
        </text>
      </Canvas>
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

// Migrated legacy viz (raw-SVG style, theme-token colors)

export function Ch04AscianStructure() {
  const leftItems = [
    { label: 'CORRECT THOUGHT', sub: 'approved phrases only · no new sentences' },
    { label: 'GROUP OF SEVENTEEN', sub: 'ruling council · all speech pays homage' },
    { label: 'SET LOCUTIONS', sub: 'rote formulas compose every utterance' },
    { label: 'GREETINGS FORMULA', sub: '"In the name of the Group of Seventeen"' },
    { label: 'COLLECTIVE VOICE', sub: 'no individual speaker · only the group' }
  ]

  const rightItems = [
    { label: 'CHECKERBOARD SQUARES', sub: 'alternating infantry blocks · advance / retreat' },
    { label: 'ARQUEBUSIERS', sub: 'ranged troops in gaps between squares' },
    { label: 'DWARF + BLIND SWORDSMAN', sub: 'paired cavalry · shotel-armed' },
    { label: 'FUSIL BEARERS', sub: 'energy weapons · more advanced than conti' },
    { label: 'COLLECTIVE ADVANCE', sub: 'no individual charge · coordinated mass' }
  ]

  const colX = 80
  const colW = 260
  const rightX = 460
  const itemH = 52
  const startY = 110

  return (
    <figure role="img" aria-labelledby="ch04-ascian-title" style={figureStyle}>
      <svg viewBox="0 0 800 440" style={svgStyle}>
        <title id="ch04-ascian-title">
          Ascian verbal system versus Ascian military structure: same collectivist logic
        </title>

        <defs>
          <pattern id="grid-ch04-ascian" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeFaint}
              strokeWidth={STROKE_HAIR}
            />
          </pattern>
        </defs>

        <rect width="800" height="440" fill="url(#grid-ch04-ascian)" />

        <text x="30" y="32" fill={textSoft} fontSize={FONT_LABEL} letterSpacing={LS_CONTROL}>
          ASCIAN STRUCTURE · VERBAL SYSTEM VS. MILITARY HIERARCHY
        </text>

        <rect
          x={colX}
          y={58}
          width={colW}
          height={38}
          fill={fillMid}
          stroke={stroke}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={colX + colW / 2}
          y={82}
          fill={text}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          VERBAL SYSTEM
        </text>

        <rect
          x={rightX}
          y={58}
          width={colW}
          height={38}
          fill={fillMid}
          stroke={stroke}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={rightX + colW / 2}
          y={82}
          fill={text}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          MILITARY STRUCTURE
        </text>

        {leftItems.map((item, i) => (
          <g key={i}>
            <rect
              x={colX}
              y={startY + i * (itemH + 6)}
              width={colW}
              height={itemH}
              fill={fill}
              stroke={strokeSoft}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={colX + colW / 2}
              y={startY + i * (itemH + 6) + 18}
              fill={text}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing={LS_LABEL}
            >
              {item.label}
            </text>
            <text
              x={colX + colW / 2}
              y={startY + i * (itemH + 6) + 35}
              fill={textSoft}
              fontSize={FONT_SMALL}
              textAnchor="middle"
            >
              {item.sub}
            </text>
          </g>
        ))}

        {rightItems.map((item, i) => (
          <g key={i}>
            <rect
              x={rightX}
              y={startY + i * (itemH + 6)}
              width={colW}
              height={itemH}
              fill={fill}
              stroke={strokeSoft}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={rightX + colW / 2}
              y={startY + i * (itemH + 6) + 18}
              fill={text}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing={LS_LABEL}
            >
              {item.label}
            </text>
            <text
              x={rightX + colW / 2}
              y={startY + i * (itemH + 6) + 35}
              fill={textSoft}
              fontSize={FONT_SMALL}
              textAnchor="middle"
            >
              {item.sub}
            </text>
          </g>
        ))}

        <rect
          x={350}
          y={58}
          width={100}
          height={leftItems.length * (itemH + 6) + itemH - 6}
          fill={fillSoft}
          stroke={strokeFaint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={400}
          y={58 + (leftItems.length * (itemH + 6)) / 2 - 12}
          fill={textGhost}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_LABEL}
        >
          COLLECTIVIST
        </text>
        <text
          x={400}
          y={58 + (leftItems.length * (itemH + 6)) / 2 + 4}
          fill={textGhost}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_LABEL}
        >
          LOGIC
        </text>
        <text
          x={400}
          y={58 + (leftItems.length * (itemH + 6)) / 2 + 20}
          fill={textGhost}
          fontSize={FONT_SMALL}
          textAnchor="middle"
        >
          governs both
        </text>

        {leftItems.map((_, i) => (
          <line
            key={i}
            x1={colX + colW}
            y1={startY + i * (itemH + 6) + itemH / 2}
            x2={rightX}
            y2={startY + i * (itemH + 6) + itemH / 2}
            stroke={strokeFaint}
            strokeWidth={STROKE_SECONDARY}
            strokeDasharray="3 3"
          />
        ))}

        <text x="30" y="425" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_OPEN}>
          Severian uses the Group of Seventeen formula against the Ascian officer, language as both
          prison and key
        </text>
      </svg>
      <figcaption>
        The same collectivist logic that forbids new sentences also forbids individual soldiers from
        acting alone. Severian turns the verbal system back on its users to broker peace.
      </figcaption>
    </figure>
  )
}

export function Ch04SeverianFearArc() {
  const stages = [
    {
      label: 'ANTICIPATION',
      ch: 'XXI',
      y: 110,
      note: 'Pentadactyl passes · horses scatter',
      quote: 'Fear is like a disease that disfigures the face'
    },
    {
      label: "DARIA'S COUNSEL",
      ch: 'XXI',
      y: 175,
      note: 'She names his fear · "you\'ll do what you have to"',
      quote: 'Severian theorizes; Daria simply acts'
    },
    {
      label: 'FIRST SIGHT OF FORCE',
      ch: 'XXII',
      y: 240,
      note: 'Valley revealed · checkerboard · Daughters of War',
      quote: '"By each step in war the winner loses"'
    },
    {
      label: 'THE CHARGE',
      ch: 'XXII',
      y: 305,
      note: 'Contus cut through · leg wound · square broken',
      quote: '"Numbers tell only in time"'
    },
    {
      label: 'BLIND SWORDSMAN',
      ch: 'XXII',
      y: 355,
      note: 'Shotel-armed pair · intense skirmish',
      quote: 'Individual against one or two others'
    },
    {
      label: 'PINNED',
      ch: 'XXII',
      y: 405,
      note: 'Piebald killed · Severian pinned · unconscious',
      quote: 'Erblon killed · silence'
    }
  ]

  const lineX = 180
  const dotR = 7
  const labelX = 205
  const quoteX = 205

  return (
    <figure role="img" aria-labelledby="ch04-fear-arc-title" style={figureStyle}>
      <svg viewBox="0 0 800 500" style={svgStyle}>
        <title id="ch04-fear-arc-title">Severian's fear arc across sections XXI and XXII</title>

        <defs>
          <pattern id="grid-ch04-fear" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeFaint}
              strokeWidth={STROKE_HAIR}
            />
          </pattern>
        </defs>

        <rect width="800" height="500" fill="url(#grid-ch04-fear)" />

        <text x="30" y="32" fill={textSoft} fontSize={FONT_LABEL} letterSpacing={LS_CONTROL}>
          SEVERIAN'S FEAR ARC · SECTIONS XXI–XXII
        </text>

        <line
          x1={lineX}
          y1={90}
          x2={lineX}
          y2={430}
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
        />

        <rect
          x={30}
          y={100}
          width={55}
          height={110}
          fill={fill}
          stroke={strokeFaint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={57}
          y={148}
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          XXI
        </text>
        <text x={57} y={163} fill={textGhost} fontSize={FONT_SMALL} textAnchor="middle">
          Deployment
        </text>

        <rect
          x={30}
          y={220}
          width={55}
          height={200}
          fill={fill}
          stroke={strokeFaint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={57}
          y={317}
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          XXII
        </text>
        <text x={57} y={332} fill={textGhost} fontSize={FONT_SMALL} textAnchor="middle">
          Battle
        </text>

        {stages.map((s, i) => {
          const isKey = i === 0 || i === 5
          return (
            <g key={i}>
              <circle
                cx={lineX}
                cy={s.y}
                r={dotR}
                fill={isKey ? fillMid : fill}
                stroke={isKey ? stroke : strokeSoft}
                strokeWidth={isKey ? STROKE_EMPHASIS : STROKE_PRIMARY}
              />
              <rect
                x={labelX}
                y={s.y - 22}
                width={200}
                height={20}
                fill={fill}
                stroke={strokeSoft}
                strokeWidth={STROKE_PRIMARY}
              />
              <text
                x={labelX + 100}
                y={s.y - 7}
                fill={text}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                letterSpacing={LS_LABEL}
              >
                {s.label}
              </text>
              <text x={labelX} y={s.y + 8} fill={textSoft} fontSize={FONT_SMALL}>
                {s.note}
              </text>
              <text
                x={quoteX}
                y={s.y + 22}
                fill={textGhost}
                fontSize={FONT_SMALL}
                fontStyle="italic"
              >
                {s.quote}
              </text>
              <line
                x1={lineX + dotR}
                y1={s.y}
                x2={labelX}
                y2={s.y - 12}
                stroke={strokeFaint}
                strokeWidth={STROKE_SECONDARY}
              />
            </g>
          )
        })}

        <rect
          x={30}
          y={435}
          width={720}
          height={36}
          fill={fill}
          stroke={strokeFaint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={400}
          y={450}
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_LABEL}
        >
          Resolution (XXIII): Severian regains consciousness on the silent battlefield.
        </text>
        <text x={400} y={465} fill={textGhost} fontSize={FONT_SMALL} textAnchor="middle">
          Mamillian arrives. The Autarch speaks the code phrase. Fear ends in recognition.
        </text>

        <text x="30" y="492" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_OPEN}>
          sections XXI–XXIII · pp. 25–45
        </text>
      </svg>
      <figcaption>
        Severian moves from theorizing about fear before battle to being pinned unconscious under
        his dead horse. Daria's plain counsel, "you'll do what you have to", proves more useful than
        his philosophy.
      </figcaption>
    </figure>
  )
}

export function Ch05ModuleArc() {
  const sections = [
    { label: 'XXV', sub: "Agia's Mercy", detail: 'flier · pharmacon · anpiels' },
    { label: 'XXVI', sub: 'Above the Jungle', detail: 'ziggurat · leech · imprisoned' },
    { label: 'XXVII', sub: 'Before Vodalus', detail: 'clearing · interrogation · "two in one"' },
    { label: 'XXVIII', sub: 'On the March', detail: 'jungle · uturuncu · Ascian army' },
    { label: 'XXIX', sub: 'Autarch of the Commonwealth', detail: 'dome · ritual · succession' },
    { label: 'XXX', sub: 'Corridors of Time', detail: 'green man · Agia frees · Malrubius' },
    { label: 'XXXI', sub: 'The Sand Garden', detail: 'Ocean · Claw · all is holy' }
  ]

  const boxW = 110
  const boxH = 100
  const boxY = 85
  const gap = 15
  const startX = 25

  return (
    <figure role="img" aria-labelledby="ch05-arc-title" style={figureStyle}>
      <svg viewBox="0 0 870 265" style={svgStyle}>
        <title id="ch05-arc-title">Module 05 section arc: seven subsections XXV through XXXI</title>

        <defs>
          <pattern id="grid-ch05-arc" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeFaint}
              strokeWidth={STROKE_HAIR}
            />
          </pattern>
          <marker
            id="arrow-ch05-arc"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L7,3 L0,6 Z" fill={strokeSoft} />
          </marker>
        </defs>

        <rect width="870" height="265" fill="url(#grid-ch05-arc)" />

        <text x="25" y="32" fill={textSoft} fontSize={FONT_LABEL} letterSpacing={LS_CONTROL}>
          MODULE 05 STRUCTURE · SEVERIAN BECOMES THE AUTARCH
        </text>

        {sections.map((sec, i) => {
          const x = startX + i * (boxW + gap)
          const cx = x + boxW / 2
          const isHinge = i === 0 || i === 4 || i === 6
          return (
            <g key={i}>
              <rect
                x={x}
                y={boxY}
                width={boxW}
                height={boxH}
                fill={isHinge ? fillMid : fill}
                stroke={isHinge ? stroke : strokeSoft}
                strokeWidth={isHinge ? STROKE_EMPHASIS : STROKE_PRIMARY}
              />
              <text
                x={cx}
                y={boxY + 22}
                fill={text}
                fontSize={FONT_TEX}
                textAnchor="middle"
                letterSpacing={LS_CONTROL}
              >
                {sec.label}
              </text>
              <text
                x={cx}
                y={boxY + 42}
                fill={text}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                letterSpacing={LS_LABEL}
              >
                {sec.sub}
              </text>
              <text x={cx} y={boxY + 66} fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
                {sec.detail.split(' · ')[0]}
              </text>
              <text x={cx} y={boxY + 80} fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
                {sec.detail.split(' · ')[1]}
              </text>
              {sec.detail.split(' · ')[2] && (
                <text
                  x={cx}
                  y={boxY + 93}
                  fill={textSoft}
                  fontSize={FONT_SMALL}
                  textAnchor="middle"
                >
                  {sec.detail.split(' · ')[2]}
                </text>
              )}
              {i < sections.length - 1 && (
                <line
                  x1={x + boxW}
                  y1={boxY + boxH / 2}
                  x2={x + boxW + gap - 2}
                  y2={boxY + boxH / 2}
                  stroke={strokeSoft}
                  strokeWidth={STROKE_PRIMARY}
                  markerEnd="url(#arrow-ch05-arc)"
                />
              )}
            </g>
          )
        })}

        <text
          x={startX + boxW / 2}
          y={boxY + boxH + 26}
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          hinge: pharmacon offered
        </text>

        <text
          x={startX + 4 * (boxW + gap) + boxW / 2}
          y={boxY + boxH + 26}
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          hinge: succession complete
        </text>

        <text
          x={startX + 6 * (boxW + gap) + boxW / 2}
          y={boxY + boxH + 26}
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          hinge: all is holy
        </text>

        <text x="25" y="248" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_TITLE}>
          The Citadel of the Autarch · module 05 · sections XXV-XXXI · pp. 1-44
        </text>
      </svg>
      <figcaption>
        The module opens with the Autarch dying in the flier crash, pivots to Severian consuming the
        pharmacon in Section XXIX, and closes with Severian alone on the beach discovering all
        thorns are the Claw.
      </figcaption>
    </figure>
  )
}

export function Ch05TimeCorridor() {
  return (
    <figure role="img" aria-labelledby="ch05-time-title" style={figureStyle}>
      <svg viewBox="0 0 870 290" style={svgStyle}>
        <title id="ch05-time-title">
          The green man travels the corridors of Time to repay Severian for a past act
        </title>

        <defs>
          <pattern id="grid-ch05-time" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeFaint}
              strokeWidth={STROKE_HAIR}
            />
          </pattern>
          <marker
            id="arrow-time-fwd"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L7,3 L0,6 Z" fill={strokeSoft} />
          </marker>
          <marker
            id="arrow-time-back"
            markerWidth="7"
            markerHeight="7"
            refX="2"
            refY="3"
            orient="auto"
          >
            <path d="M7,0 L0,3 L7,6 Z" fill={stroke} />
          </marker>
        </defs>

        <rect width="870" height="290" fill="url(#grid-ch05-time)" />

        <text x="25" y="30" fill={textSoft} fontSize={FONT_LABEL} letterSpacing={LS_CONTROL}>
          THE CORRIDORS OF TIME · DEBT AND REPAYMENT
        </text>

        <line
          x1="80"
          y1="155"
          x2="790"
          y2="155"
          stroke={strokeFaint}
          strokeWidth={STROKE_PRIMARY}
        />
        <text x="80" y="172" fill={textFaint} fontSize={FONT_SMALL} letterSpacing={LS_OPEN}>
          PAST
        </text>
        <text x="755" y="172" fill={textFaint} fontSize={FONT_SMALL} letterSpacing={LS_OPEN}>
          FUTURE
        </text>

        <rect
          x="100"
          y="108"
          width="160"
          height="60"
          fill={fillSoft}
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x="180"
          y="130"
          fill={text}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          BOOK 2 EVENT
        </text>
        <text x="180" y="147" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          Severian frees green man
        </text>
        <text x="180" y="161" fill={textFaint} fontSize={FONT_SMALL} textAnchor="middle">
          gives half-stone · breaks chain
        </text>
        <circle
          cx="180"
          cy="155"
          r="5"
          fill={fill}
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
        />

        <rect
          x="340"
          y="58"
          width="190"
          height="60"
          fill={fillSoft}
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="435"
          y="80"
          fill={textSoft}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          TIME CORRIDOR
        </text>
        <text x="435" y="97" fill={textFaint} fontSize={FONT_SMALL} textAnchor="middle">
          green man traverses corridors
        </text>
        <text x="435" y="111" fill={textFaint} fontSize={FONT_SMALL} textAnchor="middle">
          seeking the moment to repay
        </text>

        <rect
          x="610"
          y="108"
          width="160"
          height="60"
          fill={fillMid}
          stroke={stroke}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x="690"
          y="130"
          fill={text}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing={LS_TITLE}
        >
          SECTION XXX
        </text>
        <text x="690" y="147" fill={text} fontSize={FONT_SMALL} textAnchor="middle">
          green man frees Severian
        </text>
        <text x="690" y="161" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          Ascian camp · debt repaid
        </text>
        <circle
          cx="690"
          cy="155"
          r="5"
          fill={fillMid}
          stroke={stroke}
          strokeWidth={STROKE_EMPHASIS}
        />

        <path
          d="M 260,138 Q 340,60 435,118"
          fill="none"
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
          strokeDasharray="6 4"
          markerEnd="url(#arrow-time-fwd)"
        />

        <path
          d="M 530,118 Q 610,60 690,138"
          fill="none"
          stroke={stroke}
          strokeWidth={STROKE_PRIMARY}
          markerEnd="url(#arrow-time-fwd)"
        />

        <ellipse
          cx="790"
          cy="155"
          rx="14"
          ry="28"
          fill={fill}
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
          strokeDasharray="4 3"
        />
        <text x="790" y="200" fill={textFaint} fontSize={FONT_SMALL} textAnchor="middle">
          aperture
        </text>

        <line
          x1="760"
          y1="155"
          x2="776"
          y2="155"
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
          markerEnd="url(#arrow-time-fwd)"
        />

        <text x="25" y="253" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_LABEL}>
          {`"Now I have repaid you for the mine; you are still alive." Agia quoting the green man's act, p. 40`}
        </text>
        <text x="25" y="270" fill={textFaint} fontSize={FONT_SMALL} letterSpacing={LS_TITLE}>
          The Citadel of the Autarch · module 05 · §XXX pp. 40–41
        </text>
      </svg>
      <figcaption>
        The green man first appeared in Book 2 when Severian freed him from a chain. He has traveled
        the corridors of Time ever since to find the exact moment Severian needed freeing. The debt
        now repaid, he steps through a temporal aperture and vanishes.
      </figcaption>
    </figure>
  )
}

export function Ch06ClawMeditationTree() {
  return (
    <figure className="lrn-figure" style={figureStyle}>
      <svg viewBox="0 0 820 440" style={svgStyle} role="img" aria-labelledby="rttc-ch06-claw-title">
        <title id="rttc-ch06-claw-title">
          The Claw meditation: two competing theories of miracle in Section XXXIV
        </title>

        <defs>
          <pattern id="grid-ch06-claw" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeFaint}
              strokeWidth={STROKE_HAIR}
            />
          </pattern>
        </defs>
        <rect width="820" height="440" fill="url(#grid-ch06-claw)" />

        <text x="20" y="30" fill={textSoft} fontSize={FONT_LABEL} letterSpacing={LS_CONTROL}>
          THE CLAW'S POWER · TWO COMPETING THEORIES · SECTION XXXIV
        </text>

        <rect
          x="270"
          y="50"
          width="280"
          height="48"
          fill={fill}
          stroke={stroke}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x="410"
          y="70"
          fill={text}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          WHERE DOES THE CLAW'S POWER COME FROM?
        </text>
        <text x="410" y="87" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          Severian's extended meditation, §XXXIV, pp. 17-21
        </text>

        <line x1="410" y1="98" x2="200" y2="148" stroke={strokeSoft} strokeWidth={STROKE_PRIMARY} />
        <line x1="410" y1="98" x2="620" y2="148" stroke={strokeSoft} strokeWidth={STROKE_PRIMARY} />

        <rect
          x="60"
          y="148"
          width="280"
          height="52"
          fill={fillSoft}
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x="200"
          y="167"
          fill={text}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          THEORY A: SEVERIAN IS THE SOURCE
        </text>
        <text x="200" y="181" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          The Claw is a suggestion, a symbol
        </text>
        <text x="200" y="193" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          Miracles are his unconscious acts
        </text>

        <rect
          x="480"
          y="148"
          width="280"
          height="52"
          fill={fillSoft}
          stroke={strokeSoft}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x="620"
          y="167"
          fill={text}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          THEORY B: GIFT FROM THE INCREATE
        </text>
        <text x="620" y="181" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          The Claw is a channel, a vessel
        </text>
        <text x="620" y="193" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          Hierodules granted him the power
        </text>

        <line
          x1="200"
          y1="200"
          x2="200"
          y2="240"
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x="60"
          y="240"
          width="280"
          height="100"
          fill={fill}
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="200"
          y="256"
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_LABEL}
        >
          EVIDENCE FOR A
        </text>
        <text x="75" y="272" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - New Claw inert when Severian uses it
        </text>
        <text x="75" y="287" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - Mandragora: "an exercise of your power"
        </text>
        <text x="75" y="302" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - Old Claw reanimated Dorcas before he
        </text>
        <text x="75" y="315" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          {'  knew he carried it (unconscious act)'}
        </text>
        <text x="75" y="330" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - Increate as artist: work contains creator
        </text>

        <line
          x1="620"
          y1="200"
          x2="620"
          y2="240"
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x="480"
          y="240"
          width="280"
          height="100"
          fill={fill}
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x="620"
          y="256"
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_LABEL}
        >
          EVIDENCE FOR B
        </text>
        <text x="495" y="272" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - Stellar judges gifted him the power
        </text>
        <text x="495" y="287" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - Master Malrubius: the bargain was real
        </text>
        <text x="495" y="302" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - Claw healed what Severian could not
        </text>
        <text x="495" y="315" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          {'  consciously choose to heal'}
        </text>
        <text x="495" y="330" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_COMPACT}>
          - New Sun mission requires an external gift
        </text>

        <line
          x1="200"
          y1="340"
          x2="410"
          y2="390"
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        <line
          x1="620"
          y1="340"
          x2="410"
          y2="390"
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        <rect
          x="270"
          y="390"
          width="280"
          height="34"
          fill={fill}
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
        />
        <text x="410" y="407" fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
          Both theories converge on the same conclusion:
        </text>
        <text
          x="410"
          y="420"
          fill={text}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_TIGHT}
        >
          Severian is the axis of the cosmological project
        </text>
      </svg>
      <figcaption>
        Severian reaches no final verdict. Wolfe constructs the meditation so that both theories are
        supported by the text. The fork is structural, not accidental. Either way, Severian carries
        the weight.
      </figcaption>
    </figure>
  )
}

export function Ch06StructureDiagram() {
  const stages = [
    { x: 20, label: 'XXXII', sub: 'The Samru', detail: 'river · Dorcas · craquemarte' },
    { x: 155, label: 'XXXIII', sub: 'The Citadel', detail: 'barbican · Palaemon · oubliette' },
    { x: 290, label: 'XXXIV', sub: 'Key to Universe', detail: 'Claw theory · mandragora · pistol' },
    { x: 425, label: 'XXXV', sub: "Inire's Letter", detail: 'Rudesind · Vodalus dead · Agia' },
    { x: 560, label: 'XXXVI', sub: 'Bad Gold', detail: 'Talos · bad coin · mausoleum' },
    { x: 695, label: 'XXXVII', sub: 'Across River', detail: 'lugger · Ouen · pistol given' },
    { x: 830, label: 'XXXVIII', sub: 'Resurrection', detail: 'manuscript · time loop · Valeria' }
  ]

  const boxW = 120
  const boxH = 105
  const boxY = 75

  return (
    <figure className="lrn-figure" style={figureStyle}>
      <svg
        viewBox="0 0 980 270"
        style={svgStyle}
        role="img"
        aria-labelledby="rttc-ch06-struct-title"
      >
        <title id="rttc-ch06-struct-title">
          Module 06 structure: seven subsections from the Samru to the Atrium of Time
        </title>

        <defs>
          <pattern id="grid-ch06-struct" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeFaint}
              strokeWidth={STROKE_HAIR}
            />
          </pattern>
          <marker
            id="arrow-ch06-struct"
            markerWidth="7"
            markerHeight="7"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L7,3 L0,6 Z" fill={strokeSoft} />
          </marker>
        </defs>
        <rect width="980" height="270" fill="url(#grid-ch06-struct)" />

        <text x="20" y="32" fill={textSoft} fontSize={FONT_LABEL} letterSpacing={LS_CONTROL}>
          MODULE 06 STRUCTURE · RETURN TO THE CITADEL
        </text>

        {stages.map((s, i) => {
          const cx = s.x + boxW / 2
          const isPivot = i === 6
          return (
            <g key={i}>
              <rect
                x={s.x}
                y={boxY}
                width={boxW}
                height={boxH}
                fill={fill}
                stroke={isPivot ? stroke : strokeSoft}
                strokeWidth={isPivot ? STROKE_EMPHASIS : STROKE_PRIMARY}
              />
              <text
                x={cx}
                y={boxY + 22}
                fill={text}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                letterSpacing={LS_CONTROL}
              >
                {s.label}
              </text>
              <text
                x={cx}
                y={boxY + 40}
                fill={text}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                letterSpacing={LS_OPEN}
              >
                {s.sub}
              </text>
              <text x={cx} y={boxY + 65} fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
                {s.detail.split(' · ')[0]}
              </text>
              <text x={cx} y={boxY + 78} fill={textSoft} fontSize={FONT_SMALL} textAnchor="middle">
                {s.detail.split(' · ')[1]}
              </text>
              {s.detail.split(' · ')[2] && (
                <text
                  x={cx}
                  y={boxY + 91}
                  fill={textSoft}
                  fontSize={FONT_SMALL}
                  textAnchor="middle"
                >
                  {s.detail.split(' · ')[2]}
                </text>
              )}
              {i < stages.length - 1 && (
                <line
                  x1={s.x + boxW}
                  y1={boxY + boxH / 2}
                  x2={stages[i + 1].x - 2}
                  y2={boxY + boxH / 2}
                  stroke={strokeSoft}
                  strokeWidth={STROKE_PRIMARY}
                  markerEnd="url(#arrow-ch06-struct)"
                />
              )}
            </g>
          )
        })}

        <text
          x={830 + boxW / 2}
          y={boxY + boxH + 26}
          fill={textSoft}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing={LS_OPEN}
        >
          endpoint: Atrium of Time, Valeria
        </text>

        <line
          x1="850"
          y1={boxY + boxH + 14}
          x2="940"
          y2={boxY + boxH + 14}
          stroke={strokeSoft}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="3 3"
        />

        <text x="20" y="252" fill={textSoft} fontSize={FONT_SMALL} letterSpacing={LS_TITLE}>
          The Citadel of the Autarch · module 06 · sections XXXII-XXXVIII
        </text>
      </svg>
      <figcaption>
        The module is structured as a homecoming circuit. Severian moves outward from the Samru to
        every site of his past, then spirals inward through the Citadel to the Atrium of Time.
      </figcaption>
    </figure>
  )
}
