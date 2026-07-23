import { useState, useEffect, useMemo, useCallback } from 'react'

export const GRADES = [
  ['correct', 'Correct'],
  ['partial', 'Partial'],
  ['wrong', 'Wrong']
]

function scoreFor(grade, marks) {
  if (grade === 'correct') return marks
  if (grade === 'partial') return Math.round(marks / 2)
  return 0
}

// Lifted exam state. Owned by ProjectTemplate so both ExamRunner and the sidebar
// read the same source. Called unconditionally - pass null for prose capstones,
// in which case every derived value is empty and the effects no-op.
export function useExam(exam) {
  const [phase, setPhase] = useState('intro') // intro | running | results
  const [revealed, setRevealed] = useState(() => new Set())
  const [grades, setGrades] = useState({}) // qid -> 'correct' | 'partial' | 'wrong'
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(0)
  const [frozenElapsed, setFrozenElapsed] = useState(0)
  const [activeSectionId, setActiveSectionId] = useState(null)

  const allQuestions = useMemo(() => (exam?.sections ?? []).flatMap(s => s.questions), [exam])
  const totalMarks = useMemo(() => allQuestions.reduce((s, q) => s + q.marks, 0), [allQuestions])
  const totalQuestions = allQuestions.length

  // Tick the stopwatch once per second while the exam is in progress.
  useEffect(() => {
    if (phase !== 'running' || startTime == null) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [phase, startTime])

  // Scroll-spy: highlight the section currently in view. Sections only exist in
  // the DOM during the running phase; retry with rAF until the first one mounts.
  useEffect(() => {
    if (phase !== 'running' || !exam) return
    const ids = exam.sections.map(s => s.id)
    const findActive = () => {
      const threshold = window.innerHeight * 0.35
      let active = ids[0]
      for (const id of ids) {
        const el = document.getElementById(`exr-section-${id}`)
        if (!el) continue
        if (el.getBoundingClientRect().top <= threshold) active = id
        else break
      }
      setActiveSectionId(active)
    }
    let raf
    const setup = () => {
      if (!document.getElementById(`exr-section-${ids[0]}`)) {
        raf = requestAnimationFrame(setup)
        return
      }
      findActive()
      window.addEventListener('scroll', findActive, { passive: true })
    }
    raf = requestAnimationFrame(setup)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', findActive)
    }
  }, [phase, exam])

  const elapsedMs =
    phase === 'results' ? frozenElapsed : startTime != null ? Math.max(0, now - startTime) : 0
  const earned = allQuestions.reduce(
    (s, q) => s + (grades[q.id] ? scoreFor(grades[q.id], q.marks) : 0),
    0
  )
  const gradedCount = Object.keys(grades).length
  const correctCount = Object.values(grades).filter(g => g === 'correct').length
  const accuracy = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0
  const ungraded = totalQuestions - gradedCount

  const begin = () => {
    const t = Date.now()
    setStartTime(t)
    setNow(t)
    setPhase('running')
  }
  const reveal = id => setRevealed(prev => new Set(prev).add(id))
  const grade = (id, g) => setGrades(prev => ({ ...prev, [id]: g }))
  const finish = () => {
    setFrozenElapsed(startTime != null ? Date.now() - startTime : 0)
    setPhase('results')
  }
  const review = () => {
    setRevealed(new Set(allQuestions.map(q => q.id)))
    setPhase('running')
  }
  const restart = () => {
    setRevealed(new Set())
    setGrades({})
    setStartTime(null)
    setNow(0)
    setFrozenElapsed(0)
    setPhase('intro')
  }

  const scrollToSection = useCallback(id => {
    const el = document.getElementById(`exr-section-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return {
    exam,
    phase,
    revealed,
    grades,
    allQuestions,
    totalMarks,
    totalQuestions,
    elapsedMs,
    earned,
    gradedCount,
    correctCount,
    accuracy,
    ungraded,
    begin,
    reveal,
    grade,
    finish,
    review,
    restart,
    scoreFor,
    activeSectionId,
    scrollToSection
  }
}
