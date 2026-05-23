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

// Authors sometimes write LaTeX inside plain JSX text (e.g. `<h3>$a \\cdot b$</h3>`)
// instead of template literals. JSX text doesn't apply JS escape processing, so
// `\\cdot` reaches MathJax as two literal backslashes; MathJax parses `\\` as a
// newline command and renders `cdot` as italic identifiers.
//
// Patch MathJax's TeX input `compile` step to collapse `\\X` -> `\X` before
// parsing. This is the only point where ALL math (initial typeset, lazy-loaded
// content, dynamic re-typesets) is guaranteed to pass through, so it's the
// only place a fix can be both complete and race-free.
function installEscapeHook(MJ) {
  try {
    const inputJax = MJ?.startup?.input?.[0]
    if (!inputJax || typeof inputJax.compile !== 'function') return
    if (inputJax.__escapeHookInstalled) return
    const origCompile = inputJax.compile.bind(inputJax)
    inputJax.compile = function (math, doc) {
      if (math && typeof math.math === 'string' && /\\\\[A-Za-z]/.test(math.math)) {
        math.math = math.math.replace(/\\\\(?=[A-Za-z])/g, '\\')
      }
      return origCompile(math, doc)
    }
    inputJax.__escapeHookInstalled = true
  } catch {
    // best-effort: if MathJax internals change shape, fall through silently;
    // the learning-template DOM fallback still catches the bug post-render.
  }
}

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
      installEscapeHook(window.MathJax)
      // Force a re-typeset so any mjx-containers rendered before the hook
      // existed (e.g. on the very first page load of a session) get redone
      // with the corrected source.
      if (window.MathJax?.typesetClear) window.MathJax.typesetClear()
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
          // Install the compile hook BEFORE defaultReady so the initial
          // auto-typeset already sees corrected source.
          installEscapeHook(window.MathJax)
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
    // Bootstrap effect: configures MathJax once per session. Re-running on engine/speech changes
    // would re-add the script tag; runtime config changes are handled by the re-typeset effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
