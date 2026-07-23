# `src/assets/viz/` — Authored SVG illustrations

This directory holds SVG files authored in a vector tool (Affinity, Inkscape, Boxy SVG) and imported as React components via `vite-plugin-svgr`.

## Pipeline

`vite.config.js` configures `vite-plugin-svgr` + SVGO with two transforms that matter for the platform:

- `removeViewBox: false` — viewBox stays so the SVG scales to whatever container it's mounted in.
- `convertColors → currentColor` — every fill/stroke in the source SVG is rewritten to `currentColor`, so the imported component inherits the platform's foreground from `color: useVizColors().fg` set on the wrapping `<VizFigure>` SVG.

## Authoring contract

For an SVG to drop in cleanly, the source file must follow these conventions:

1. **`viewBox` declared.** Pick the canvas size you draw in (e.g. `0 0 1200 700`). Width/height attributes are stripped on import.
2. **Strokes only or strokes-plus-flat-fills.** No gradients, no embedded raster images, no filters. The platform aesthetic is flat monochrome.
3. **Three frozen stroke weights.** `0.5` (hairline), `1.0` (object), `1.75` (accent). Pick from these three only.
4. **`vector-effect="non-scaling-stroke"` on every stroked element.** Set in your authoring tool's stroke panel; SVGO preserves the attribute.
5. **All strokes a single color.** Black works fine — SVGO rewrites everything to `currentColor` on import.
6. **No embedded text.** Labels stay React-controlled and overlaid in JSX. Use named `<g id="anchor-name">` groups in the SVG as reference points for the JSX layer to position labels against.
7. **Symbols as `<symbol>` defs reused via `<use>`.** Crash X-marks, hazard triangles, service-ramp rectangles, start/finish bar, lap-direction arrow, grandstand boxes — define once at the top of the SVG, reuse by id.
8. **No embedded font.** Affinity has "Embed font" in the export dialog — turn it off. Typography is the React layer's responsibility.

## Import pattern

```jsx
import BoontaCourseGeometry from '../../../assets/viz/boonta-eve-course.svg?react'

export function BoontaRaceCourse() {
  const C = useVizColors()
  return (
    <VizFigure id="SW.I.04.1" title="Boonta Eve Race Course" size="body" aspect="1200/700">
      <div style={{ color: C.fg, width: '100%', height: '100%' }}>
        <BoontaCourseGeometry style={{ width: '100%', height: '100%' }} />
        {/* React-controlled label overlay sits on top */}
        <svg
          viewBox="0 0 1200 700"
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        >
          {/* labels positioned against anchor points from the SVG */}
        </svg>
      </div>
    </VizFigure>
  )
}
```

## Status

- `boonta-eve-course.svg` — TBD. The current `BoontaRaceCourse` in `src/components/viz/films/star-wars/the-phantom-menace.jsx` is a placeholder hand-coded schematic. Trace from canonical Boonta map reference (Wookieepedia or the Lucasfilm sketch), follow the contract above, save here, then update the component to import it.
