import { useEffect, useState, useRef, useCallback } from 'react'
import { useWindowVirtualizer } from '@tanstack/react-virtual'
import { useMathJax } from '../../hooks/use-mathjax'
import { useProgress } from '../../hooks/use-progress'
import { useFSRS } from '../../hooks/use-fsrs'
import { useKeyboardNav } from '../../hooks/use-keyboard-nav'
import { useSettings } from '../../hooks/use-settings'
import { exportTopic, importTopic } from '../../lib/idb-store'
import { Card } from './card'

function SearchWebBtn({ query }) {
  const text = typeof query === 'string' ? query : query?.props?.children || ''
  const plain = String(text)
    .replace(/\$\$?[^$]+\$\$?/g, '')
    .trim()
  if (!plain) return null
  return (
    <button
      className="slv-search-web-btn"
      onClick={() =>
        window.open(
          `https://www.google.com/search?q=${encodeURIComponent(plain)}`,
          '_blank',
          'noopener'
        )
      }
      aria-label="Search web for this question"
      title="Search web"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </button>
  )
}

function CardStudyView({ cards, topicSlug, hasMath, onProgress }) {
  const settings = useSettings()
  const {
    loading,
    sessionStarted,
    sessionComplete,
    startSession,
    currentCard,
    sessionIndex,
    totalCards,
    rateCard,
    goBack,
    liveText,
    reviewCount,
    newCount,
    totalNewCount,
    nextDueDate,
    sessionStats
  } = useFSRS(topicSlug, cards)

  const [answerVisible, setAnswerVisible] = useState(false)
  const [predictionCommitted, setPredictionCommitted] = useState(false)
  const [selfExplainText, setSelfExplainText] = useState('')
  const [selfExplainSubmitted, setSelfExplainSubmitted] = useState(false)
  const [importStatus, setImportStatus] = useState('')
  const [elapsed, setElapsed] = useState(0)
  const cardStartRef = useRef(Date.now())
  const containerRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    cardStartRef.current = Date.now()
    setElapsed(0)
  }, [sessionIndex])

  useEffect(() => {
    if (totalCards > 0) onProgress?.({ index: sessionIndex, total: totalCards })
  }, [sessionIndex, totalCards])

  useEffect(() => {
    if (!settings.showReviewTimer || !sessionStarted || sessionComplete) return
    const id = setInterval(
      () => setElapsed(Math.floor((Date.now() - cardStartRef.current) / 1000)),
      1000
    )
    return () => clearInterval(id)
  }, [settings.showReviewTimer, sessionStarted, sessionComplete])

  useMathJax([sessionIndex, answerVisible, sessionStarted], hasMath)

  // Auto-start session immediately
  useEffect(() => {
    if (!loading && !sessionStarted && !sessionComplete) {
      startSession()
    }
  }, [loading, sessionStarted, sessionComplete, startSession])

  // Reset state on card change
  useEffect(() => {
    setAnswerVisible(false)
    setPredictionCommitted(false)
    setSelfExplainText('')
    setSelfExplainSubmitted(false)
  }, [sessionIndex])

  // Auto-advance: auto-reveal answer after delay
  useEffect(() => {
    if (!settings.autoAdvance || !sessionStarted || sessionComplete || answerVisible) return
    const id = setTimeout(() => setAnswerVisible(true), settings.autoAdvanceDelay * 1000)
    return () => clearTimeout(id)
  }, [
    settings.autoAdvance,
    settings.autoAdvanceDelay,
    sessionStarted,
    sessionComplete,
    answerVisible,
    sessionIndex
  ])

  // Auto-focus container when session is active
  useEffect(() => {
    if (sessionStarted && !sessionComplete && containerRef.current) {
      containerRef.current.focus()
    }
  }, [sessionStarted, sessionComplete])

  // Keyboard shortcuts
  useEffect(() => {
    if (!sessionStarted || sessionComplete) return

    const handler = e => {
      if (!settings.keyboardShortcuts) return
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      const isPredict = currentCard?.type === 'predict'
      const isSelfExplain = currentCard?.type === 'self-explain'

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goBack()
        return
      }

      if ((e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') && !answerVisible) {
        if (isPredict && !predictionCommitted) return
        if (isSelfExplain && !selfExplainSubmitted) return
        e.preventDefault()
        setAnswerVisible(true)
        return
      }

      if (answerVisible && (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight')) {
        e.preventDefault()
        rateCard('Good')
      }
    }

    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [
    sessionStarted,
    sessionComplete,
    answerVisible,
    rateCard,
    goBack,
    currentCard,
    predictionCommitted,
    selfExplainSubmitted
  ])

  const handleExport = async () => {
    const exported = await exportTopic(topicSlug)
    const data = JSON.stringify(
      { version: 1, topicSlug, exportedAt: new Date().toISOString(), cards: exported },
      null,
      2
    )
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `aether-${topicSlug}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = e => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async evt => {
      try {
        const data = JSON.parse(evt.target.result)
        if (!data.version || !Array.isArray(data.cards)) throw new Error('Invalid format')
        await importTopic(topicSlug, data.cards)
        setImportStatus(`Imported ${data.cards.length} cards`)
        window.location.reload()
      } catch {
        setImportStatus('Import failed: invalid file')
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const formatTime = ms => {
    const s = Math.floor(ms / 1000)
    const min = Math.floor(s / 60)
    if (min > 0) return `${min}m ${s % 60}s`
    return `${s}s`
  }

  if (loading) {
    return <div className="slv-card-study slv-loading">Loading...</div>
  }

  if (!sessionStarted) {
    const hasCards = reviewCount + totalNewCount > 0
    return (
      <div className="slv-card-study slv-presession">
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {liveText || importStatus}
        </div>
        {hasCards ? (
          <>
            <div className="slv-presession-stats">
              {reviewCount > 0 && <span>{reviewCount} due</span>}
              {totalNewCount > 0 && <span>{totalNewCount} new</span>}
            </div>
            <button className="slv-start-btn" onClick={startSession}>
              Start Review
            </button>
          </>
        ) : (
          <div className="slv-caught-up">
            <p>All caught up.</p>
            {nextDueDate && <p className="slv-next-due">Come back {nextDueDate}.</p>}
          </div>
        )}
        <div className="slv-data-actions">
          <button
            className="slv-data-btn"
            onClick={handleExport}
            aria-label="Export progress as JSON"
            title="Export progress"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
          <button
            className="slv-data-btn"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Import progress from JSON"
            title="Import progress"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            onChange={handleImport}
          />
        </div>
      </div>
    )
  }

  if (sessionComplete) {
    const elapsed = Date.now() - sessionStats.startTime
    const accuracy =
      sessionStats.reviewed > 0
        ? Math.round((sessionStats.correct / sessionStats.reviewed) * 100)
        : 0
    return (
      <div className="slv-card-study slv-postsession">
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {liveText}
        </div>
        <h2 className="slv-postsession-title">Session Complete</h2>
        <div className="slv-session-stats">
          <div className="slv-stat">
            <span className="slv-stat-label">Reviewed</span>
            <span className="slv-stat-value">{sessionStats.reviewed}</span>
          </div>
          <div className="slv-stat">
            <span className="slv-stat-label">Accuracy</span>
            <span className="slv-stat-value">{accuracy}%</span>
          </div>
          <div className="slv-stat">
            <span className="slv-stat-label">Time</span>
            <span className="slv-stat-value">{formatTime(elapsed)}</span>
          </div>
        </div>
        <button className="slv-start-btn slv-study-more" onClick={startSession}>
          Study More
        </button>
      </div>
    )
  }

  const isPredict = currentCard?.type === 'predict'
  const isSelfExplain = currentCard?.type === 'self-explain'

  return (
    <div className="slv-card-study" ref={containerRef} tabIndex={-1} data-card-study="">
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {liveText}
      </div>
      <div className="slv-card-display">
        <div className="slv-study-progress">
          <span className="slv-study-counter">
            {sessionIndex + 1} / {totalCards}
            {settings.showReviewTimer && <span className="slv-review-timer">{elapsed}s</span>}
          </span>
          <div className="slv-study-progress-bar">
            <div
              className="slv-study-progress-fill"
              style={{ width: `${((sessionIndex + 1) / totalCards) * 100}%` }}
            />
          </div>
        </div>

        <div className="slv-card-question">
          {currentCard?.q}
          {settings.searchWeb && <SearchWebBtn query={currentCard?.q} />}
        </div>

        {/* Self-explain: textarea gate */}
        {isSelfExplain && !selfExplainSubmitted && (
          <>
            <textarea
              className="slv-selfexplain-input"
              placeholder="Write your explanation..."
              value={selfExplainText}
              onChange={e => setSelfExplainText(e.target.value)}
              rows={4}
            />
            <button
              className="slv-selfexplain-submit"
              onClick={() => {
                setSelfExplainSubmitted(true)
                setAnswerVisible(true)
              }}
              disabled={selfExplainText.trim().length === 0}
            >
              Submit
            </button>
          </>
        )}

        {/* Predict gate */}
        {isPredict && !predictionCommitted && !answerVisible && (
          <button className="slv-predict-gate" onClick={() => setPredictionCommitted(true)}>
            I've Made My Prediction
          </button>
        )}

        {/* Normal reveal hint */}
        {!answerVisible && !isPredict && !isSelfExplain && (
          <button
            className="slv-reveal-hint"
            onClick={() => setAnswerVisible(true)}
            aria-label="Reveal answer"
          >
            press space or tap to reveal
          </button>
        )}

        {/* Predict reveal hint (after commit) */}
        {isPredict && predictionCommitted && !answerVisible && (
          <button
            className="slv-reveal-hint"
            onClick={() => setAnswerVisible(true)}
            aria-label="Reveal answer"
          >
            press space or tap to reveal
          </button>
        )}

        {answerVisible && (
          <>
            {/* Self-explain: side-by-side comparison */}
            {isSelfExplain ? (
              <div className="slv-selfexplain-comparison">
                <div className="slv-selfexplain-panel">
                  <div className="slv-selfexplain-label">Your Explanation</div>
                  <div className="slv-selfexplain-text">{selfExplainText}</div>
                </div>
                <div className="slv-selfexplain-panel">
                  <div className="slv-selfexplain-label">Expert Answer</div>
                  <div className="slv-card-answer">{currentCard?.a}</div>
                </div>
              </div>
            ) : (
              <>
                <div className="slv-card-answer">{currentCard?.a}</div>
                {isPredict && <div className="slv-predict-label">Prediction Card</div>}
              </>
            )}
            <div className="slv-rating-buttons">
              <div className="slv-nav-buttons">
                <button
                  className="slv-rating-btn"
                  onClick={goBack}
                  disabled={sessionIndex === 0}
                  aria-label="Previous card"
                >
                  Back
                </button>
                <button
                  className="slv-rating-btn slv-rating-good"
                  onClick={() => rateCard('Good')}
                  aria-label="Next card"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function SolvingMode({ config, topicSlug, hasMath, onProgress }) {
  const [viewMode, setViewMode] = useState('card')
  const [showAll, setShowAll] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const [revealedCards, setRevealedCards] = useState(new Set())
  const [lastAction, setLastAction] = useState(null)
  const [displayCount, setDisplayCount] = useState(0)
  const [cols, setCols] = useState(2)
  const cards = config.practice
  const gridRef = useRef(null)
  const gridContainerRef = useRef(null)

  const progress = useProgress(topicSlug)
  const { navigate } = useKeyboardNav(cards.length, gridRef)

  // Detect column count from container width
  useEffect(() => {
    if (!gridContainerRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      setCols(w >= 1024 ? 3 : w >= 640 ? 2 : 1)
    })
    ro.observe(gridContainerRef.current)
    return () => ro.disconnect()
  }, [viewMode])

  useEffect(() => {
    if (progress.hasProgress && revealedCards.size === 0 && !showAll) {
      setRevealedCards(progress.revealed)
    }
  }, [progress.hasProgress, progress.revealed])

  useEffect(() => {
    if (revealedCards.size > 0) {
      progress.save([...revealedCards])
    }
  }, [revealedCards])

  useEffect(() => {
    if (viewMode === 'grid') onProgress?.({ index: revealedCards.size, total: cards.length })
  }, [viewMode, revealedCards.size, cards.length])

  useMathJax([revealedCards.size, showAll, resetKey], hasMath)

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (document.activeElement?.closest('[data-card-study]')) return
      if (e.key === 'g' || e.key === 'G') {
        e.preventDefault()
        setViewMode(prev => (prev === 'card' ? 'grid' : 'card'))
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Animate counter
  useEffect(() => {
    const targetCount = showAll ? cards.length : revealedCards.size
    if (displayCount === targetCount) return
    const duration = 400
    const startCount = displayCount
    const diff = targetCount - startCount
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayCount(Math.round(startCount + diff * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [revealedCards.size, showAll, cards.length])

  const progressPercent = showAll ? 100 : (revealedCards.size / cards.length) * 100

  const handleReset = () => {
    setResetKey(k => k + 1)
    setRevealedCards(new Set())
    setShowAll(false)
    progress.reset()
    setLastAction({ type: 'reset' })
  }

  const handleRevealAll = () => {
    const newShowAll = !showAll
    setShowAll(newShowAll)
    setLastAction({ type: newShowAll ? 'reveal-all' : 'hide-all' })
  }

  const handleCardReveal = index => {
    setRevealedCards(prev => new Set([...prev, index]))
    setLastAction({ type: 'reveal', index })
  }

  const handleNavigate = useCallback(
    targetIndex => {
      navigate(targetIndex === -1 ? cards.length - 1 : targetIndex)
    },
    [navigate, cards.length]
  )

  // Virtualized row count
  const rowCount = Math.ceil(cards.length / cols)

  const rowVirtualizer = useWindowVirtualizer({
    count: viewMode === 'grid' ? rowCount : 0,
    estimateSize: () => 232,
    overscan: 3
  })

  return (
    <div className="slv" role="region" aria-label="Practice mode">
      <div aria-live="polite" className="sr-only">
        {lastAction?.type === 'reveal' && `Card ${lastAction.index + 1} revealed`}
        {lastAction?.type === 'reveal-all' && 'All cards revealed'}
        {lastAction?.type === 'hide-all' && 'All cards hidden'}
        {lastAction?.type === 'reset' && 'Progress reset'}
      </div>

      <div className="slv-view-toggle-corner">
        <button
          className={viewMode === 'card' ? 'active' : ''}
          onClick={() => setViewMode('card')}
          aria-pressed={viewMode === 'card'}
        >
          Card
        </button>
        <span className="slv-toggle-separator">/</span>
        <button
          className={viewMode === 'grid' ? 'active' : ''}
          onClick={() => setViewMode('grid')}
          aria-pressed={viewMode === 'grid'}
        >
          Grid
        </button>
      </div>

      {viewMode === 'card' ? (
        <CardStudyView
          cards={cards}
          topicSlug={topicSlug}
          hasMath={hasMath}
          onProgress={onProgress}
        />
      ) : (
        <>
          <div className="slv-header">
            <div className="slv-header-left">
              <h1>Practice</h1>
              <span
                className="slv-counter"
                aria-label={`${displayCount} of ${cards.length} cards revealed`}
              >
                {displayCount}/{cards.length}
              </span>
              <div className="slv-progress-visual">
                <div className="slv-progress-fill" style={{ width: `${progressPercent}%` }} />
              </div>
              {progress.hasProgress && revealedCards.size === 0 && !showAll && (
                <span className="slv-continue" aria-label="Previous progress available">
                  Continued from {progress.formatLastVisit()}
                </span>
              )}
            </div>
            <div className="slv-actions">
              <button
                className="slv-action"
                onClick={handleRevealAll}
                aria-pressed={showAll}
                aria-label={showAll ? 'Hide all answers' : 'Reveal all answers'}
              >
                {showAll ? 'Hide' : 'Reveal'}
              </button>
              <button
                className="slv-action slv-action-ghost"
                onClick={handleReset}
                disabled={revealedCards.size === 0 && !showAll}
                aria-label="Reset progress and hide all answers"
              >
                Reset
              </button>
            </div>
          </div>

          <div
            className="slv-progress"
            role="progressbar"
            aria-valuenow={Math.round(progressPercent)}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Card reveal progress"
          >
            <div
              className="slv-progress-bar"
              style={{ width: `${progressPercent}%` }}
              data-progress={
                progressPercent === 100
                  ? '100'
                  : progressPercent >= 75
                    ? '75'
                    : progressPercent >= 50
                      ? '50'
                      : progressPercent >= 25
                        ? '25'
                        : undefined
              }
            />
          </div>

          {/* Virtualized grid */}
          <div
            key={resetKey}
            ref={el => {
              gridContainerRef.current = el
              gridRef.current = el
            }}
            style={{ position: 'relative', height: `${rowVirtualizer.getTotalSize()}px` }}
            role="list"
            aria-label="Practice questions"
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const startIdx = virtualRow.index * cols
              const rowCards = cards.slice(startIdx, startIdx + cols)
              return (
                <div
                  key={virtualRow.key}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gap: '12px'
                  }}
                >
                  {rowCards.map((c, j) => {
                    const i = startIdx + j
                    return (
                      <Card
                        key={i}
                        item={c}
                        revealed={showAll}
                        index={i}
                        hasBeenRevealed={revealedCards.has(i)}
                        onReveal={() => handleCardReveal(i)}
                        onNavigate={handleNavigate}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
