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

    // Structural + theme-adaptive palette. prism-tomorrow (PRISM_CSS above) is a
    // light-on-dark palette and drives the DARK theme as-is. Untokenised text is
    // pinned to --base-color so it flips per theme. On the LIGHT / SEPIA themes
    // the surface is pale, so we recolour tokens to a dark-on-light palette that
    // mirrors prism-tomorrow's category grouping. Never a fixed #fff/#ccc ink: it
    // vanishes on the pale themes.
    const customStyles = document.createElement('style')
    customStyles.textContent = `
      code[class*="language-"],
      pre[class*="language-"] {
        color: color-mix(in srgb, var(--base-color) 88%, transparent);
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
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.comment,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.prolog,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.doctype,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.cdata {
        color: #8a9199;
        font-style: italic;
      }
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.punctuation {
        color: #4b5058;
      }
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.property,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.tag,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.boolean,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.number,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.constant,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.symbol,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.deleted {
        color: #c62f2f;
      }
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.selector,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.attr-name,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.string,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.char,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.builtin,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.inserted {
        color: #217a33;
      }
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.operator,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.entity,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.url,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.variable {
        color: #b3541e;
      }
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.atrule,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.attr-value,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.keyword {
        color: #1a56c4;
      }
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.function,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.class-name {
        color: #8a3ab0;
      }
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.regex,
      :is(html[data-theme="light"], html[data-theme="sepia"]) .token.important {
        color: #b3541e;
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
