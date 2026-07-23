// MATHEMATICS · ESTIMATION AND ROUNDING
// REFINE pass 2026-07-02 - this file was dead weight and has been emptied:
//
// - It registered ZERO catalog exports: index.jsx imports the namespace but
//   never references it (ar.17 AbsoluteVsRelativeError binds to the copy in
//   approximation-significant-figures-and-decimal-places.jsx, which is the
//   maintained one).
// - Its local AbsoluteVsRelativeError was a stale divergent duplicate
//   (different numbers, self-wrapped in a second VizFigure - a nested-figure
//   defect had it ever rendered). Removed; re-exported from the real source
//   below so any upstream topic-page import keeps working.
// - Its `d3-scale` import (banned engine - not in the allowed four, and not
//   even in package.json) was entirely unused. Removed. The BUILD-LOG
//   "add d3-scale to package.json upstream" sync note is VOID; the runner
//   import-map shim for d3-scale can also be dropped.
// - RoundingLane (unexported, unreferenced) and eight comment stubs for
//   long-deleted components: removed.
//
// OPEN QUESTION (upstream): if a topic page imports estimation-and-rounding
// components other than AbsoluteVsRelativeError, they no longer exist in this
// snapshot - they were already gone before this pass (only comment stubs
// remained). Confirm section anchors upstream.

export { AbsoluteVsRelativeError } from '../approximation-significant-figures-and-decimal-places/approximation-significant-figures-and-decimal-places'
