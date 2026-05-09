import { useState, useEffect, useCallback, useMemo } from 'react'
import { createEmptyCard, fsrs, generatorParameters, Rating, State } from 'ts-fsrs'
import { getCardsByTopic, saveCard, saveCards, getMeta, saveMeta } from '../lib/idb-store'
import { useSettings } from './use-settings'

const DIFFICULTY_PACING = {
  auto: { newMul: 1.0, reviewMul: 1.0 },
  foundations: { newMul: 0.5, reviewMul: 0.7 },
  standard: { newMul: 1.0, reviewMul: 1.0 },
  advanced: { newMul: 1.5, reviewMul: 1.5 }
}

function recordToCard(record) {
  if (!record) return createEmptyCard()
  return {
    due: new Date(record.due),
    stability: record.stability,
    difficulty: record.difficulty,
    elapsed_days: record.elapsed_days,
    scheduled_days: record.scheduled_days,
    reps: record.reps,
    lapses: record.lapses,
    state: record.state,
    last_review: record.last_review ? new Date(record.last_review) : undefined
  }
}

function formatInterval(card, now) {
  if (card.scheduled_days > 0) return `${card.scheduled_days}d`
  const ms = card.due.getTime() - now.getTime()
  const mins = Math.max(1, Math.round(ms / 60000))
  return mins < 60 ? `${mins}m` : `${Math.round(mins / 60)}h`
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function useFSRS(topicSlug, cards) {
  const settings = useSettings()

  const scheduler = useMemo(
    () =>
      fsrs(
        generatorParameters({
          request_retention: settings.desiredRetention,
          maximum_interval: settings.maxInterval,
          enable_fuzz: true,
          enable_short_term: false
        })
      ),
    [settings.desiredRetention, settings.maxInterval]
  )

  const [idbCards, setIdbCards] = useState(null) // null = loading
  const [sessionQueue, setSessionQueue] = useState(null)
  const [sessionStarted, setSessionStarted] = useState(false)
  const [sessionComplete, setSessionComplete] = useState(false)
  const [sessionIndex, setSessionIndex] = useState(0)
  const [liveText, setLiveText] = useState('')
  const [sessionStats, setSessionStats] = useState({
    reviewed: 0,
    correct: 0,
    startTime: Date.now()
  })
  useEffect(() => {
    async function load() {
      const records = await getCardsByTopic(topicSlug)

      if (records.length === 0) {
        const lsKey = `progress-${topicSlug}`
        try {
          const raw = localStorage.getItem(lsKey)
          if (raw) {
            const saved = JSON.parse(raw)
            const ratings = saved.ratings ?? {}
            const now = new Date()
            const bootstrapped = Object.entries(ratings)
              .filter(([, v]) => v === 'got-it')
              .map(([indexStr]) => {
                const index = Number(indexStr)
                const emptyCard = createEmptyCard()
                const scheduling = scheduler.repeat(emptyCard, now)
                const result = scheduling[Rating.Good]
                return {
                  id: `${topicSlug}::${index}`,
                  topicId: topicSlug,
                  due: result.card.due.toISOString(),
                  stability: result.card.stability,
                  difficulty: result.card.difficulty,
                  elapsed_days: result.card.elapsed_days,
                  scheduled_days: result.card.scheduled_days,
                  reps: result.card.reps,
                  lapses: result.card.lapses,
                  state: result.card.state,
                  last_review: result.card.last_review?.toISOString() ?? now.toISOString(),
                  updatedAt: Date.now()
                }
              })
            if (bootstrapped.length > 0) {
              await saveCards(bootstrapped)
              setIdbCards(bootstrapped)
            } else {
              setIdbCards(records)
            }
            localStorage.removeItem(lsKey)
            return
          }
        } catch {
          // localStorage unavailable or malformed - skip migration
        }
      }

      setIdbCards(records)
    }
    load()
  }, [topicSlug, scheduler])

  const { reviewQueue, newQueue } = useMemo(() => {
    if (!idbCards) return { reviewQueue: [], newQueue: [] }
    const now = new Date()
    const cardMap = new Map(idbCards.map(c => [c.id, c]))
    const review = []
    const newCards = []

    cards.forEach((card, index) => {
      const id = `${topicSlug}::${index}`
      const record = cardMap.get(id)
      if (!record || record.state === State.New || record.state === 0) {
        newCards.push({ ...card, index, id, record: record ?? null })
      } else if (new Date(record.due) <= now) {
        review.push({ ...card, index, id, record })
      }
    })

    return { reviewQueue: review, newQueue: newCards }
  }, [idbCards, cards, topicSlug])

  const pacing = DIFFICULTY_PACING[settings.difficulty] ?? DIFFICULTY_PACING.auto
  const reviewCount = reviewQueue.length
  const totalNewCount = newQueue.length
  const newCount = Math.min(
    totalNewCount,
    Math.max(0, Math.round(settings.newCardsPerDay * pacing.newMul) - reviewCount)
  )
  const learnedCount = useMemo(() => {
    if (!idbCards) return 0
    return idbCards.filter(c => c.state === State.Review || c.state === 2).length
  }, [idbCards])

  const startSession = useCallback(() => {
    let queue
    if (settings.spacedRepetition === false) {
      // Spaced repetition disabled - present every card once in source order.
      const cardMap = idbCards ? new Map(idbCards.map(c => [c.id, c])) : new Map()
      queue = cards.map((card, index) => {
        const id = `${topicSlug}::${index}`
        return { ...card, index, id, record: cardMap.get(id) ?? null }
      })
    } else {
      queue = [...reviewQueue, ...newQueue.slice(0, newCount)]
      const cap = Math.round(settings.maxReviewsPerDay * pacing.reviewMul)
      if (cap < queue.length) {
        queue = queue.slice(0, cap)
      }
      // If no due cards, load all cards for re-study
      if (queue.length === 0 && idbCards) {
        const cardMap = new Map(idbCards.map(c => [c.id, c]))
        queue = cards.map((card, index) => {
          const id = `${topicSlug}::${index}`
          return { ...card, index, id, record: cardMap.get(id) ?? null }
        })
      }
    }
    if (settings.interleave) {
      queue = shuffleInPlace([...queue])
    }
    const mapped = queue.map(item => ({
      ...item,
      fsrsCard: recordToCard(item.record)
    }))
    setSessionQueue(mapped)
    setSessionStarted(true)
    setSessionComplete(false)
    setSessionIndex(0)
    setSessionStats({ reviewed: 0, correct: 0, startTime: Date.now() })
    setLiveText('')
  }, [
    reviewQueue,
    newQueue,
    newCount,
    idbCards,
    cards,
    topicSlug,
    settings.maxReviewsPerDay,
    settings.spacedRepetition,
    settings.interleave,
    settings.difficulty
  ])

  const currentItem = sessionQueue?.[sessionIndex] ?? null

  const nextIntervals = useMemo(() => {
    if (!currentItem) return null
    const now = new Date()
    const scheduling = scheduler.repeat(currentItem.fsrsCard, now)
    return {
      Again: formatInterval(scheduling[Rating.Again].card, now),
      Good: formatInterval(scheduling[Rating.Good].card, now),
      Easy: formatInterval(scheduling[Rating.Easy].card, now)
    }
  }, [sessionIndex, sessionQueue, scheduler]) // eslint-disable-line react-hooks/exhaustive-deps

  const rateCard = useCallback(
    async ratingStr => {
      if (!currentItem || !sessionQueue) return
      const now = new Date()
      const scheduling = scheduler.repeat(currentItem.fsrsCard, now)
      const result = scheduling[Rating[ratingStr]]

      const updatedRecord = {
        id: currentItem.id,
        topicId: topicSlug,
        due: result.card.due.toISOString(),
        stability: result.card.stability,
        difficulty: result.card.difficulty,
        elapsed_days: result.card.elapsed_days,
        scheduled_days: result.card.scheduled_days,
        reps: result.card.reps,
        lapses: result.card.lapses,
        state: result.card.state,
        last_review: result.card.last_review?.toISOString() ?? now.toISOString(),
        updatedAt: Date.now()
      }

      saveCard(updatedRecord) // fire-and-forget

      setIdbCards(prev => {
        if (!prev) return [updatedRecord]
        const idx = prev.findIndex(c => c.id === updatedRecord.id)
        if (idx === -1) return [...prev, updatedRecord]
        const next = [...prev]
        next[idx] = updatedRecord
        return next
      })

      const isCorrect = ratingStr !== 'Again'
      setSessionStats(s => ({
        ...s,
        reviewed: s.reviewed + 1,
        correct: s.correct + (isCorrect ? 1 : 0)
      }))

      const nextIdx = sessionIndex + 1
      const total = sessionQueue.length
      if (nextIdx >= total) {
        setSessionComplete(true)
        setLiveText(`Session complete. ${total} cards reviewed.`)
      } else {
        setSessionIndex(nextIdx)
        setLiveText(`Rated ${ratingStr}. Card ${nextIdx + 1} of ${total}.`)
      }
    },
    [currentItem, sessionQueue, sessionIndex, topicSlug, scheduler]
  )

  const goBack = useCallback(() => {
    if (sessionIndex > 0) setSessionIndex(sessionIndex - 1)
  }, [sessionIndex])

  const nextDueDate = useMemo(() => {
    if (!idbCards?.length) return null
    const now = new Date()
    const future = idbCards
      .map(c => new Date(c.due))
      .filter(d => d > now)
      .sort((a, b) => a - b)
    if (!future.length) return null
    const diff = Math.ceil((future[0] - now) / 86400000)
    return diff <= 1 ? 'tomorrow' : `in ${diff} days`
  }, [idbCards])

  return {
    loading: idbCards === null,
    sessionStarted,
    sessionComplete,
    startSession,
    currentCard: currentItem
      ? { q: currentItem.q, a: currentItem.a, type: currentItem.type, nextIntervals }
      : null,
    sessionIndex,
    totalCards: sessionQueue?.length ?? 0,
    rateCard,
    goBack,
    liveText,
    reviewCount,
    newCount,
    totalNewCount,
    learnedCount,
    totalCardCount: cards?.length ?? 0,
    nextDueDate,
    sessionStats
  }
}
