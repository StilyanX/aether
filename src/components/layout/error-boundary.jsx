import { Component } from 'react'
import { generateCorrelationId, logError } from '../../lib/error-utils'
import {
  AppErrorFallback,
  ContentErrorFallback,
  ChunkLoadFallback,
  WidgetErrorFallback
} from './error-fallbacks'

const isChunkError = err =>
  err?.name === 'ChunkLoadError' ||
  /Loading chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(
    err?.message || ''
  )

// A 3D viz that fails to get a WebGL context throws asynchronously (react-three-
// fiber mounts the renderer inside an effect), so the failure escapes React's
// error boundaries and surfaces as an unhandled rejection / window error. Without
// this guard the app-level boundary treats one broken viz as a whole-app fault.
// Scene3D already degrades these gracefully in place; this refuses to escalate a
// stray one to a full-app fault.
const isRecoverableVizError = err =>
  /WebGL|WebGLRenderer|Error creating WebGL context|context could not be created/i.test(
    err?.message || ''
  )

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null, correlationId: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error, correlationId: generateCorrelationId() }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    this.props.onError?.(error)
    logError(error, {
      correlationId: this.state.correlationId,
      level: this.props.level || 'app',
      componentPath: errorInfo?.componentStack?.split('\n')[1]?.trim()
    })
  }

  componentDidMount() {
    if ((this.props.level || 'app') !== 'app') return
    this.handleWindowError = event => {
      const err = event.error || new Error(event.message || 'Unhandled error')
      if (isRecoverableVizError(err)) {
        logError(err, { source: 'window.error', level: 'app', recovered: true })
        return
      }
      this.setState({
        hasError: true,
        error: err,
        errorInfo: null,
        correlationId: generateCorrelationId()
      })
      logError(err, { source: 'window.error', level: 'app' })
    }
    this.handleRejection = event => {
      const reason = event.reason
      const err = reason instanceof Error ? reason : new Error(String(reason))
      if (isRecoverableVizError(err)) {
        logError(err, { source: 'unhandledrejection', level: 'app', recovered: true })
        return
      }
      this.setState({
        hasError: true,
        error: err,
        errorInfo: null,
        correlationId: generateCorrelationId()
      })
      logError(err, { source: 'unhandledrejection', level: 'app' })
    }
    window.addEventListener('error', this.handleWindowError)
    window.addEventListener('unhandledrejection', this.handleRejection)
  }

  componentWillUnmount() {
    if (this.handleWindowError) window.removeEventListener('error', this.handleWindowError)
    if (this.handleRejection) window.removeEventListener('unhandledrejection', this.handleRejection)
  }

  componentDidUpdate(prevProps) {
    if (!this.state.hasError) return
    const prev = prevProps.resetKeys || []
    const curr = this.props.resetKeys || []
    const changed = prev.length !== curr.length || prev.some((k, i) => k !== curr[i])
    if (changed) {
      this.setState({ hasError: false, error: null, errorInfo: null, correlationId: null })
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null, correlationId: null })
    this.props.onReset?.()
  }

  render() {
    if (!this.state.hasError) return this.props.children

    if (this.props.fallback) return this.props.fallback

    const { error, errorInfo } = this.state
    const level = this.props.level || 'app'

    if (isChunkError(error)) {
      return <ChunkLoadFallback />
    }

    if (level === 'widget') {
      return <WidgetErrorFallback aspectRatio={this.props.aspectRatio} onRetry={this.handleReset} />
    }

    if (level === 'content') {
      return <ContentErrorFallback error={error} onRetry={this.handleReset} />
    }

    return <AppErrorFallback error={error} errorInfo={errorInfo} />
  }
}

export default ErrorBoundary
