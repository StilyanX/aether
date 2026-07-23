import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { topicComponentMap } from '../../config/registry'

function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Get all topics from the registry
  const allTopics = useMemo(() => {
    return Object.keys(topicComponentMap).map(title => ({
      title,
      slug: topicComponentMap[title].slug,
      parentSlug: topicComponentMap[title].parentSlug
    }))
  }, [])

  // Filter topics based on search term
  const filteredTopics = useMemo(() => {
    if (!searchTerm.trim()) return allTopics
    const term = searchTerm.toLowerCase()
    return allTopics.filter(topic => topic.title.toLowerCase().includes(term))
  }, [searchTerm, allTopics])

  // Suggestions for the empty state - first three indexed topics
  const suggestions = useMemo(() => allTopics.slice(0, 3), [allTopics])

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSearchTerm('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  const handleSelect = useCallback(
    topic => {
      navigate(`/topic/${topic.slug}`)
      onClose()
    },
    [navigate, onClose]
  )

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, filteredTopics.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'Enter' && filteredTopics.length > 0) {
        e.preventDefault()
        handleSelect(filteredTopics[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredTopics, selectedIndex, onClose, handleSelect])

  // Reset selected index when search term changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [searchTerm])

  // No entry animation. The panel used to mount at opacity 0 and depend on
  // framer-motion running an enter tween to become visible — so wherever that
  // tween did not run (LibreWolf's resist-fingerprinting throttles the timing
  // APIs motion relies on), the backdrop dimmed the page and the panel stayed
  // invisible at opacity 0. A search box that only appears if an animation
  // succeeds is a search box that sometimes does not appear. The fade encoded
  // nothing, and the design system bans decorative motion, so it is gone: the
  // panel is now painted by CSS and visible the instant it mounts.
  if (!isOpen) return null

  return (
    <div
      className="search-modal-overlay"
      // Close only on a press that BEGINS on the backdrop. Using onClick meant
      // the very click that opened the modal (on the magnifier, whose mouseup
      // lands where the backdrop now is) could close it again on the way back
      // up — the intermittent half of this bug.
      onMouseDown={e => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="search-modal" onMouseDown={e => e.stopPropagation()}>
        <div className="search-modal-header">
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search modules..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <kbd className="search-shortcut">⌘K</kbd>
        </div>

        <div className="search-results">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <button
                key={topic.slug}
                type="button"
                className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => handleSelect(topic)}
              >
                <span className="search-result-title">{topic.title}</span>
                {topic.parentSlug && <span className="search-result-path">{topic.parentSlug}</span>}
              </button>
            ))
          ) : (
            <div className="search-empty-state" role="status">
              <div className="se-meta">
                <span className="se-echo">
                  No matches for <b>&ldquo;{searchTerm}&rdquo;</b>
                </span>
                <span className="se-count">0 / {allTopics.length} indexed</span>
              </div>
              <div className="se-empty">
                <div className="se-glyph">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="rgba(240,240,250,0.55)"
                    strokeWidth="1.2"
                    aria-hidden="true"
                  >
                    <path d="M22 22 Q22 14 32 14 Q42 14 42 22 Q42 28 36 31 Q32 33 32 38 L32 42" />
                    <circle cx="32" cy="50" r="1.2" fill="rgba(240,240,250,0.55)" />
                    <rect
                      x="6"
                      y="6"
                      width="52"
                      height="52"
                      stroke="rgba(240,240,250,0.12)"
                      strokeDasharray="2 4"
                    />
                  </svg>
                </div>
                <h2 className="se-title">Nothing here matched.</h2>
                <p className="se-desc">
                  The index has {allTopics.length.toLocaleString()} cards but none answer to{' '}
                  <code>{searchTerm}</code>. Try a shorter query or browse a topic.
                </p>

                {suggestions.length > 0 && (
                  <div className="se-suggest">
                    <div className="se-suggest-h">Try instead</div>
                    <ul className="se-suggest-list">
                      {suggestions.map(s => (
                        <li key={s.slug} onClick={() => handleSelect(s)}>
                          <span className="label">{s.title}</span>
                          <span className="kind">{s.parentSlug?.split('/').pop() || 'Topic'}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="se-actions">
                  <button className="se-btn" onClick={() => setSearchTerm('')}>
                    <span className="num">01</span>Clear query
                  </button>
                  <button
                    className="se-btn"
                    onClick={() => {
                      navigate('/')
                      onClose()
                    }}
                  >
                    <span className="num">02</span>Browse topics
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="search-modal-footer">
          <span className="search-hint">
            <kbd>↑</kbd> <kbd>↓</kbd> Navigate
          </span>
          <span className="search-hint">
            <kbd>Enter</kbd> Select
          </span>
          <span className="search-hint">
            <kbd>Esc</kbd> Close
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
