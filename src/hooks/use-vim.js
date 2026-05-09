import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSettings } from './use-settings'

function isTyping(target) {
  if (!target) return false
  const tag = target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (target.isContentEditable) return true
  return false
}

function scrollBy(dy) {
  window.scrollBy({ top: dy, behavior: 'smooth' })
}

export function VimRouter() {
  const settings = useSettings()
  const navigate = useNavigate()
  const vimOn = settings.vimMode || settings.keymap === 'vim'

  useEffect(() => {
    if (!vimOn) return

    const onKey = e => {
      if (isTyping(e.target)) return
      if (e.metaKey || e.ctrlKey) return
      switch (e.key) {
        case 'g':
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
          break
        case 'G':
          e.preventDefault()
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
          break
        case 'h':
          e.preventDefault()
          history.back()
          break
        case 'l':
          e.preventDefault()
          history.forward()
          break
        case '/':
          e.preventDefault()
          // open search modal via existing keyboard handler shortcut
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
          break
        case 'u':
          if (e.shiftKey) {
            e.preventDefault()
            navigate('/')
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [vimOn, navigate])

  return null
}
