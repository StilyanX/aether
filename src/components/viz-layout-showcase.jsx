// /viz-layout-showcase - VizFigure variants embedded in a real <LearningTemplate>.
// Demonstrates how the new wrapper fits inside actual topic content with all 3 modes.

import { useEffect, useMemo, useRef } from 'react'
import { Mafs, Coordinates, Plot as MafsPlot } from 'mafs'
import 'mafs/core.css'
import 'mafs/font.css'
import { LearningTemplate } from './learning/learning-template'
import { VizFigure } from './viz-figure'
import { useVizColors } from '../hooks/use-viz-colors'
import { FONT_LABEL } from './viz/scale-tokens'

// Theme-reactive demo colors. useVizColors (existing platform hook) gives
// fg/dim/faint that reactively update when --base-color changes. We extend
// it with bg and font read from computed style, refreshed on each theme tick.
function useVizDemoColors() {
  const vc = useVizColors()
  return useMemo(() => {
    const cs = typeof window !== 'undefined' ? getComputedStyle(document.documentElement) : null
    const bg = cs?.getPropertyValue('--bg-elevated').trim() || '#1c1c1f'
    const font = cs?.getPropertyValue('--reader-font-family').trim() || 'sans-serif'
    // Parse vc.fg (could be "rgb(r g b)" or "rgb(r, g, b)") into rgba triples
    // for engines that need explicit alpha (lightweight-charts area gradient).
    const m = vc.fg.match(/(\d+)\s+(\d+)\s+(\d+)/) || vc.fg.match(/(\d+),\s*(\d+),\s*(\d+)/)
    const triple = m ? `${m[1]},${m[2]},${m[3]}` : '224,224,228'
    return { ...vc, bg, font, triple }
  }, [vc])
}

// Engine demo components (rendered as children of VizFigure)

function MatterPendulum() {
  const ref = useRef(null)
  const colors = useVizDemoColors()
  useEffect(() => {
    let engine, render, runner
    let mounted = true
    let Matter
    ;(async () => {
      Matter = (await import('matter-js')).default
      if (!mounted || !ref.current) return
      const w = ref.current.clientWidth
      const h = ref.current.clientHeight
      const ballR = Math.max(10, Math.min(w, h) * 0.035)
      const linkLen = Math.max(40, Math.min(w, h) * 0.12)
      engine = Matter.Engine.create()
      render = Matter.Render.create({
        element: ref.current,
        engine,
        options: {
          width: w,
          height: h,
          wireframes: false,
          background: 'transparent',
          wireframeBackground: 'transparent'
        }
      })
      let prev = Matter.Bodies.circle(w / 2, h * 0.1, ballR * 0.7, {
        isStatic: true,
        render: { fillStyle: colors.fg }
      })
      Matter.World.add(engine.world, prev)
      const links = []
      for (let i = 1; i <= 6; i++) {
        const b = Matter.Bodies.circle(w / 2 + i * linkLen, h * 0.1, ballR, {
          render: { fillStyle: colors.fg }
        })
        const c = Matter.Constraint.create({
          bodyA: prev,
          bodyB: b,
          length: linkLen,
          stiffness: 0.9,
          render: { strokeStyle: colors.dim, lineWidth: 2 }
        })
        Matter.World.add(engine.world, [b, c])
        links.push(b)
        prev = b
      }
      Matter.Body.setPosition(links[links.length - 1], { x: w * 0.85, y: h * 0.4 })
      runner = Matter.Runner.create()
      Matter.Runner.run(runner, engine)
      Matter.Render.run(render)
    })()
    return () => {
      mounted = false
      if (render) {
        Matter.Render.stop(render)
        render.canvas.remove()
      }
      if (runner) Matter.Runner.stop(runner)
      if (engine) Matter.Engine.clear(engine)
    }
  }, [colors])
  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}

function LightweightArea() {
  const ref = useRef(null)
  const colors = useVizDemoColors()
  useEffect(() => {
    let chart,
      cancelled = false
    ;(async () => {
      const { createChart, AreaSeries } = await import('lightweight-charts')
      if (cancelled || !ref.current) return
      chart = createChart(ref.current, {
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
        layout: {
          background: { color: 'transparent' },
          textColor: colors.fg,
          fontFamily: colors.font,
          fontSize: FONT_LABEL
        },
        grid: { vertLines: { color: colors.faint }, horzLines: { color: colors.faint } },
        timeScale: { borderColor: colors.faint },
        rightPriceScale: { borderColor: colors.faint }
      })
      const series = chart.addSeries(AreaSeries, {
        lineColor: colors.fg,
        topColor: `rgba(${colors.triple},0.4)`,
        bottomColor: `rgba(${colors.triple},0)`
      })
      const data = []
      const start = new Date('2025-01-01').getTime() / 1000
      for (let i = 0; i < 180; i++) {
        data.push({
          time: start + i * 86400,
          value: Math.sin(i / 14) * 8 + i / 12 + Math.random() * 1.5
        })
      }
      series.setData(data)
      chart.timeScale().fitContent()
    })()
    return () => {
      cancelled = true
      if (chart) chart.remove()
    }
  }, [colors])
  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}

