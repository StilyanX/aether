import { createContext } from 'react'

// When a VizFigure is fullscreen, it sets this context to the DOM node of its
// pinned controls bar. Slider, PlayPause, and Toggle portal into that node so
// they render outside the zoom/pan transform layer and stay fixed at the bottom.
export const VizControlsCtx = createContext(null)
