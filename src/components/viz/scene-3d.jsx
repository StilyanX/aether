import { Canvas } from '@react-three/fiber'
import ErrorBoundary from '../layout/error-boundary'

// WebGL capability probe. Memoized: availability is stable within a session and
// spinning up throwaway contexts on every render is wasteful. A page reload
// re-evaluates (e.g. after the user turns on hardware acceleration).
let webglSupport
function hasWebGL() {
  if (webglSupport !== undefined) return webglSupport
  try {
    const canvas = document.createElement('canvas')
    webglSupport = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl'))
    )
  } catch {
    webglSupport = false
  }
  return webglSupport
}

function WebGLUnavailable() {
  return (
    <div className="viz-webgl-fallback">
      <span className="viz-webgl-fallback-title">3D View Unavailable</span>
      <span className="viz-webgl-fallback-detail">
        This visualization needs WebGL. Turn on hardware acceleration or WebGL in your browser, then
        reload the page.
      </span>
    </div>
  )
}

// Drop-in replacement for the react-three-fiber <Canvas>. Guards the two ways a
// 3D viz can otherwise take down the lesson (or the whole app):
//   1. WebGL disabled/absent - pre-checked, so we render a graceful placeholder
//      and never mount the Canvas (no context-creation throw, no promise
//      rejection escaping to the app-level error boundary).
//   2. Context creation fails despite the probe - the widget ErrorBoundary
//      catches the synchronous throw and shows the widget fault in place of only
//      this one viz, leaving the rest of the page usable.
export function Scene3D(props) {
  if (!hasWebGL()) return <WebGLUnavailable />
  return (
    <ErrorBoundary level="widget">
      <Canvas {...props} />
    </ErrorBoundary>
  )
}