function MafsTrigOverlay() {
  // viewBox aspect (4π / 4) = π ≈ 3.14, matches the figure's 3/1 aspect.
  // No vertical dead band - the grid + curves fill the entire frame.
  const colors = useVizDemoColors()
  return (
    <Mafs viewBox={{ x: [-2 * Math.PI, 2 * Math.PI], y: [-2, 2] }} pan={false} zoom={false}>
      <Coordinates.Cartesian
        xAxis={{ labels: n => (n === 0 ? '0' : `${n}`) }}
        yAxis={{ labels: n => (n === 0 ? '0' : `${n}`) }}
      />
      <MafsPlot.OfX y={x => Math.sin(x)} color={colors.fg} />
      <MafsPlot.OfX y={x => Math.cos(x)} color={colors.dim} />
      <MafsPlot.OfX y={x => Math.sin(2 * x) * 0.5} color={colors.faint} />
    </Mafs>
  )
}

function ObservableHistogram() {
  const ref = useRef(null)
  const colors = useVizDemoColors()
  useEffect(() => {
    let cancelled = false
    const container = ref.current
    ;(async () => {
      const Plot = await import('@observablehq/plot')
      if (cancelled || !container) return
      const data = Array.from({ length: 1500 }, () => {
        const u = Math.random(),
          v = Math.random()
        return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
      })
      const node = Plot.plot({
        width: container.clientWidth,
        height: container.clientHeight,
        marginLeft: 36,
        style: {
          background: 'transparent',
          color: colors.fg,
          fontFamily: colors.font,
          fontSize: FONT_LABEL
        },
        x: { label: 'z', grid: true },
        y: { label: 'count', grid: true },
        marks: [
          Plot.rectY(
            data,
            Plot.binX({ y: 'count' }, { x: d => d, fill: colors.fg, fillOpacity: 0.85 })
          ),
          Plot.ruleY([0], { stroke: colors.dim })
        ]
      })
      container.replaceChildren(node)
    })()
    return () => {
      cancelled = true
      if (container) container.replaceChildren()
    }
  }, [colors])
  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}

// Topic config: drops into LearningTemplate exactly like a real topic

