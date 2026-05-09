import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSettings } from '../../hooks/use-settings'
import { inQuietHours } from '../../utils/notify'
import { formatDuration } from '../../utils/format'
import './pomodoro.css'

export default function Pomodoro() {
  const settings = useSettings()
  const enabled = !!settings.pomodoro

  const workMs = Math.max(1, Number(settings.pomodoroWork) || 25) * 60 * 1000
  const breakMs = Math.max(1, Number(settings.pomodoroBreak) || 5) * 60 * 1000
  const longBreakMs = Math.max(1, Number(settings.pomodoroLongBreak) || 15) * 60 * 1000
  const longBreakInterval = Number(settings.pomodoroLongBreakInterval) || 0

  const [phase, setPhase] = useState('work') // 'work' | 'break' | 'longBreak'
  const [running, setRunning] = useState(false)
  const [remaining, setRemaining] = useState(workMs)
  const [open, setOpen] = useState(false)
  const [sessionsCompleted, setSessionsCompleted] = useState(0)

  const location = useLocation()
  const parts = location.pathname.split('/').filter(Boolean)
  const isInComponent =
    (parts[0] === 'library' && parts.length >= 3) || (parts[0] === 'explore' && parts.length >= 4)

  const phaseRef = useRef(phase)
  const sessionsRef = useRef(sessionsCompleted)
  const runningRef = useRef(running)
  const wasRunningRef = useRef(false)
  phaseRef.current = phase
  sessionsRef.current = sessionsCompleted
  runningRef.current = running

  useEffect(() => {
    if (!enabled) {
      setOpen(false)
      setRunning(false)
    }
  }, [enabled])

  useEffect(() => {
    if (!isInComponent) {
      wasRunningRef.current = runningRef.current
      if (runningRef.current) setRunning(false)
    } else {
      if (wasRunningRef.current) setRunning(true)
    }
  }, [isInComponent])

  useEffect(() => {
    const ms = phase === 'work' ? workMs : phase === 'longBreak' ? longBreakMs : breakMs
    setRemaining(ms)
  }, [phase, workMs, breakMs, longBreakMs])

  useEffect(() => {
    const toggle = () => setOpen(o => !o)
    window.addEventListener('aether:toggle-pomodoro', toggle)
    return () => window.removeEventListener('aether:toggle-pomodoro', toggle)
  }, [])

  useEffect(() => {
    if (!enabled || !running) return
    const tick = setInterval(() => {
      setRemaining(prev => {
        if (prev > 1000) return prev - 1000

        // Phase transition
        const currentPhase = phaseRef.current
        let next, nextSessions

        if (currentPhase === 'work') {
          nextSessions = sessionsRef.current + 1
          setSessionsCompleted(nextSessions)
          const useLongBreak = longBreakInterval > 0 && nextSessions % longBreakInterval === 0
          next = useLongBreak ? 'longBreak' : 'break'
        } else {
          next = 'work'
          nextSessions = sessionsRef.current
        }

        if (
          settings.notifDesktop &&
          'Notification' in window &&
          Notification.permission === 'granted' &&
          !inQuietHours()
        ) {
          try {
            const title = next === 'work' ? 'Aether - Back to work' : 'Aether - Take a break'
            const body =
              next === 'work'
                ? `${settings.pomodoroWork} min focus block`
                : next === 'longBreak'
                  ? `${settings.pomodoroLongBreak} min long break`
                  : `${settings.pomodoroBreak} min break`
            new Notification(title, { body, icon: '/logo.png' })
          } catch {
            // notifications can throw on some browsers
          }
        }

        setPhase(next)
        const autoStart = next === 'work' ? settings.pomodoroAutoWork : settings.pomodoroAutoBreak
        setRunning(!!autoStart)

        return next === 'work' ? workMs : next === 'longBreak' ? longBreakMs : breakMs
      })
    }, 1000)
    return () => clearInterval(tick)
  }, [
    enabled,
    running,
    workMs,
    breakMs,
    longBreakMs,
    longBreakInterval,
    settings.notifDesktop,
    settings.pomodoroWork,
    settings.pomodoroBreak,
    settings.pomodoroLongBreak,
    settings.pomodoroAutoBreak,
    settings.pomodoroAutoWork
  ])

  if (!enabled || !open || !isInComponent) return null

  const total = phase === 'work' ? workMs : phase === 'longBreak' ? longBreakMs : breakMs
  const pct = ((total - remaining) / total) * 100
  const phaseLabel =
    phase === 'work' ? 'FOCUS' : phase === 'longBreak' ? 'LONG BREAK' : 'SHORT BREAK'

  return (
    <div className="pmd-panel" data-phase={phase} role="dialog" aria-label="Pomodoro timer">
      <div className="pmd-progress" style={{ width: `${pct}%` }} />
      <div className="pmd-phase">{phaseLabel}</div>
      <div className="pmd-time">{formatDuration(remaining)}</div>
      <button type="button" className="pmd-btn" onClick={() => setRunning(r => !r)}>
        {running ? 'PAUSE' : 'START'}
      </button>
    </div>
  )
}
