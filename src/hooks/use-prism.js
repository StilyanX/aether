import { useEffect, useState, useCallback } from 'react'

const PRISM_CSS = 'https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism-tomorrow.min.css'
const PRISM_JS = 'https://cdn.jsdelivr.net/npm/prismjs@1/prism.min.js'

// Language components to load on demand
const LANGUAGE_URLS = {
  python: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-python.min.js',
  javascript: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-javascript.min.js',
  typescript: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-typescript.min.js',
  jsx: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-jsx.min.js',
  css: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-css.min.js',
  bash: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-bash.min.js',
  json: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-json.min.js',
  latex: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-latex.min.js',
  cpp: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-cpp.min.js',
  c: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-c.min.js',
  rust: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-rust.min.js',
  go: 'https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-go.min.js'
}

/**
 * Syntax highlighting hook using Prism.js CDN.
 * Lightweight: 2KB core + language components on demand.
 *
 * @param {string[]} languages - Languages to preload (optional)
 * @returns {Object} Status and highlight method
 */
export function usePrism(languages = []) {
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'ready' | 'error'

  // Highlight all code blocks on the page
  const highlight = useCallback(() => {
    if (window.Prism?.highlightAll) {
      window.Prism.highlightAll()
    }
  }, [])

  // Load a specific language component
  const loadLanguage = useCallback(lang => {
    return new Promise((resolve, reject) => {
      const url = LANGUAGE_URLS[lang]
      if (!url) {
        resolve() // Language not in our list, skip
        return
      }

      // Check if already loaded
      if (document.querySelector(`script[src="${url}"]`)) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = url
      script.async = true
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    })
  }, [])

  useEffect(() => {
    // Check if already loaded
    if (window.Prism) {
      setStatus('ready')
      // Load requested languages
      Promise.all(languages.map(loadLanguage)).then(highlight)
      return
    }

    // Check if script is loading
    if (document.querySelector(`script[src="${PRISM_JS}"]`)) {
      setStatus('loading')
      return
    }

    setStatus('loading')

    // Load CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = PRISM_CSS
    document.head.appendChild(link)

    // syntax highlight theme - 3 accent colors + white opacity scale
    const customStyles = document.createElement('style')
    customStyles.textContent = `
      code[class*="language-"],
      pre[class*="language-"] {
        color: rgba(240, 240, 250, 0.9) !important;
        background: transparent !important;
        font-family: var(--reader-code-font, monospace) !important;
        font-size: 1.5rem !important;
        line-height: 1.6 !important;
      }
      pre[class*="language-"] {
        padding: 0;
        margin: 0;
        overflow: auto;
      }
      .token.comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: rgba(240, 240, 250, 0.3);
        font-style: italic;
      }
      .token.punctuation {
        color: rgba(240, 240, 250, 0.45);
      }
      .token.property,
      .token.tag {
        color: rgba(240, 240, 250, 0.85);
      }
      .token.boolean,
      .token.number,
      .token.constant,
      .token.symbol {
        color: #c4b5fd;
      }
      .token.selector,
      .token.attr-name,
      .token.string,
      .token.char,
      .token.builtin {
        color: #a3d9a5;
      }
      .token.operator,
      .token.entity,
      .token.url,
      .token.variable {
        color: rgba(240, 240, 250, 0.6);
      }
      .token.atrule,
      .token.attr-value,
      .token.function,
      .token.class-name {
        color: #ffffff;
      }
      .token.keyword {
        color: #93c5fd;
      }
      .token.regex,
      .token.important {
        color: #c4b5fd;
      }
      code[class*="language-"] ::selection,
      code[class*="language-"]::selection {
        background: rgba(147, 197, 253, 0.2);
        color: inherit;
      }
    `
    document.head.appendChild(customStyles)

    // Load Prism JS
    const script = document.createElement('script')
    script.src = PRISM_JS
    script.async = true

    script.onload = () => {
      setStatus('ready')
      // Load requested languages then highlight
      Promise.all(languages.map(loadLanguage))
        .then(highlight)
        .catch(() => {})
    }

    script.onerror = () => {
      setStatus('error')
      console.warn('Prism.js CDN failed to load')
    }

    document.body.appendChild(script)
  }, [languages, loadLanguage, highlight])

  return { status, highlight, loadLanguage }
}
