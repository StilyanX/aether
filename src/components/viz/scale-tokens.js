// Single source of truth for all SVG viz scale constants.
// Import named tokens. Never write bare numbers in viz files.
// Decorative/artistic strokes (>2px in book art) are intentionally exempt.

// Stroke widths
export const STROKE_PRIMARY = 1.5 // data lines, vectors, key curves
export const STROKE_SECONDARY = 1 // axis lines, tick marks, grid lines
export const STROKE_GUIDE = 0.8 // faint reference / helper lines
export const STROKE_HAIR = 0.5 // hairline detail in book art
export const STROKE_EMPHASIS = 2 // selected / highlighted element emphasis

// Arrows
export const ARROW_HEAD = 6 // head size in screen px
export const ARROW_STROKE = 1.5 // shaft stroke width (= STROKE_PRIMARY)

// Points & ticks
export const POINT_STATIC = 3 // non-interactive dot radius
export const POINT_HANDLE = 7 // draggable handle radius
export const POINT_ORIGIN = 1.5 // origin marker radius
export const TICK_HALF = 3 // half-length of axis tick marks (px)

// Typography - sizes
// The ladder mirrors the platform type scale (src/styles/typography.css) so a
// viz reads at the same steps as the prose around it. Nothing outside it.
export const FONT_FAMILY = "var(--reader-font-family, 'D-DIN'), ui-monospace, monospace"
export const FONT_TINY = 9 // footnotes, minor subscripts (= --type-caption)
export const FONT_SMALL = 10 // secondary labels, node sublabels (= --type-micro)
export const FONT_AXIS = 11 // axis tick labels
export const FONT_LABEL = 11 // figure annotations
export const FONT_TEX = 13 // inline KaTeX labels (= --type-glyph)
export const FONT_TITLE = 13 // chart titles
export const FONT_CONTROL = 14 // slider / button labels (= --type-button)
export const FONT_BODY = 16 // panel prose, readouts (= --type-body)
export const FONT_VALUE = 21 // the featured number in a readout (= --type-h6)
export const FONT_VALUE_LG = 28 // hero numeral in a DOM panel (= --type-h5)
export const FONT_VALUE_XL = 38 // largest permitted numeral (= --type-h4)

// Typography - letter spacing
export const LS_COMPACT = '0.04em' // compressed labels, node sublabels
export const LS_TIGHT = '0.06em' // tight labels in dense layouts
export const LS_LABEL = '0.08em' // axis / annotation labels
export const LS_OPEN = '0.1em' // open label spacing
export const LS_MEDIUM = '0.12em' // card headers, panel labels
export const LS_UPPER = '0.14em' // uppercase viz text
export const LS_CONTROL = '0.18em' // interactive controls (sliders, buttons)
export const LS_TITLE = '0.16em' // titles, tooltips

// Canvas
export const PLOT_H_SQUARE = 560 // square-aspect field viz (gradient/curl/level-curve plots)
export const PLOT_H_WIDE = 440 // wide hero plots (single landscape diagram)
export const PLOT_PAD = 16 // Plot inner padding (px)
export const GRID_STEP = 50 // GridBg cell size (px) - matches CSS background-size: 50px 50px
export const GRID_COLOR = 'rgba(240,240,250,0.03)' // grid line color