function useConfig() {
  return {
    cssPrefix: 'vlsh',
    documentTitle: 'Viz Layout Showcase / Aether',
    learning: {
      groupTitle: 'Visualization Layout System',
      category: 'Showcase',
      title: 'VizFigure: One Wrapper, Many Variants',
      subtitle: `The single viz wrapper across all 10 domains. Three sizes, required aspect ratio, optional honesty slot. Hard rule: figures NEVER exceed the text content area. Embedded inside the real LearningTemplate so you see how it actually feels in production.`,
      sections: [
        <>
          <h2>{`Compact: For Spatially Sparse Viz`}</h2>

          <p>{`Some viz have fixed geometric scale, a pendulum, a free-body diagram, a small construction. Stretching them across a 1200px frame leaves them stranded in empty space. The compact size caps at 600px so they read at their natural visual density.`}</p>

          <VizFigure size="compact" aspect="4/3" title="Six-link pendulum chain">
            <MatterPendulum />
          </VizFigure>

          <p>{`The aspect ratio is locked before the engine mounts, so matter-js initializes into a reserved box and the page does not reflow. Use compact for any viz where elements have fixed pixel size: simple machines, geometric constructions, single molecules, small graphs.`}</p>

          <p>{`Compact figures float left, which means following prose flows naturally around them. This is the magazine and textbook convention: text fills the dead space beside a small figure rather than letting it sit isolated in a vertical band. Tufte argued for this in Visual Display, Distill kept the pattern, Ciechanowski uses it across hundreds of essays.`}</p>

          <p>{`The float clears at the next ${'`<h2>`'}, ${'`<h3>`'}, or section boundary, so each new section starts on its own line below the figure. Authors don't need to manage the clearing manually; the template's existing section grammar handles it.`}</p>

          <p>{`On mobile viewports below 640px the float drops entirely and the figure stacks above the text in the normal block order. There's no opt-in or opt-out: compact size implies wrap-around behavior by default, because the alternative leaves a 1000px-wide dead zone on every desktop screen.`}</p>

          <p>{`The pendulum bodies are scaled proportional to canvas dimensions: ball radius at 3.5% of the shorter axis, link length at 12%. This means the same demo fills its frame whether you use compact, body, or wide: the viz adapts to the wrapper rather than fighting it. Engine-level authoring discipline is what makes the wrapper feel right.`}</p>

          <h2>{`Body: Standard Plots and Figures`}</h2>

          <p>{`The default size. Fills the readable container, capped at 1200px. For most viz across most domains: function plots, vector fields, medium-density diagrams. Left-aligned with the prose, 16/9 aspect by default.`}</p>

          <VizFigure size="body" aspect="3/1" title="Trigonometric overlays">
            <MafsTrigOverlay />
          </VizFigure>

          <p>{`Picking the right demo per size matters. A polar butterfly curve is intrinsically square: forcing it into a 16/9 frame leaves the grid extending horizontally with no curve to fill it. Trig overlays go the other way: wide x-range, narrow y-range, every pixel of the 16/9 box carries information.`}</p>

          <p>{`At 1200px the prose still reads comfortably above and below. Caption, source, and accuracy slots stack below the frame in dim text. The honesty label sits at the right edge of the metadata row.`}</p>

          <h2>{`Wide Variant: For Data Displays`}</h2>

          <p>{`The wide size has no cap: it fills the entire content area, however wide that is. On a 2000px monitor with a 280px sidebar, wide goes 1700px. Reserved for content that benefits from every available horizontal pixel: financial time series, multi-axis plots, wide histograms.`}</p>

          <VizFigure size="wide" aspect="21/9" title="Synthetic Brownian price path">
            <LightweightArea />
          </VizFigure>

          <p>{`Aspect is a prop, not coupled to size. The same wide size can be 16/9 (cinematic), 21/9 (financial), or 3/1 (panoramic timeline). Authors declare it per figure.`}</p>

          <h2>{`Wide at Maximum: A Histogram`}</h2>

          <p>{`The wide size goes as far as the content area allows without ever exceeding it. On a 2000px monitor with a 280px sidebar, wide reaches ~1700px. The figure NEVER bleeds past where the text would wrap, that boundary is sacred.`}</p>

          <VizFigure size="wide" aspect="4/1" title="Standard normal distribution">
            <ObservableHistogram />
          </VizFigure>

          <p>{`The 4/1 aspect ratio fits a wide histogram naturally. The right edge of the figure aligns exactly with the right edge of the longest paragraph above. No escape, no bleed, no negative margins.`}</p>

          <h2>{`The Honesty Slot`}</h2>

          <p>{`Every figure can declare its accuracy level. Three approved values from the Atlas: ${'`computed`'} (live computation from an engine like matter-js or Observable Plot), ${'`illustrative`'} (schematic, not to scale), ${'`cited`'} (rendering of authoritative data with a DOI/URL source). Display is intentionally subtle, dim uppercase at the right edge of the caption, never overlaid on the viz itself.`}</p>

          <div className="lrn-insight">
            <p>{`The accuracy label is the single most important honesty primitive in the entire system. The failure mode that most damages a platform's authority is a visualization that looks like it computes when it merely decorates. This label prevents that, every time.`}</p>
          </div>

          <h2>{`The Complete Specification`}</h2>

          <ul className="lrn-list">
            <li>
              <strong>Sizes:</strong> compact (max 600px, for sparse viz), body (fills container,
              max 1200px), wide (fills full content area, no cap).
            </li>
            <li>
              <strong>Hard rule:</strong> figures NEVER exceed the text content area. No bleed past
              the parent. No negative margins.
            </li>
            <li>
              <strong>Aspect:</strong> required prop, CSS aspect-ratio property, default 16/9.
            </li>
            <li>
              <strong>Caption:</strong> optional text below figure.
            </li>
            <li>
              <strong>Source:</strong> optional citation, dim 50% opacity.
            </li>
            <li>
              <strong>Accuracy:</strong> optional one-word honesty label, 40% opacity,
              right-aligned.
            </li>
            <li>
              <strong>Mobile (&lt;640px):</strong> wide collapses to body. No special handling
              needed for the other sizes, nothing escapes the parent.
            </li>
          </ul>

          <p>{`That is the entire system. Everything else lives inside the frame as ordinary children. Switch to Practice or Reference mode (tabs at the top) to see how the wrapper fits across modes.`}</p>
        </>
      ]
    },
    practice: [
      {
        q: `What are the three approved sizes for VizFigure, and when do you use each?`,
        a: `${'`compact`'} (max 600px) for spatially sparse viz with fixed geometric scale (pendulums, free-body diagrams, simple machines). ${'`body`'} (fills container, max 1200px) for standard plots and figures. ${'`wide`'} (fills content area, no cap) for spatially dense data displays. There is no bleed/full variant: figures never exceed the text content area.`
      },
      {
        q: `Why is the wrapper a dumb shell instead of engine-aware?`,
        a: `Ten engines × engine-aware logic = ten branches that drift independently. CSS containers know nothing about their children. Distill and Ciechanowski both succeed precisely because their shells know nothing about the engines inside.`
      },
      {
        q: `What happens to a ${'`wide`'} figure on a mobile viewport (<640px)?`,
        a: `It collapses to ${'`body`'} width. Single breakpoint, single rule per variant.`
      },
      {
        q: `Why is the ${'`aspect`'} prop required rather than auto-detected?`,
        a: `It reserves the layout box BEFORE the engine mounts. Auto-detection would mean the page reflows when matter-js initializes its canvas. Authors declare aspect once per figure.`
      },
      {
        q: `What is the hard rule about figures and the text content area?`,
        a: `Figures NEVER exceed the text content area. No bleed past the parent, no negative margins, no escape via translateX. The viz lives strictly inside the same horizontal extent the text occupies. This is the single most important layout constraint in the entire system.`
      },
      {
        q: `What are the three approved accuracy values, and what does each mean?`,
        a: `${'`computed`'} means live computation from an engine. ${'`illustrative`'} means schematic, not to scale. ${'`cited`'} means rendering of authoritative data with a DOI/URL source. The label is subtle but mandatory honesty.`
      }
    ],
    reference: {
      category: 'Reference',
      title: 'VizFigure Quick Reference',
      sections: [
        {
          title: 'Props',
          content: (
            <>
              <ul className="lrn-list">
                <li>
                  <code>{`size`}</code>: <code>{`'compact' | 'body' | 'wide'`}</code>, defaults to{' '}
                  <code>{`'body'`}</code>
                </li>
                <li>
                  <code>{`aspect`}</code>: CSS aspect-ratio string (e.g. <code>{`'16/9'`}</code>,{' '}
                  <code>{`'1/1'`}</code>, <code>{`'21/9'`}</code>), defaults to{' '}
                  <code>{`'16/9'`}</code>
                </li>
                <li>
                  <code>{`caption`}</code>: optional descriptive text below the frame
                </li>
                <li>
                  <code>{`source`}</code>: optional citation (license, DOI, dataset)
                </li>
                <li>
                  <code>{`accuracy`}</code>: optional one-word honesty label
                </li>
                <li>
                  <code>{`children`}</code>: any React node, the engine renders here
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Sizes',
          content: (
            <>
              <ul className="lrn-list">
                <li>
                  <code>{`compact`}</code>: max 600px. For spatially sparse viz with fixed geometric
                  scale: pendulums, free-body diagrams, simple machines, small graphs, single
                  molecules.
                </li>
                <li>
                  <code>{`body`}</code>: fills the readable container, capped at 1200px. The
                  default. Most viz: function plots, vector fields, medium-density diagrams.
                </li>
                <li>
                  <code>{`wide`}</code>: fills the entire content area with no cap. Data displays,
                  time series, wide histograms on large monitors.
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Hard rule',
          content: (
            <>
              <p>
                Figures NEVER exceed the text content area. No bleed past the parent, no negative
                margins, no <code>translateX</code> escape. The viz lives strictly inside the same
                horizontal extent the text occupies.
              </p>
              <p>
                There is no <code>full</code> size and no <code>margin-note</code> position. Both
                violated this rule and were removed.
              </p>
            </>
          )
        },
        {
          title: 'Aspect ratios in practice',
          content: (
            <>
              <ul className="lrn-list">
                <li>
                  <code>{`16/9`}</code>: default, general-purpose viz
                </li>
                <li>
                  <code>{`1/1`}</code>: Mol* viewers, parametric curves, symbol grids
                </li>
                <li>
                  <code>{`21/9`}</code>: financial time series (Lightweight Charts aesthetic)
                </li>
                <li>
                  <code>{`4/1`}</code> or <code>{`3/1`}</code>: wide histograms, panoramic timelines
                </li>
                <li>
                  <code>{`3/4`}</code>: tall plots, vertical proof trees
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Accuracy values',
          content: (
            <>
              <ul className="lrn-list">
                <li>
                  <code>{`computed`}</code>: live computation from an engine (matter-js, Mafs, etc.)
                </li>
                <li>
                  <code>{`illustrative`}</code>: schematic, not to scale
                </li>
                <li>
                  <code>{`cited`}</code>: rendering of authoritative data, with source DOI/URL
                </li>
                <li>
                  <code>{`to scale`}</code>: physical or geometric viz where proportions are real
                </li>
                <li>
                  <code>{`schematic`}</code>: symbolic diagram, geometry is conceptual
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Mobile behavior (<640px)',
          content: (
            <>
              <p>
                Nothing special. All three sizes already fit inside their parent without escape, so
                they shrink naturally with the viewport. <code>compact</code> stays under 600px,{' '}
                <code>body</code> stays under 1200px, <code>wide</code> fills whatever the parent
                gives it.
              </p>
            </>
          )
        }
      ]
    }
  }
}

export default function VizLayoutShowcase() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
