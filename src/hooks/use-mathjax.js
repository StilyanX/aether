import { useEffect, useState, useCallback } from 'react'

// MathJax 3 with lazy typesetting extension for 5x faster initial load
// Using CHTML output for automatic line-breaking support
// Source: https://docs.mathjax.org/en/latest/output/lazy.html
const MATHJAX_CDN = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js'

/**
 * MathJax hook with lazy typesetting support.
 * Only typesets equations when they enter the viewport.
 *
 * @param {Array} deps - Dependencies that trigger re-typesetting
 * @returns {Object} Status and typeset method
 */
import { useSettings } from './use-settings'

export function useMathJax(deps = [], enabled = true) {
  const settings = useSettings()
  const engine = settings.formulaRender || 'katex'
  const effectiveEnabled = enabled && engine !== 'ascii'
  const [status, setStatus] = useState(effectiveEnabled ? 'idle' : 'disabled')

  // Manual typeset trigger
  const typeset = useCallback(container => {
    if (window.MathJax?.typesetPromise) {
      const elements = container ? [container] : undefined
      // Clear cache first to avoid stale text node references (React + MathJax conflict)
      if (window.MathJax?.typesetClear) {
        window.MathJax.typesetClear(elements)
      }
      return window.MathJax.typesetPromise(elements).catch(err => {
        console.warn('MathJax typeset error:', err)
      })
    }
    return Promise.resolve()
  }, [])

  // Clear typeset cache (useful for dynamic content)
  const clear = useCallback(container => {
    if (window.MathJax?.typesetClear) {
      const elements = container ? [container] : undefined
      window.MathJax.typesetClear(elements)
    }
  }, [])

  useEffect(() => {
    if (!effectiveEnabled) return
    // Check if already loaded
    if (window.MathJax?.typesetPromise) {
      setStatus('ready')
      typeset()
      return
    }

    // Check if script is loading
    if (document.querySelector(`script[src="${MATHJAX_CDN}"]`)) {
      setStatus('loading')
      return
    }

    setStatus('loading')

    // Configure MathJax
    window.MathJax = {
      tex: {
        packages: { '[+]': ['cancel'] },
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']],
        processEscapes: true,
        processEnvironments: true
      },
      chtml: {
        fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
      },
      // formulaRender = 'mathml' produces semantic <math> output instead of CHTML
      output: engine === 'mathml' ? 'mml' : 'chtml',
      options: {
        renderActions: {
          addMenu: [] // Disable context menu for cleaner UI
        },
        sre: {
          speech: settings.mathSpeechStyle === 'ClearSpeak' ? 'clearspeak' : 'mathspeak'
        }
      },
      startup: {
        typeset: true, // Auto-typeset on load
        ready: () => {
          window.MathJax.startup.defaultReady()
          setStatus('ready')
        }
      }
    }

    const script = document.createElement('script')
    script.src = MATHJAX_CDN
    script.async = true

    script.onerror = () => {
      setStatus('error')
      console.warn('MathJax CDN failed to load')
    }

    document.head.appendChild(script)
  }, [effectiveEnabled])

  // Re-typeset when dependencies change
  useEffect(() => {
    if (!effectiveEnabled || status !== 'ready') return
    const timer = setTimeout(() => typeset(), 100)
    return () => clearTimeout(timer)
  }, [...deps, status, effectiveEnabled]) // eslint-disable-line react-hooks/exhaustive-deps

  // Force re-typeset after initial mount
  useEffect(() => {
    if (!effectiveEnabled || status !== 'ready') return
    const timer = setTimeout(() => typeset(), 200)
    return () => clearTimeout(timer)
  }, [status, typeset, effectiveEnabled])

  return { status, typeset, clear }
}
