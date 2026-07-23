import { useState } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { useMathJax } from '../../../../hooks/use-mathjax'
import { VizFigure } from '../../../../components/viz-figure'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_TEX,
  FONT_VALUE
} from '../../../../components/viz/scale-tokens'
import {
  Plot,
  Polyline,
  Dot,
  Tex,
  Slider,
  FG,
  OPACITY
} from '../../../../components/viz/primitives'

// Mathematics domain: Approved engine: hand-rolled monochrome SVG primitives.
// Plots H (harmonic), G (geometric), A (arithmetic) means of two endpoints a, b
// on a single number line. Axis range scales with the (b - a) span so the dots
// never crowd the tick marks. Labels stagger above/below per Mafs Rule 2; the
// inequality summary tracks the line as a caption rather than floating loose.
function Hm_HarmonicMeanInline() {
  const [a, setA] = useState(1.5)
  const [b, setB] = useState(4.5)
  const am = (a + b) / 2
  const gm = Math.sqrt(a * b)
  const hm = (2 * a * b) / (a + b)
  const span = b - a
  // Generous symmetric padding: full plot covers roughly 1.4x the (a,b) span,
  // so the working range stays in the comfortable middle of the canvas.
  const xMin = a - span * 0.2
  const xMax = b + span * 0.2
  const mid = (a + b) / 2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[-1.2, 1.4]} width={620} height={300}>
        {/* main interval line */}
        <Polyline
          points={[
            [a, 0],
            [b, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* endpoint ticks */}
        <Polyline
          points={[
            [a, -0.18],
            [a, 0.18]
          ]}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [b, -0.18],
            [b, 0.18]
          ]}
          opacity={OPACITY.fg}
        />
        {/* midpoint hair tick: anchors the eye to the symmetric center */}
        <Polyline
          points={[
            [mid, -0.08],
            [mid, 0.08]
          ]}
          opacity={OPACITY.hair}
        />
        <Tex
          at={[a, -0.4]}
          tex={`a=${a.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[b, -0.4]}
          tex={`b=${b.toFixed(1)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        {/* H: harmonic, label below with connector */}
        <Polyline
          points={[
            [hm, 0],
            [hm, -0.55]
          ]}
          opacity={OPACITY.hair}
        />
        <Dot x={hm} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[hm, -0.78]}
          tex={`H=${hm.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        {/* G: geometric, label above (close), accent opacity */}
        <Polyline
          points={[
            [gm, 0],
            [gm, 0.4]
          ]}
          opacity={OPACITY.hair}
        />
        <Dot x={gm} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[gm, 0.58]}
          tex={`G=${gm.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        {/* A: arithmetic, label further above to avoid colliding with G */}
        <Polyline
          points={[
            [am, 0],
            [am, 0.95]
          ]}
          opacity={OPACITY.hair}
        />
        <Dot x={am} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[am, 1.13]}
          tex={`A=${am.toFixed(2)}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        {/* inequality summary: pulled close to line as a caption */}
        <Tex
          at={[(xMin + xMax) / 2, -1.05]}
          tex={`H \\le G \\le A`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={0.5}
        max={4}
        step={0.1}
        onChange={setA}
        format={v => v.toFixed(2)}
      />
      <Slider
        label="b"
        value={b}
        min={0.5}
        max={8}
        step={0.1}
        onChange={setB}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

// Mathematics domain: Approved engine: hand-rolled monochrome SVG primitives.
// Cucumber paradox: 100 kg of cucumbers at 99% water carry 1 kg of dry solids.
// Dry the batch to 98% water and the solids are now 2% of the new total -
// so the new mass must halve to 50 kg. The bars show both states side-by-side
// with the dry-mass band tied by leader lines to a single shared annotation,
// making the conserved quantity visible across the transformation.
function Cuc_CucumberInline() {
  const [waterPct, setW] = useState(98)
  // Integer math from the start: avoids 1.0000000000000009 float dust.
  const initialMass = 100
  const initialWater = 99
  const dryMass = initialMass - initialWater
  // newMass = dryMass / (1 - waterPct/100); waterPct < 100 always by slider clamp.
  const newMass = dryMass / (1 - waterPct / 100)
  const newWater = newMass - dryMass

  const BAR_W = 110
  const H0 = 180
  const scale = H0 / initialMass
  const X_BEFORE = 80
  const X_AFTER = 330
  const Y_TOP = 30
  const Y_BOT = Y_TOP + H0

  // Bars share a common BOTTOM (Y_BOT) so they read as "settled" jars.
  // Dry sinks; water floats on top. AFTER bar is shorter because mass is less.
  const beforeWaterH = initialWater * scale // 178.2 of 180
  const beforeDryH = dryMass * scale // 1.8
  const afterTop = Y_BOT - newMass * scale
  const afterWaterH = newWater * scale
  const afterDryH = dryMass * scale // identical to beforeDryH: that's the point.

  // Dry band y-coords (dry sits at bottom of each bar, just above Y_BOT).
  const beforeDryTop = Y_BOT - beforeDryH
  const afterDryTop = Y_BOT - afterDryH

  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 520 270" width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          {/* BEFORE: full-height jar */}
          <g>
            {/* water fill (top) */}
            <rect
              x={X_BEFORE}
              y={Y_TOP}
              width={BAR_W}
              height={beforeWaterH}
              fill={FG}
              fillOpacity={0.38}
            />
            {/* dry fill (bottom, brighter so the 1.8px band is visible) */}
            <rect
              x={X_BEFORE}
              y={beforeDryTop}
              width={BAR_W}
              height={beforeDryH}
              fill={FG}
              fillOpacity={0.95}
            />
            {/* jar outline */}
            <rect
              x={X_BEFORE}
              y={Y_TOP}
              width={BAR_W}
              height={H0}
              fill="none"
              stroke={FG}
              strokeWidth={1.5}
              opacity={OPACITY.fg}
            />
            {/* in-bar water % label */}
            <text
              x={X_BEFORE + BAR_W / 2}
              y={Y_TOP + beforeWaterH / 2 + 4}
              textAnchor="middle"
              fontSize={FONT_LABEL}
              opacity={OPACITY.fg}
            >
              99% water
            </text>
            <text
              x={X_BEFORE + BAR_W / 2}
              y={Y_TOP - 10}
              textAnchor="middle"
              fontSize={FONT_LABEL}
              opacity={OPACITY.accent}
              letterSpacing="0.12em"
            >
              BEFORE
            </text>
            <text
              x={X_BEFORE + BAR_W / 2}
              y={Y_BOT + 18}
              textAnchor="middle"
              fontSize={FONT_TEX}
              opacity={OPACITY.fg}
            >
              100 kg
            </text>
          </g>

          {/* shrink arrow centered on the AFTER bar top */}
          <text
            x={(X_BEFORE + BAR_W + X_AFTER) / 2}
            y={(Y_TOP + afterTop) / 2 + 6}
            textAnchor="middle"
            fontSize={FONT_VALUE}
            opacity={OPACITY.dim}
          >
            →
          </text>

          {/* AFTER: shorter jar, same bottom, same dry band */}
          <g>
            <rect
              x={X_AFTER}
              y={afterTop}
              width={BAR_W}
              height={afterWaterH}
              fill={FG}
              fillOpacity={0.38}
            />
            <rect
              x={X_AFTER}
              y={afterDryTop}
              width={BAR_W}
              height={afterDryH}
              fill={FG}
              fillOpacity={0.95}
            />
            <rect
              x={X_AFTER}
              y={afterTop}
              width={BAR_W}
              height={newMass * scale}
              fill="none"
              stroke={FG}
              strokeWidth={1.5}
              opacity={OPACITY.fg}
            />
            <text
              x={X_AFTER + BAR_W / 2}
              y={afterTop + afterWaterH / 2 + 4}
              textAnchor="middle"
              fontSize={FONT_LABEL}
              opacity={OPACITY.fg}
            >
              {`${waterPct.toFixed(1)}% water`}
            </text>
            <text
              x={X_AFTER + BAR_W / 2}
              y={afterTop - 10}
              textAnchor="middle"
              fontSize={FONT_LABEL}
              opacity={OPACITY.accent}
              letterSpacing="0.12em"
            >
              AFTER
            </text>
            <text
              x={X_AFTER + BAR_W / 2}
              y={Y_BOT + 18}
              textAnchor="middle"
              fontSize={FONT_TEX}
              opacity={OPACITY.fg}
            >
              {`${newMass.toFixed(1)} kg`}
            </text>
          </g>

          {/* Single footer line. Conservation is read directly off the labels:
              100 kg × 1% = 50 kg × 2% = 1 kg. No leaders required. */}
          <text
            x={(X_BEFORE + BAR_W / 2 + X_AFTER + BAR_W / 2) / 2}
            y={Y_BOT + 48}
            textAnchor="middle"
            fontSize={FONT_LABEL}
            opacity={OPACITY.dim}
            letterSpacing="0.1em"
          >
            {`100 KG · 1% = ${newMass.toFixed(1)} KG · ${(100 - waterPct).toFixed(1)}% = ${dryMass} KG DRY MASS`}
          </text>
        </g>
      </svg>
      <Slider
        label="water %"
        value={waterPct}
        min={50}
        max={98.9}
        step={0.1}
        onChange={setW}
        format={v => v.toFixed(1) + '%'}
      />
    </div>
  )
}

// Mathematics: Approved engine: hand-rolled monochrome SVG primitives.
// Honest content: the equality wine-in-tea = tea-in-wine is computed from
// conservation of volume, then drawn as two columns whose guest bands share
// the exact same y position so the eye sees the equality directly.
function Wt_WineTeaInline() {
  const C = useVizColors()
  const [V, setV] = useState(120)
  const [s, setS] = useState(20)
  const sClamped = Math.min(s, Math.floor(V / 2))
  const guest = (sClamped * V) / (V + sClamped)

  const W = 1000
  const H = 460
  const padX = 110
  const padTop = 60
  const padBot = 130
  const colGap = 110
  const colW = (W - 2 * padX - colGap) / 2
  const colH = H - padTop - padBot
  const xLeft = padX
  const xRight = padX + colW + colGap
  const guestPx = colH * (guest / V)
  const yGuestTop = padTop
  const yGuestBot = padTop + guestPx
  const yHost = yGuestBot
  const yHostBot = padTop + colH

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        padding: '12px 16px',
        boxSizing: 'border-box',
        color: C.fg,
        fontFamily: 'var(--reader-font-family)'
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', flex: 1, minHeight: 0, display: 'block' }}
        aria-label={`Two glasses after the exchange. Each column shows the same guest-liquid band at the top: tea-in-wine = wine-in-tea = ${guest.toFixed(2)} cc.`}
      >
        <g>
          <rect
            x={xLeft}
            y={yHost}
            width={colW}
            height={yHostBot - yHost}
            fill={C.fg}
            fillOpacity={0.5}
          />
          <rect
            x={xLeft}
            y={yGuestTop}
            width={colW}
            height={guestPx}
            fill={C.fg}
            fillOpacity={0.14}
          />
          <rect
            x={xLeft}
            y={padTop}
            width={colW}
            height={colH}
            fill="none"
            stroke={C.fg}
            strokeWidth={2}
          />
          <text
            x={xLeft + colW / 2}
            y={(yHost + yHostBot) / 2 + 6}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_VALUE}
            letterSpacing="0.18em"
          >
            WINE
          </text>
          <text
            x={xLeft + colW / 2}
            y={padTop - 22}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_BODY}
            letterSpacing="0.22em"
          >
            WINE GLASS
          </text>
          <text
            x={xLeft + colW / 2}
            y={H - padBot + 38}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_BODY}
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {`tea = ${guest.toFixed(2)}`}
          </text>
        </g>

        <g>
          <rect
            x={xRight}
            y={yHost}
            width={colW}
            height={yHostBot - yHost}
            fill={C.fg}
            fillOpacity={0.5}
          />
          <rect
            x={xRight}
            y={yGuestTop}
            width={colW}
            height={guestPx}
            fill={C.fg}
            fillOpacity={0.14}
          />
          <rect
            x={xRight}
            y={padTop}
            width={colW}
            height={colH}
            fill="none"
            stroke={C.fg}
            strokeWidth={2}
          />
          <text
            x={xRight + colW / 2}
            y={(yHost + yHostBot) / 2 + 6}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_VALUE}
            letterSpacing="0.18em"
          >
            TEA
          </text>
          <text
            x={xRight + colW / 2}
            y={padTop - 22}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_BODY}
            letterSpacing="0.22em"
          >
            TEA GLASS
          </text>
          <text
            x={xRight + colW / 2}
            y={H - padBot + 38}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_BODY}
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {`wine = ${guest.toFixed(2)}`}
          </text>
        </g>

        <line
          x1={xLeft + colW}
          y1={yGuestTop}
          x2={xRight}
          y2={yGuestTop}
          stroke={C.dim}
          strokeWidth={1.25}
          strokeDasharray="4 5"
        />
        <line
          x1={xLeft + colW}
          y1={yGuestBot}
          x2={xRight}
          y2={yGuestBot}
          stroke={C.dim}
          strokeWidth={1.25}
          strokeDasharray="4 5"
        />
        <g>
          <line
            x1={(xLeft + colW + xRight) / 2}
            y1={yGuestTop}
            x2={(xLeft + colW + xRight) / 2}
            y2={yGuestBot}
            stroke={C.fg}
            strokeWidth={2}
          />
          <line
            x1={(xLeft + colW + xRight) / 2 - 7}
            y1={yGuestTop}
            x2={(xLeft + colW + xRight) / 2 + 7}
            y2={yGuestTop}
            stroke={C.fg}
            strokeWidth={2}
          />
          <line
            x1={(xLeft + colW + xRight) / 2 - 7}
            y1={yGuestBot}
            x2={(xLeft + colW + xRight) / 2 + 7}
            y2={yGuestBot}
            stroke={C.fg}
            strokeWidth={2}
          />
          <text
            x={(xLeft + colW + xRight) / 2}
            y={(yGuestTop + yGuestBot) / 2 + 5}
            textAnchor="middle"
            fill={C.fg}
            fontSize={FONT_VALUE}
            dx={18}
            style={{ fontFamily: 'var(--reader-font-family)' }}
          >
            =
          </text>
        </g>

        <text
          x={W / 2}
          y={H - 24}
          textAnchor="middle"
          fill={C.dim}
          fontSize={FONT_CONTROL}
          letterSpacing="0.18em"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {`WINE IN TEA  =  TEA IN WINE  =  ${guest.toFixed(2)}  CC`}
        </text>
      </svg>

      <Slider
        label="bottle V"
        value={V}
        min={60}
        max={200}
        step={1}
        onChange={setV}
        format={v => String(v)}
      />
      <Slider
        label="spoon s"
        value={s}
        min={1}
        max={50}
        step={1}
        onChange={setS}
        format={() => String(sClamped)}
      />
    </div>
  )
}

function useConfig() {
  useMathJax([])
  const C = useVizColors()
  const config = {
    cssPrefix: 'frc',
    documentTitle: 'Fraction Advanced Topics - AETHER',
    learning: {
      category: 'Part 2',
      title: 'Fraction Advanced Topics',
      subtitle: 'Harmonic mean, paradoxes, and the big picture of fraction teaching.',
      sections: [
        /* HARMONIC MEAN */
        <>
          <h2>Harmonic Mean and Average Speed</h2>
          <p>
            You drive to a town and back at two different speeds. You already know average speed is
            total distance over total time. You spend more time at the slower speed, so the true
            average falls below the simple midpoint. For two equal-distance legs, this quantity has
            a name: the <strong>harmonic mean</strong>.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>Paul rides to a town at 15 mph and back at 18 mph. Is his average speed 16.5 mph?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`No. Average speed = $\\frac{180}{11} = 16\\frac{4}{11}$ mph. The harmonic mean is always less than the arithmetic mean.`}</p>
            </details>
          </div>

          <h3>Round Trip Problem</h3>
          <p>{`Paul rides 15 mph out and 18 mph back. Distance each way: $D$.`}</p>
          <p>{`Total distance: $2D$. Total time: $\\frac{D}{15} + \\frac{D}{18}$.`}</p>
          <p>{`Divide the top and bottom by $D$. Every term has a $D$, so it cancels:`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Average speed} = \\frac{2D}{\\frac{D}{15} + \\frac{D}{18}} = \\frac{2}{\\frac{1}{15} + \\frac{1}{18}}$$`}</div>
          <p>
            This is the <strong>harmonic mean</strong> of 15 and 18.
          </p>
          <p>
            The harmonic mean of two numbers is what you get when you average their reciprocals and
            flip the result. It is the right average speed for two equal-distance legs at speeds{' '}
            {`$a$ and $b$:`}
          </p>
          <div className="lrn-eq">{`$$H = \\frac{2}{\\frac{1}{a} + \\frac{1}{b}} = \\frac{2ab}{a+b}$$`}</div>
          <p>{`Computing for 15 and 18, first add the reciprocals over a common denominator: $\\frac{1}{15} + \\frac{1}{18} = \\frac{6}{90} + \\frac{5}{90} = \\frac{11}{90}$.`}</p>
          <p>{`Average speed = $\\frac{2}{\\frac{11}{90}} = \\frac{180}{11} = 16\\frac{4}{11}$ mph.`}</p>
          <p>{`This is less than the arithmetic mean $\\frac{15 + 18}{2} = 16.5$. The harmonic mean always sits below it. The extra time at the slower speed drags the true average down. It counts the slow speed more because you spend more time at it.`}</p>
          <p>{`There is a third average in between. The geometric mean is the square root of the two numbers multiplied: $G = \\sqrt{ab}$. For any two positive numbers the three line up as $H \\le G \\le A$. All three are equal only when the two numbers match.`}</p>
          <p>{`The distance $D$ canceled above. So the harmonic mean depends only on the two speeds, never on how far you go.`}</p>

          <VizFigure title="Harmonic Mean" size="body" aspect="16/9">
            <Hm_HarmonicMeanInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $D$ cancel, making the harmonic mean independent of distance?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Total distance ($2D$) and total time ($D/v_1 + D/v_2$) are both proportional to $D$. Their ratio eliminates $D$.`}</p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Average Speed (Correct)</span>
              <p>Total distance / total time. Harmonic mean for equal distances.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arithmetic Mean (Wrong)</span>
              <p>{`$(v_1 + v_2)/2$. Only correct for equal TIME at each speed.`}</p>
            </div>
          </div>

          <h3>Speed and Time</h3>
          <p>A related idea: what happens when a single speed changes?</p>
          <p>{`A train travels at speed $s$ and takes time $I$ for the trip ($I$ stands for the time). Increase the speed by $\\frac{1}{3}$, so the new speed is $\\frac{4}{3}s$. The distance is fixed, and distance = speed × time. So if speed grows to $\\frac{4}{3}$ of its old value, time must shrink to $\\frac{3}{4}$ of its old value. The new time is $\\frac{3}{4}I$, and you save exactly 25% of the trip.`}</p>
          <p>{`The same steps give a general rule. Speed up by $\\frac{1}{n}$, so the new speed is $\\frac{n+1}{n}s$. Time shrinks the inverse way, to $\\frac{n}{n+1}I$. So the time saved is $I - \\frac{n}{n+1}I = \\frac{1}{n+1}I$.`}</p>
          <p>{`Check it with $n = 2$, a 50% speed-up: time drops by $\\frac{1}{3}$, or about 33%.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why can you factor out $I$ even when you do not know its value?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$I - \\frac{3}{4}I = (1 - \\frac{3}{4})I = \\frac{1}{4}I$. The distributive law works for any $I$.`}</p>
            </details>
          </div>
        </>,

        /* CUCUMBER PARADOX */
        <>
          <h2>The Cucumber Paradox</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              300 lbs of cucumbers are 99% water. After drying to 98% water, how much do they weigh?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>150 lbs. A 1% change in water content caused a 50% weight drop.</p>
            </details>
          </div>

          <p>
            The solids are the dry part that is not water. Drying removes water only, so the dry
            solids never change. They stay fixed at 1% of 300 = 3 lbs the whole time.
          </p>
          <p>
            At 99% water the solids are 1% of the total. At 98% water they are 2% of the total. The
            solid share doubled. For the same 3 lbs of solids, the total weight must halve.
          </p>
          <p>After drying, solids are 2% of the new weight $w$, so:</p>
          <div className="lrn-eq">{`$$3 = \\frac{2}{100} \\times w, \\quad w = 3 \\times 50 = 150 \\text{ lbs}$$`}</div>

          <VizFigure title="Cucumber Paradox" size="body" aspect="auto">
            <Cuc_CucumberInline />
          </VizFigure>
        </>,

        /* WINE AND TEA */
        <>
          <h2>The Wine and Tea Exchange</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A spoon of tea goes into wine, the mix is stirred, a spoon goes back. More tea in wine
              or wine in tea?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Exactly equal, whether stirred or not.</p>
            </details>
          </div>

          <p>
            A bottle of wine and a kettle of tea. A spoon of tea goes into the wine. The mix is
            stirred. A spoon returns to the kettle.
          </p>
          <p>
            <strong>Answer:</strong> Tea in wine = wine in tea. Always.
          </p>

          <p>{`Let $b$ = bottle volume and $s$ = spoon volume.`}</p>
          <p>
            <strong>Stirred case:</strong>
            {` Start with $b$ cc of wine. Drop in the $s$ cc tea spoon and stir. The bottle now holds $b + s$ cc, and the wine share is $\\frac{b}{b+s}$. Scoop $s$ cc back out. That scoop carries wine equal to its volume times the wine share:`}
          </p>
          <div className="lrn-eq">{`$$\\text{Wine to kettle} = s \\times \\frac{b}{b+s} = \\frac{bs}{b+s}.$$`}</div>
          <p>{`Try $b = 100$, $s = 20$: wine to kettle = $\\frac{100 \\times 20}{120} = 16\\frac{2}{3}$ cc. The tea left in the bottle is $s$ minus the tea scooped back, which also comes to $\\frac{bs}{b+s}$. Equal.`}</p>
          <p>
            <strong>Unstirred case:</strong>
            {` Return spoon has $T$ cc tea and $W$ cc wine ($T + W = s$). Wine in kettle = $W$. Tea in bottle = $s - T = W$. Still equal.`}
          </p>

          <VizFigure title="Wine and Tea Exchange" size="body" aspect="16/9">
            <Wt_WineTeaInline />
          </VizFigure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Each container ends with the same total liquid it started with. So any liquid that
              comes in must push out the same amount of the old liquid. That is why the amounts
              exchanged are always equal, stirred or not.
            </p>
          </div>
        </>,

        /* ON TEACHING FRACTIONS */
        <>
          <h2>The Big Picture</h2>
          <p>Four major problems in traditional fraction instruction:</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What goes wrong when you introduce fractions as &ldquo;parts of a pizza&rdquo;?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No clear definition. Cannot handle fractions greater than 1. Cannot define
                multiplication. Creates confusion.
              </p>
            </details>
          </div>

          <ol className="lrn-list">
            <li>
              <strong>Unclear definitions.</strong> Textbooks never clearly define fraction,
              decimal, percent, and ratio. Without clear definitions, you cannot reason precisely.
            </li>
            <li>
              <strong>Too many "meanings."</strong>
              {` Textbooks give $\\frac{c}{d}$ five different meanings. These are parts of a whole, portion, quotient, ratio, and scaling tool. No single meaning covers everything, so students juggle five at once. This creates confusion.`}
            </li>
            <li>
              <strong>Rules without reasons.</strong> Textbooks state the rules of fraction
              arithmetic without showing where they come from.
            </li>
            <li>
              <strong>No proofs.</strong> Textbooks hand down &ldquo;invert and multiply&rdquo; as a
              rule with no justification.
            </li>
          </ol>
          <p>
            The number line definition you met at the start of this fraction strand fixes all four.
            It gives one clear meaning, and you can prove every rule from it.
          </p>

          <h3>On Division</h3>
          <p>{`Take "invert and multiply." Teachers hand it to students as a rule. But the fraction operations you already learned prove it as a theorem. For example, $\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times 4 = 2$, and you can check it: $2 \\times \\frac{1}{4} = \\frac{1}{2}$. The new lens here is simple: a rule you memorize and a rule you can prove are not the same thing.`}</p>
        </>
      ]
    },

    practice: [
      {
        q: 'Paul rides at 15 mph out, 18 mph back. Average speed?',
        a: '$\\frac{180}{11} = 16\\frac{4}{11}$ mph. Harmonic mean: $\\frac{2}{\\frac{1}{15} + \\frac{1}{18}} = \\frac{2}{\\frac{11}{90}} = \\frac{180}{11}$.'
      },
      {
        q: 'Why is average speed NOT $\\frac{v_1 + v_2}{2}$?',
        a: 'Average speed = total distance ÷ total time, not arithmetic mean. You spend more time at the slower speed. The arithmetic mean is only correct for equal time at each speed.'
      },
      {
        q: 'A train increases speed by $\\frac{1}{3}$. By what percent is time shortened?',
        a: '25%. New speed $= \\frac{4s}{3}$. New time $= \\frac{3}{4}I$. Saved $= \\frac{1}{4}I = 25\\%$. Works for any distance.'
      },
      {
        q: 'Cucumbers weigh 300 lbs at 99% water. After drying to 98%, weight?',
        a: '150 lbs. Solids = 3 lbs. At 98% water, solids = 2%. So $3 = \\frac{2}{100} \\times w$. $w = 150$.'
      },
      {
        q: 'Wine-tea exchange: more tea in wine or wine in tea?',
        a: 'Exactly equal. Even unstirred. Return spoon has $T$ tea $+ W$ wine $(T+W=s)$. Wine in kettle $= W$. Tea in bottle $= s - T = W$.'
      },
      {
        q: "If you increase a car's speed by 50%, by what percent does time decrease?",
        a: '$33\\frac{1}{3}\\%$. New speed $= 1.5s$. New time $= \\frac{2}{3}$ of original. Saved: $\\frac{1}{3}$.'
      },
      {
        q: 'You drive 90 miles at 60 mph, then 90 at 45 mph. Average speed?',
        a: '$51\\frac{3}{7}$ mph. Total = 180 mi. Time $= \\frac{3}{2} + 2 = \\frac{7}{2}$ hr. Avg $= \\frac{180}{\\frac{7}{2}} = \\frac{360}{7}$.'
      },
      {
        q: 'Sam drives 73 miles A to B at 60 mph, back at 70. Average speed?',
        a: '$64\\frac{8}{13}$ mph. $\\frac{2}{\\frac{1}{60} + \\frac{1}{70}} = \\frac{2}{\\frac{13}{420}} = \\frac{840}{13}$.'
      },
      {
        q: 'Why does a 1% change in water (99% to 98%) cause 50% weight loss?',
        a: 'Solids go from 1% to 2% of total. That doubles the solid percentage. For 3 lbs of solids, total must halve from 300 to 150.'
      },
      {
        q: 'Why does the unstirred wine-tea case give the same answer?',
        a: 'Return spoon: $T$ cc tea $+ W$ cc wine $(T+W=s)$. Wine in kettle $= W$. Tea in bottle $= s - T = W$. Equal regardless.'
      },
      {
        q: 'What are the four problems with traditional fraction teaching?',
        a: 'Unclear definitions, too many "meanings," rules without reasons, no proofs. The number line fixes all four.'
      },
      {
        q: 'Predict: What happens to harmonic mean if one speed is much larger than the other?',
        a: 'It approaches twice the slower speed. Most time is spent going slow.'
      },
      {
        q: 'Why does distance $D$ cancel in the harmonic mean formula?',
        a: 'Total distance $(2D)$ and total time $\\left(\\frac{D}{v_1} + \\frac{D}{v_2}\\right)$ are both proportional to $D$. The ratio eliminates $D$.'
      },
      {
        q: '200 lbs of mushrooms are 90% water. After drying to 80% water, what do they weigh?',
        a: '100 lbs. The dry solids stay fixed: 10% of 200 = 20 lbs. After drying, solids are 20% of the new weight. So $20 = \\frac{20}{100} \\times w$, which gives $w = 100$ lbs.'
      },
      {
        q: 'A bottle holds 100 cc of wine. You add a 20 cc spoon of tea, stir, then scoop 20 cc back. How much wine moves to the kettle?',
        a: '$\\frac{100 \\times 20}{120} = \\frac{2000}{120} = 16\\frac{2}{3}$ cc. After adding tea the bottle holds 120 cc, and $\\frac{100}{120}$ of it is wine. The scoop carries that same wine fraction. The tea left behind in the bottle equals this exactly.'
      },
      {
        q: 'You drive to a friend at 40 mph and return along the same road at 60 mph. What is your average speed?',
        a: '48 mph. Equal distances, so use the harmonic mean: $H = \\frac{2ab}{a+b} = \\frac{2 \\times 40 \\times 60}{40 + 60} = \\frac{4800}{100} = 48$. This sits below the arithmetic mean of 50, because you spend more time at 40 mph.'
      },
      {
        q: 'A train speeds up by $\\frac{1}{4}$ ($n = 4$). By what fraction does the trip time drop?',
        a: '$\\frac{1}{5}$. The new speed is $\\frac{5}{4}s$. Distance is fixed, so the new time is $\\frac{4}{5}I$. Time saved $= I - \\frac{4}{5}I = \\frac{1}{5}I$. This matches the rule: speed up by $\\frac{1}{n}$, time drops by $\\frac{1}{n+1}$.'
      },
      {
        q: 'A sack of rice weighs $4\\frac{2}{3}$ times 5 books. Each book is $1\\frac{1}{2}$ lbs. Sack weight?',
        a: '35 lbs. 5 books $= \\frac{15}{2}$ lbs. Sack $= \\frac{14}{3} \\times \\frac{15}{2} = \\frac{210}{6} = 35$.'
      },
      {
        q: 'Simplify $\\left(2\\frac{2}{3}\\right)^2 \\times \\left(4\\frac{1}{8}\\right)^2$ without a calculator.',
        a: '$\\left(\\frac{8}{3}\\right)^2 \\times \\left(\\frac{33}{8}\\right)^2 = \\frac{64}{9} \\times \\frac{1089}{64} = \\frac{1089}{9} = 121$. The 64s cancel.'
      },
      {
        q: 'Find $q$ so that $28\\frac{1}{2} = q \\times 5\\frac{3}{4}$.',
        a: '$q = \\frac{\\frac{57}{2}}{\\frac{23}{4}} = \\frac{57}{2} \\times \\frac{4}{23} = \\frac{228}{46} = \\frac{114}{23} = 4\\frac{22}{23}$.'
      },
      {
        q: 'Mr. Dennis took students to a play. Only $\\frac{2}{5}$ showed up: 52 students. Total?',
        a: '130. $\\frac{2}{5} \\times \\text{total} = 52$. Total $= 52 \\times \\frac{5}{2} = 130$.'
      },
      {
        q: 'What is $\\frac{2}{3}$ of 15 people?',
        a: '10. $\\frac{2}{3} \\times 15 = \\frac{30}{3} = 10$. Divide 15 into 3 groups (5 each), take 2 = 10.'
      },
      {
        q: 'A rectangle has area $\\frac{7}{8}$ and one side $\\frac{1}{3}$. Other side?',
        a: '$\\frac{21}{8} = 2\\frac{5}{8}$. Side $= \\frac{\\frac{7}{8}}{\\frac{1}{3}} = \\frac{7}{8} \\times 3 = \\frac{21}{8}$.'
      },
      {
        q: 'A water tank is $\\frac{19}{23}$ full with 271 gallons. Full capacity?',
        a: '$\\frac{271}{\\frac{19}{23}} = 271 \\times \\frac{23}{19} = \\frac{6233}{19} = 328\\frac{1}{19}$ gallons.'
      },
      {
        q: 'Explain why dividing by $\\frac{1}{2}$ doubles but dividing by 2 halves.',
        a: 'Dividing by $\\frac{1}{2}$: how many $\\frac{1}{2}$s fit? In 5, there are 10. Invert-and-multiply: dividing by $\\frac{k}{l}$ = multiplying by $\\frac{l}{k}$. For $\\frac{1}{2}$: multiply by 2.'
      },
      {
        q: 'Find the harmonic mean of 20 and 30 using $H = \\frac{2ab}{a+b}$.',
        a: '24. $H = \\frac{2 \\times 20 \\times 30}{20 + 30} = \\frac{1200}{50} = 24$. This sits below the arithmetic mean 25, as it always does.'
      },
      {
        q: '$\\frac{7}{18} \\times 3\\frac{1}{6} = ?$',
        a: '$\\frac{7}{18} \\times \\frac{19}{6} = \\frac{133}{108} = 1\\frac{25}{108}$.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fraction Advanced Topics',
      sections: [
        <>
          <h2>Speed and Harmonic Mean</h2>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Harmonic mean: } \\bar{v} = \\frac{2}{\\frac{1}{v_1} + \\frac{1}{v_2}}$$`}</div>
          <p>Use for average speed over equal distances at different speeds.</p>
          <p>
            <strong>Speed increase rule:</strong>
            {` Speed up by $\\frac{1}{n}$ means time down by $\\frac{1}{n+1}$.`}
          </p>
          <div className="lrn-eq">{`$$\\text{Constant speed: } D = Tv, \\quad T = D/v$$`}</div>
        </>,
        <>
          <h2>Key Theorems</h2>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Equivalent Fractions</span>
              <p className="lrn-step-content">{`$k/\\ell = nk/n\\ell$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Cross-Multiplication</span>
              <p className="lrn-step-content">{`$k/\\ell < m/n$ iff $kn < \\ell m$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Addition</span>
              <p className="lrn-step-content">{`$k/\\ell + m/n = (kn + \\ell m)/\\ell n$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Product</span>
              <p className="lrn-step-content">{`$(m/n)(k/\\ell) = mk/n\\ell$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Uniqueness Lemma</span>
              <p className="lrn-step-content">{`Unique $C$ with $A = CB$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Multiplication = "Of"</span>
              <p className="lrn-step-content">{`$(m/n)(k/\\ell) = m/n$ of $k/\\ell$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Invert-and-Multiply</span>
              <p className="lrn-step-content">{`$(m/n)/(k/\\ell) = (m/n)(\\ell/k)$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Finite Decimal Test</span>
              <p className="lrn-step-content">{`Finite iff $n = 2^a 5^b$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Ratio Theorem</span>
              <p className="lrn-step-content">{`$a:b$ implies $M = au$, $N = bu$`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Harmonic Mean</span>
              <p className="lrn-step-content">{`$\\frac{2}{\\frac{1}{v_1} + \\frac{1}{v_2}}$`}</p>
            </div>
          </div>
        </>,
        <>
          <h2>Common Errors</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Error</span>
              <ul className="lrn-list">
                <li>Average speed = (v1 + v2)/2</li>
                <li>Percent is an &ldquo;operator&rdquo;</li>
                <li>Adding tops and bottoms</li>
                <li>Division = repeated subtraction</li>
              </ul>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Why It Fails</span>
              <ul className="lrn-list">
                <li>Must use total distance / total time</li>
                <li>Percent is a number ({`$\\frac{N}{100}$`})</li>
                <li>Gives the mediant (top plus top over bottom plus bottom), not the sum</li>
                <li>Gives a pair, not one number</li>
              </ul>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function FractionAdvancedTopics() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
