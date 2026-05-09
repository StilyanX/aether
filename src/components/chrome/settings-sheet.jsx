import { useEffect, useMemo, useRef, useState } from 'react'
import {
  useSettings,
  set,
  resetSection,
  addProfile,
  removeProfile,
  resetProfiles,
  switchProfile
} from '../../hooks/use-settings'
import { useTheme } from '../../hooks/use-theme'
import { getAllCards, getAllMeta, deleteDatabase } from '../../lib/idb-store'
import { useSessionsList } from '../../hooks/use-sessions'
import {
  getCurrentId,
  removeSession,
  removeOtherSessions,
  signOutThisDevice,
  relTime
} from '../../lib/sessions'
import {
  KEYBIND_ACTIONS,
  effectiveCombo,
  comboTokens,
  eventToCombo,
  findConflicts
} from '../../lib/keybinds'
import './settings-sheet.css'

const FONT_DATA_KEY = 'aether-custom-font'

function formatBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(1)} MB`
}

// CATALOGUES

const THEMES = [
  {
    id: 'dark',
    name: 'Dark',
    sub: 'Canonical',
    short: 'DK',
    swatch: { bg: '#18181b', fg: '#e0e0e4', accent: '#e6e6e8' }
  },
  {
    id: 'light',
    name: 'Light',
    sub: 'Paper',
    short: 'LT',
    swatch: { bg: '#fafaf8', fg: '#1a1a1e', accent: '#1a1a1e' }
  },
  {
    id: 'sepia',
    name: 'Sepia',
    sub: 'Long-form',
    short: 'SP',
    swatch: { bg: '#f4ecd8', fg: '#3b2f1e', accent: '#3b2f1e' }
  },
  {
    id: 'high-contrast',
    name: 'High contrast',
    sub: 'WCAG AAA',
    short: 'HC',
    swatch: { bg: '#000000', fg: '#ffffff', accent: '#ffffff' }
  }
]

const TYPEFACES = [
  { id: 'default', name: 'D-DIN', sub: 'Technical · default', spec: 'Ag' },
  { id: 'dyslexic', name: 'OpenDyslexic', sub: 'Reading support', spec: 'Ag' }
]
const typefaceToAether = id => (id === 'dyslexic' ? 'OpenDyslexic' : 'sans-serif')
const typefaceFromAether = ff => (ff === 'OpenDyslexic' ? 'dyslexic' : 'default')

const MOTION = [
  { id: 'auto', name: 'System', sub: 'Honor prefers-reduced-motion', dur: 300 },
  { id: 'full', name: 'Full', sub: 'Signature transitions on', dur: 300 },
  { id: 'reduce', name: 'Minimum', sub: 'Only essential feedback', dur: 0 }
]
const motionToAether = id => (id === 'auto' ? 'system' : id === 'full' ? 'off' : 'on')
const motionFromAether = rm => (rm === 'system' ? 'auto' : rm === 'off' ? 'full' : 'reduce')

const DENSITY = [
  { id: 'comfortable', name: 'Comfortable', sub: 'Default' },
  { id: 'compact', name: 'Compact', sub: 'Denser rows' }
]

const ACCENTS = [
  { id: 'theme', name: 'Theme', css: null },
  { id: 'stone', name: 'Stone', css: '#e6e6e8' },
  { id: 'blue', name: 'Orbital', css: '#3b9eff' },
  { id: 'green', name: 'Mint', css: '#50c878' },
  { id: 'amber', name: 'Amber', css: '#ffd700' },
  { id: 'coral', name: 'Coral', css: '#ff6f5e' },
  { id: 'violet', name: 'Violet', css: '#a78bfa' },
  { id: 'custom', name: 'Custom', css: null }
]

const READ_WIDTHS = [
  { id: 'narrow', name: 'Narrow', sub: '60ch' },
  { id: 'medium', name: 'Medium', sub: '75ch' },
  { id: 'wide', name: 'Wide', sub: '90ch' }
]
const LINE_HEIGHTS = [
  { id: 1.4, name: 'Snug' },
  { id: 1.625, name: 'Body' },
  { id: 1.85, name: 'Loose' }
]
const DIFFICULTY = [
  { id: 'auto', name: 'Adaptive', sub: 'Scales to mastery' },
  { id: 'foundations', name: 'Foundations', sub: 'Scaffolded · slower ramp' },
  { id: 'standard', name: 'Standard', sub: 'Default pace' },
  { id: 'advanced', name: 'Advanced', sub: 'Theorem-first · proofs' }
]

const TABS = [
  { id: 'appearance', label: 'Appearance', n: '01' },
  { id: 'reading', label: 'Reading', n: '02' },
  { id: 'learning', label: 'Learning', n: '03' },
  { id: 'notif', label: 'Notifications', n: '04' },
  { id: 'keyboard', label: 'Keyboard', n: '05' },
  { id: 'privacy', label: 'Privacy', n: '06' },
  { id: 'account', label: 'Profile', n: '07' },
  { id: 'data', label: 'Data', n: '08' },
  { id: 'about', label: 'System', n: '09' }
]

// Keys this sheet manages - used by RESTORE DEFAULTS so FSRS keys stay intact.
const MANAGED_KEYS = [
  'fontFamily',
  'reducedMotion',
  'density',
  'textScale',
  'accent',
  'accentColor',
  'accentSidebar',
  'accentProgress',
  'accentTopbar',
  'accentPageNav',
  'accentEquations',
  'accentAlgorithms',
  'accentHeadings',
  'accentDividers',
  'accentInsights',
  'gridOverlay',
  'showEmptyDomains',
  'topbarShowSearch',
  'topbarShowFocusMode',
  'topbarShowShortcuts',
  'topbarShowDownload',
  'topbarShowSettings',
  'topbarShowHints',
  'contentWidth',
  'contentWidthCustom',
  'lineHeight',
  'letterSpacing',
  'wordSpacing',
  'paragraphSpacing',
  'fontFamilyCustom',
  'rulerOnHover',
  'dyslexiaTint',
  'justify',
  'difficulty',
  'spacedRepetition',
  'interleave',
  'showHints',
  'checkUnderstanding',
  'formulaRender',
  'codeTheme',
  'pomodoro',
  'pomodoroWork',
  'pomodoroBreak',
  'pomodoroLongBreak',
  'pomodoroLongBreakInterval',
  'pomodoroAutoBreak',
  'pomodoroAutoWork',
  'notifDesktop',
  'studyReminder',
  'reminderTime',
  'quietHours',
  'quietFrom',
  'quietTo',
  'keymap',
  'vimMode',
  'timeFormat',
  'displayName',
  'handle',
  'avatarColor',
  'avatarImage',
  'profiles',
  'activeProfileId'
]

// PRIMITIVES

function Group({ label, title, sub, children }) {
  return (
    <section className="stg-group">
      <div className="stg-group-head">
        <span className="stg-group-n">{label}</span>
        <div className="stg-group-titles">
          <h3 className="stg-group-title">{title}</h3>
          {sub && <p className="stg-group-sub">{sub}</p>}
        </div>
        <span className="stg-group-rule" aria-hidden="true" />
      </div>
      <div className="stg-group-body">{children}</div>
    </section>
  )
}

function ToggleRow({ name, sub, value, onChange }) {
  return (
    <button
      type="button"
      className={`stg-toggle-row ${value ? 'on' : ''}`}
      onClick={() => onChange(!value)}
    >
      <div className="stg-toggle-text">
        <span className="stg-toggle-name">{name}</span>
        {sub && <span className="stg-toggle-sub">{sub}</span>}
      </div>
      <span className="stg-toggle" aria-hidden="true">
        <span className="stg-toggle-knob" />
      </span>
    </button>
  )
}

function Segmented({ items, value, getId, getLabel, getSub, onChange, compact }) {
  return (
    <div className={`stg-seg ${compact ? 'compact' : ''}`}>
      {items.map(it => {
        const id = getId(it)
        const on = value === id
        return (
          <button
            key={id}
            type="button"
            className={`stg-seg-btn ${on ? 'on' : ''}`}
            onClick={() => onChange(id)}
          >
            <span className="stg-seg-l">{getLabel(it)}</span>
            {getSub && <span className="stg-seg-s">{getSub(it)}</span>}
          </button>
        )
      })}
    </div>
  )
}

function SegmentedCustom({
  items,
  value,
  getId,
  getLabel,
  getSub,
  onChange,
  customType = 'text',
  customPlaceholder = '',
  customSuffix = ''
}) {
  const isPreset = items.some(it => String(getId(it)) === String(value))
  const [customOpen, setCustomOpen] = useState(!isPreset)
  const [draft, setDraft] = useState(isPreset ? '' : String(value))
  const inputRef = useRef(null)

  useEffect(() => {
    if (!isPreset) setDraft(String(value))
  }, [value, isPreset])

  const openCustom = () => {
    setDraft(isPreset ? '' : String(value))
    setCustomOpen(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const commit = raw => {
    const trimmed = String(raw).trim()
    if (!trimmed) {
      setCustomOpen(false)
      return
    }
    if (customType === 'number') {
      const n = parseFloat(trimmed)
      if (!isNaN(n)) onChange(n)
    } else {
      onChange(trimmed)
    }
    setCustomOpen(false)
  }

  return (
    <>
      <div className="stg-seg">
        {items.map(it => {
          const id = getId(it)
          return (
            <button
              key={id}
              type="button"
              className={`stg-seg-btn ${String(value) === String(id) && !customOpen ? 'on' : ''}`}
              onClick={() => {
                setCustomOpen(false)
                onChange(id)
              }}
            >
              <span className="stg-seg-l">{getLabel(it)}</span>
              {getSub && <span className="stg-seg-s">{getSub(it)}</span>}
            </button>
          )
        })}
        <button
          type="button"
          className={`stg-seg-btn ${!isPreset || customOpen ? 'on' : ''}`}
          onClick={openCustom}
        >
          <span className="stg-seg-l">Custom</span>
        </button>
      </div>
      {(!isPreset || customOpen) && (
        <div className="stg-seg-custom">
          <input
            ref={inputRef}
            type={customType === 'number' ? 'number' : 'text'}
            className="stg-seg-custom-input"
            value={draft}
            placeholder={customPlaceholder || (customType === 'number' ? '0' : 'custom')}
            onChange={e => setDraft(e.target.value)}
            onBlur={e => commit(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') commit(draft)
              if (e.key === 'Escape') {
                setCustomOpen(false)
                setDraft('')
              }
            }}
          />
          {customSuffix && <span className="stg-seg-custom-suffix">{customSuffix}</span>}
        </div>
      )}
    </>
  )
}

function RangeSlider({ min, max, step, value, onChange, suffix }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100))

  const commit = raw => {
    const n = parseInt(raw, 10)
    if (!Number.isNaN(n) && n >= 0) onChange(n)
    setEditing(false)
  }

  return (
    <div className="stg-range">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(Math.max(value, min), max)}
        onChange={e => onChange(+e.target.value)}
        className="stg-range-input"
        style={{ '--pct': `${pct}%` }}
      />
      {editing ? (
        <input
          type="number"
          className="stg-range-edit"
          value={draft}
          min={0}
          autoFocus
          onChange={e => setDraft(e.target.value)}
          onBlur={e => commit(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') commit(e.target.value)
            if (e.key === 'Escape') setEditing(false)
          }}
        />
      ) : (
        <span
          className="stg-range-val stg-range-val--editable"
          onClick={() => {
            setDraft(String(value))
            setEditing(true)
          }}
          title="Click to enter a custom value"
        >
          {value}
          <span>{suffix}</span>
        </span>
      )}
    </div>
  )
}

function LabelRow({ label, children }) {
  return (
    <div className="stg-lbl-row">
      <span className="stg-lbl-k">{label}</span>
      <span className="stg-lbl-v">{children}</span>
    </div>
  )
}

function DayPicker({ value, onChange }) {
  return (
    <div className="stg-day">
      {[1, 2, 3, 4, 5, 6, 7].map(n => (
        <button
          key={n}
          type="button"
          className={`stg-day-btn ${n <= value ? 'on' : ''}`}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
      <span className="stg-day-v">
        {value} DAY{value === 1 ? '' : 'S'}/WEEK
      </span>
    </div>
  )
}

// DIAL

export function ProfileBadge() {
  const settings = useSettings()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const initial = (settings.displayName || ' ').slice(0, 1).toUpperCase()
  const profiles = settings.profiles || []

  useEffect(() => {
    if (!open) return
    const onDocClick = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const handleSwitch = id => {
    switchProfile(id)
    setOpen(false)
  }
  const handleAdd = () => {
    window.dispatchEvent(new CustomEvent('aether:toggle-settings', { detail: { tab: 'account' } }))
    setOpen(false)
  }

  return (
    <div className="stg-profile-wrap" ref={wrapRef}>
      <button
        type="button"
        className="stg-profile-badge"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Profile: ${settings.displayName} (${settings.handle}) - switch profile`}
        style={{
          backgroundColor: settings.avatarColor,
          backgroundImage: settings.avatarImage ? `url(${settings.avatarImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {!settings.avatarImage && <span>{initial}</span>}
      </button>
      {open && (
        <div className="stg-profile-menu" role="menu">
          {profiles.map(p => {
            const isActive = p.id === settings.activeProfileId
            const init = (p.displayName || ' ').slice(0, 1).toUpperCase()
            return (
              <button
                key={p.id}
                type="button"
                role="menuitem"
                className={`stg-profile-menu-item${isActive ? ' active' : ''}`}
                onClick={() => handleSwitch(p.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className="stg-profile-menu-avatar"
                  style={{
                    backgroundColor: p.avatarColor,
                    backgroundImage: p.avatarImage ? `url(${p.avatarImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {!p.avatarImage && <span>{init}</span>}
                </span>
                <span className="stg-profile-menu-text">
                  <span className="stg-profile-menu-name">{p.displayName}</span>
                  <span className="stg-profile-menu-handle">{p.handle}</span>
                </span>
                {isActive && (
                  <span className="stg-profile-menu-tick" aria-hidden="true">
                    ●
                  </span>
                )}
              </button>
            )
          })}
          <button
            type="button"
            role="menuitem"
            className="stg-profile-menu-add"
            onClick={handleAdd}
          >
            <span className="stg-profile-menu-plus" aria-hidden="true">
              +
            </span>
            <span>ADD PROFILE</span>
          </button>
        </div>
      )}
    </div>
  )
}

export function SettingsDial({ onOpen }) {
  return (
    <button type="button" className="stg-dial" onClick={onOpen} aria-label="Open settings (Cmd+,)">
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  )
}

function FontDropZone({ fontName, isActive, onLoad, onClear }) {
  const [dragging, setDragging] = useState(false)
  const fileRef = useRef(null)

  const processFile = file => {
    if (!file) return
    const ext = file.name.split('.').pop().toLowerCase()
    if (!['ttf', 'otf', 'woff', 'woff2'].includes(ext)) return
    const name = file.name.replace(/\.[^.]+$/, '')
    const reader = new FileReader()
    reader.onload = e => {
      try {
        localStorage.setItem(FONT_DATA_KEY, e.target.result)
      } catch {}
      onLoad(name)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div
      className={`stg-tf-drop${isActive ? ' active' : ''}${dragging ? ' dragging' : ''}`}
      onDragOver={e => {
        e.preventDefault()
        setDragging(true)
      }}
      onDragLeave={e => {
        if (!e.currentTarget.contains(e.relatedTarget)) setDragging(false)
      }}
      onDrop={e => {
        e.preventDefault()
        setDragging(false)
        processFile(e.dataTransfer.files[0])
      }}
      onClick={() => !fontName && fileRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && !fontName && fileRef.current?.click()}
      aria-label={fontName ? `Custom font: ${fontName}` : 'Drop a font file here'}
    >
      <input
        ref={fileRef}
        type="file"
        accept=".ttf,.otf,.woff,.woff2"
        style={{ display: 'none' }}
        onChange={e => processFile(e.target.files[0])}
      />
      {fontName ? (
        <>
          <span className="stg-tf-drop-name" style={{ fontFamily: `"${fontName}", sans-serif` }}>
            {fontName}
          </span>
          <span className="stg-tf-drop-preview" style={{ fontFamily: `"${fontName}", sans-serif` }}>
            The quick brown fox
          </span>
          <button
            type="button"
            className="stg-tf-drop-clear"
            onClick={e => {
              e.stopPropagation()
              onClear()
            }}
            aria-label="Remove custom font"
          >
            ×
          </button>
          <span className="stg-tf-check" aria-hidden="true">
            <span />
          </span>
        </>
      ) : (
        <>
          <svg
            className="stg-tf-drop-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 10V4M5 7l3-3 3 3" />
            <path d="M2 13h12" />
          </svg>
          <span className="stg-tf-drop-hint">DROP FONT FILE</span>
          <span className="stg-tf-drop-sub">TTF · OTF · WOFF · WOFF2</span>
        </>
      )}
    </div>
  )
}

// APPEARANCE PANE - uses existing Motion/Density/TextScale below

function MotionControl({ value, onChange }) {
  const [play, setPlay] = useState(0)
  return (
    <div className="stg-motion">
      <div className="stg-radio">
        {MOTION.map(it => (
          <button
            key={it.id}
            type="button"
            className={`stg-radio-row ${value === it.id ? 'active' : ''}`}
            onClick={() => {
              onChange(it.id)
              setPlay(p => p + 1)
            }}
          >
            <span className="stg-radio-mark" aria-hidden="true">
              <span className="stg-radio-dot" />
            </span>
            <div className="stg-radio-text">
              <span className="stg-radio-name">{it.name}</span>
              <span className="stg-radio-sub">{it.sub}</span>
            </div>
            <span className="stg-motion-dur">{it.dur === 0 ? '0MS' : `${it.dur}MS`}</span>
          </button>
        ))}
      </div>
      <div className="stg-motion-demo" key={play + value}>
        <span className="stg-motion-demo-k">TRACE</span>
        <div className="stg-motion-track" data-motion-demo={value}>
          <span className="stg-motion-orb" />
        </div>
      </div>
    </div>
  )
}

function DensityControl({ value, onChange }) {
  return (
    <div className="stg-density">
      {DENSITY.map(d => (
        <button
          key={d.id}
          type="button"
          className={`stg-density-card ${value === d.id ? 'active' : ''}`}
          onClick={() => onChange(d.id)}
        >
          <div className="stg-density-viz" data-density-viz={d.id}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="stg-density-bar" />
            ))}
          </div>
          <div className="stg-density-meta">
            <span className="stg-density-name">{d.name}</span>
            <span className="stg-density-sub">{d.sub}</span>
          </div>
          <span className="stg-density-check" aria-hidden="true">
            <span />
          </span>
        </button>
      ))}
    </div>
  )
}

function TextScale({ value, onChange }) {
  const TICKS = [85, 90, 95, 100, 105, 110, 115, 120, 125]
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const clampedPct = Math.max(0, Math.min(100, ((value - 85) / 40) * 100))

  const commitScale = raw => {
    const n = parseInt(raw, 10)
    if (!isNaN(n) && n > 0) onChange(n)
    setEditing(false)
  }

  return (
    <div className="stg-scale">
      <div className="stg-scale-row">
        <button
          type="button"
          className="stg-scale-btn"
          onClick={() => onChange(value - 5)}
          aria-label="Decrease text size"
        >
          <span className="stg-scale-a" style={{ fontSize: 10 }}>
            A
          </span>
          <span className="stg-scale-sign">−</span>
        </button>
        <div
          className="stg-scale-track"
          role="slider"
          aria-valuemin={85}
          aria-valuemax={125}
          aria-valuenow={value}
        >
          <div className="stg-scale-fill" style={{ width: `${clampedPct}%` }} />
          <div className="stg-scale-head" style={{ left: `${clampedPct}%` }}>
            <span className="stg-scale-head-bar" />
          </div>
          {TICKS.map(v => (
            <button
              key={v}
              type="button"
              className={`stg-scale-tick ${value === v ? 'on' : ''} ${v === 100 ? 'anchor' : ''}`}
              style={{ left: `${((v - 85) / 40) * 100}%` }}
              onClick={() => onChange(v)}
              aria-label={`${v}%`}
            />
          ))}
          <div className="stg-scale-labels">
            <span>85</span>
            <span>100</span>
            <span>125</span>
          </div>
        </div>
        <button
          type="button"
          className="stg-scale-btn"
          onClick={() => onChange(value + 5)}
          aria-label="Increase text size"
        >
          <span className="stg-scale-a" style={{ fontSize: 14 }}>
            A
          </span>
          <span className="stg-scale-sign">+</span>
        </button>
        {editing ? (
          <span className="stg-scale-val">
            <input
              type="number"
              className="stg-range-edit"
              value={draft}
              min={1}
              autoFocus
              onChange={e => setDraft(e.target.value)}
              onBlur={e => commitScale(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') commitScale(draft)
                if (e.key === 'Escape') setEditing(false)
              }}
            />
            <span className="stg-scale-val-u">%</span>
          </span>
        ) : (
          <span
            className="stg-scale-val stg-range-val--editable"
            onClick={() => {
              setDraft(String(value))
              setEditing(true)
            }}
            title="Click to enter a custom value"
          >
            <span className="stg-scale-val-n">{value}</span>
            <span className="stg-scale-val-u">%</span>
          </span>
        )}
      </div>
      <div className="stg-scale-specimen" style={{ fontSize: (15 * value) / 100 }}>
        The interface type-scale cascades from this anchor - 45 to 75 characters per line at 100%.
      </div>
    </div>
  )
}

// COLOR PICKER

function hex2hsv(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min
  let h = 0
  if (d) {
    if (max === r) h = ((g - b) / d + 6) % 6
    else if (max === g) h = (b - r) / d + 2
    else h = (r - g) / d + 4
    h = Math.round(h * 60)
  }
  return { h, s: max ? Math.round((d / max) * 100) : 0, v: Math.round(max * 100) }
}

function hsv2hex(h, s, v) {
  s /= 100
  v /= 100
  const f = n => {
    const k = (n + h / 60) % 6
    return Math.round((v - v * s * Math.max(0, Math.min(k, 4 - k, 1))) * 255)
      .toString(16)
      .padStart(2, '0')
  }
  return `#${f(5)}${f(3)}${f(1)}`
}

function ColorPicker({ value, onChange, onClose }) {
  const init = useMemo(() => hex2hsv(/^#[0-9a-fA-F]{6}$/.test(value) ? value : '#3b9eff'), [])
  const [h, setH] = useState(init.h)
  const [sv, setSv] = useState({ s: init.s, v: init.v })
  const [hexInput, setHexInput] = useState(value || '#3b9eff')
  const sqRef = useRef(null)
  const hueRef = useRef(null)

  function commit(nh, ns, nv) {
    setH(nh)
    setSv({ s: ns, v: nv })
    const hex = hsv2hex(nh, ns, nv)
    setHexInput(hex)
    onChange(hex)
  }

  function pickSq(e) {
    const r = sqRef.current.getBoundingClientRect()
    const nx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))
    const ny = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height))
    commit(h, Math.round(nx * 100), Math.round((1 - ny) * 100))
  }

  function pickHue(e) {
    const r = hueRef.current.getBoundingClientRect()
    const nx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width))
    commit(Math.round(nx * 360), sv.s, sv.v)
  }

  function handleHexChange(e) {
    setHexInput(e.target.value)
  }

  function commitHex(raw) {
    const val = raw.startsWith('#') ? raw : `#${raw}`
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      const parsed = hex2hsv(val)
      setH(parsed.h)
      setSv({ s: parsed.s, v: parsed.v })
      setHexInput(val)
      onChange(val)
    }
  }

  function handleHexKey(e) {
    if (e.key === 'Enter') {
      commitHex(hexInput)
      onClose?.()
    }
  }

  return (
    <div className="stg-cpick">
      <div
        ref={sqRef}
        className="stg-cpick-sq"
        style={{ '--ch': h }}
        onPointerDown={e => {
          e.currentTarget.setPointerCapture(e.pointerId)
          pickSq(e)
        }}
        onPointerMove={e => e.buttons && pickSq(e)}
      >
        <div className="stg-cpick-dot" style={{ left: `${sv.s}%`, top: `${100 - sv.v}%` }} />
      </div>
      <div
        ref={hueRef}
        className="stg-cpick-hue"
        onPointerDown={e => {
          e.currentTarget.setPointerCapture(e.pointerId)
          pickHue(e)
        }}
        onPointerMove={e => e.buttons && pickHue(e)}
      >
        <div className="stg-cpick-hue-dot" style={{ left: `${(h / 360) * 100}%` }} />
      </div>
      <div className="stg-cpick-bottom">
        <div className="stg-cpick-preview" style={{ background: hsv2hex(h, sv.s, sv.v) }} />
        <input
          type="text"
          className="stg-cpick-hex"
          value={hexInput}
          onChange={handleHexChange}
          onKeyDown={handleHexKey}
          spellCheck={false}
          maxLength={7}
          placeholder="#000000"
        />
        <button
          type="button"
          className="stg-cpick-apply"
          onClick={() => {
            commitHex(hexInput)
            onClose?.()
          }}
          aria-label="Apply color"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

// PANES

function AppearancePane({ s, theme, setTheme, matches }) {
  const typefaceId = typefaceFromAether(s.fontFamily)
  const motionId = motionFromAether(s.reducedMotion || 'system')
  const [showAccentAdv, setShowAccentAdv] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  return (
    <div className="stg-pane">
      {matches('theme palette') && (
        <Group label="01" title="Theme" sub="Base palette. Applies across every screen.">
          <div className="stg-theme-grid">
            {THEMES.map(t => (
              <button
                key={t.id}
                type="button"
                className={`stg-theme ${theme === t.id ? 'active' : ''}`}
                onClick={() => setTheme(t.id)}
                aria-pressed={theme === t.id}
              >
                <div
                  className="stg-theme-swatch"
                  style={{ background: t.swatch.bg, color: t.swatch.fg }}
                >
                  <svg viewBox="0 0 120 72" preserveAspectRatio="none" width="100%" height="100%">
                    <g stroke={t.swatch.fg} strokeOpacity="0.08" strokeWidth="0.5">
                      <line x1="0" y1="18" x2="120" y2="18" />
                      <line x1="0" y1="36" x2="120" y2="36" />
                      <line x1="0" y1="54" x2="120" y2="54" />
                      <line x1="30" y1="0" x2="30" y2="72" />
                      <line x1="60" y1="0" x2="60" y2="72" />
                      <line x1="90" y1="0" x2="90" y2="72" />
                    </g>
                    <rect x="6" y="6" width="48" height="2" fill={t.swatch.fg} opacity="0.85" />
                    <rect x="6" y="10" width="30" height="1" fill={t.swatch.fg} opacity="0.4" />
                    <rect x="6" y="24" width="108" height="1" fill={t.swatch.fg} opacity="0.25" />
                    <rect x="6" y="28" width="70" height="2" fill={t.swatch.fg} opacity="0.7" />
                    <rect x="100" y="28" width="14" height="2" fill={t.swatch.accent} />
                    <rect x="6" y="38" width="108" height="1" fill={t.swatch.fg} opacity="0.25" />
                    <rect x="6" y="42" width="60" height="2" fill={t.swatch.fg} opacity="0.7" />
                    <rect x="6" y="52" width="108" height="1" fill={t.swatch.fg} opacity="0.25" />
                    <rect x="6" y="56" width="82" height="2" fill={t.swatch.fg} opacity="0.7" />
                    <circle cx="112" cy="9" r="1.6" fill={t.swatch.accent} />
                  </svg>
                </div>
                <div className="stg-theme-meta">
                  <div className="stg-theme-row">
                    <span className="stg-theme-name">{t.name}</span>
                    <span className="stg-theme-id">{t.short}</span>
                  </div>
                  <span className="stg-theme-sub">{t.sub}</span>
                </div>
                <span className="stg-theme-check" aria-hidden="true">
                  <span />
                </span>
              </button>
            ))}
          </div>
        </Group>
      )}

      {matches('accent color') && (
        <Group
          label="02"
          title="Accent"
          sub="Single semantic color. Used for focus rings, active states, signature moments."
        >
          <div className="stg-accent-row">
            {ACCENTS.map(a => (
              <button
                key={a.id}
                type="button"
                className={`stg-accent ${s.accent === a.id ? 'active' : ''}`}
                style={{
                  '--swatch':
                    a.id === 'theme'
                      ? THEMES.find(t => t.id === theme)?.swatch.fg || '#e0e0e4'
                      : a.id === 'custom'
                        ? s.accentColor || '#3b82f6'
                        : a.css
                }}
                onClick={() => {
                  set('accent', a.id)
                  if (a.id === 'custom') setShowPicker(true)
                }}
                aria-label={a.name}
              >
                <span className="stg-accent-sw" />
                <span className="stg-accent-n">{a.name}</span>
              </button>
            ))}
          </div>
          {s.accent === 'custom' && showPicker && (
            <ColorPicker
              value={s.accentColor || '#3b82f6'}
              onChange={v => set('accentColor', v)}
              onClose={() => setShowPicker(false)}
            />
          )}
          <button
            type="button"
            className="stg-accent-adv-toggle"
            onClick={() => setShowAccentAdv(v => !v)}
            aria-expanded={showAccentAdv}
          >
            <span>Advanced</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{
                transform: showAccentAdv ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s'
              }}
            >
              <path
                d="M1 3l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {showAccentAdv && (
            <>
              <span className="stg-adv-cat">Chrome</span>
              <ToggleRow
                name="Sidebar"
                sub="Active sections, mode buttons, section headers."
                value={s.accentSidebar !== false}
                onChange={v => set('accentSidebar', v)}
              />
              <ToggleRow
                name="Progress bars"
                sub="Fill bars in sidebar and curriculum tracker."
                value={s.accentProgress !== false}
                onChange={v => set('accentProgress', v)}
              />
              <ToggleRow
                name="Topbar"
                sub="Icon hover, breadcrumb active, mode switch indicator."
                value={s.accentTopbar !== false}
                onChange={v => set('accentTopbar', v)}
              />
              <ToggleRow
                name="Navigation"
                sub="Category nav, track map, settings swatches and tabs."
                value={s.accentPageNav !== false}
                onChange={v => set('accentPageNav', v)}
              />
              <span className="stg-adv-cat">Content boxes</span>
              <ToggleRow
                name="Equations & proofs"
                sub="lrn-eq and lrn-proof box outlines."
                value={s.accentEquations !== false}
                onChange={v => set('accentEquations', v)}
              />
              <ToggleRow
                name="Algorithms & definitions"
                sub="Algorithm, compare column, definition, and graph outlines."
                value={s.accentAlgorithms !== false}
                onChange={v => set('accentAlgorithms', v)}
              />
              <span className="stg-adv-cat">Editorial</span>
              <ToggleRow
                name="Headings"
                sub="h2 and h3 across Learn, Solve, and Reference modes."
                value={s.accentHeadings !== false}
                onChange={v => set('accentHeadings', v)}
              />
              <ToggleRow
                name="Dividers & labels"
                sub="Section lines, module labels, and content headers."
                value={s.accentDividers !== false}
                onChange={v => set('accentDividers', v)}
              />
              <ToggleRow
                name="Insights"
                sub="Insight callout left border and background tint."
                value={s.accentInsights !== false}
                onChange={v => set('accentInsights', v)}
              />
            </>
          )}
        </Group>
      )}

      {matches('typeface font') && (
        <Group
          label="03"
          title="Typeface"
          sub="Default technical face, dyslexia-friendly, or drag and drop any font file."
        >
          <div className="stg-tf-grid">
            {TYPEFACES.map(t => (
              <button
                key={t.id}
                type="button"
                className={`stg-tf ${typefaceId === t.id && s.fontFamily !== 'custom' ? 'active' : ''}`}
                onClick={() => set('fontFamily', typefaceToAether(t.id))}
                aria-pressed={typefaceId === t.id && s.fontFamily !== 'custom'}
              >
                <span className={`stg-tf-spec ${t.id === 'dyslexic' ? 'stg-tf-dys' : ''}`}>
                  {t.spec}
                </span>
                <span className="stg-tf-meta">
                  <span className="stg-tf-name">{t.name}</span>
                  <span className="stg-tf-sub">{t.sub}</span>
                  <span className={`stg-tf-sample ${t.id === 'dyslexic' ? 'stg-tf-dys' : ''}`}>
                    The quick brown fox
                  </span>
                </span>
                <span className="stg-tf-check" aria-hidden="true">
                  <span />
                </span>
              </button>
            ))}
          </div>
          <FontDropZone
            fontName={s.fontFamily === 'custom' ? s.fontFamilyCustom || '' : ''}
            isActive={s.fontFamily === 'custom'}
            onLoad={name => {
              set('fontFamily', 'custom')
              set('fontFamilyCustom', name)
            }}
            onClear={() => {
              localStorage.removeItem(FONT_DATA_KEY)
              set('fontFamily', 'sans-serif')
              set('fontFamilyCustom', '')
            }}
          />
        </Group>
      )}

      {matches('motion transitions') && (
        <Group label="04" title="Motion" sub="Signature transitions sit at 150–300ms.">
          <MotionControl
            value={motionId}
            onChange={id => set('reducedMotion', motionToAether(id))}
          />
        </Group>
      )}

      {matches('density spacing') && (
        <Group label="05" title="Density" sub="Spacing rhythm of rows and meta.">
          <DensityControl value={s.density || 'comfortable'} onChange={id => set('density', id)} />
        </Group>
      )}

      {matches('text scale size') && (
        <Group
          label="06"
          title="Text scale"
          sub="Body measure tuned to 45–75 characters per line at 100%."
        >
          <TextScale value={s.textScale ?? 100} onChange={v => set('textScale', v)} />
        </Group>
      )}

      {matches('chrome grid overlay') && (
        <Group
          label="07"
          title="Interface chrome"
          sub="Graph-paper overlay and empty domain visibility."
        >
          <ToggleRow
            name="Grid overlay"
            sub="Subtle 50px graph-paper grid."
            value={s.gridOverlay}
            onChange={v => set('gridOverlay', v)}
          />
          <ToggleRow
            name="Show empty domains"
            sub="Display subjects with no content yet in the sidebar."
            value={s.showEmptyDomains}
            onChange={v => set('showEmptyDomains', v)}
          />
        </Group>
      )}

      {matches('topbar action icons shortcuts hints pomodoro') && (
        <Group label="08" title="Topbar" sub="Trim the action cluster on learning pages.">
          <ToggleRow
            name="Pomodoro"
            sub="Hourglass icon for the Pomodoro timer."
            value={s.pomodoro}
            onChange={v => set('pomodoro', v)}
          />
          <ToggleRow
            name="Search"
            sub="Magnifier icon that opens command palette."
            value={s.topbarShowSearch}
            onChange={v => set('topbarShowSearch', v)}
          />
          <ToggleRow
            name="Focus mode"
            sub="Brackets icon that hides chrome for distraction-free reading."
            value={s.topbarShowFocusMode}
            onChange={v => set('topbarShowFocusMode', v)}
          />
          <ToggleRow
            name="Keyboard shortcuts"
            sub="Card icon that opens the cheatsheet."
            value={s.topbarShowShortcuts}
            onChange={v => set('topbarShowShortcuts', v)}
          />
          <ToggleRow
            name="Download"
            sub="Arrow icon that prints the page as PDF."
            value={s.topbarShowDownload}
            onChange={v => set('topbarShowDownload', v)}
          />
          <ToggleRow
            name="Settings"
            sub="Gear icon that opens this panel."
            value={s.topbarShowSettings}
            onChange={v => set('topbarShowSettings', v)}
          />
          <ToggleRow
            name="Shortcut hints"
            sub="Small ⌘K, F, ?, ⌘P glyphs under each icon."
            value={s.topbarShowHints}
            onChange={v => set('topbarShowHints', v)}
          />
        </Group>
      )}
    </div>
  )
}

function ReadingPane({ s, matches }) {
  return (
    <div className="stg-pane">
      {matches('measure width reading') && (
        <Group
          label="01"
          title="Measure"
          sub="Characters per line. Keep between 45–80 for comfortable reading."
        >
          <SegmentedCustom
            items={READ_WIDTHS}
            value={
              s.contentWidth === 'custom' ? s.contentWidthCustom || '' : s.contentWidth || 'medium'
            }
            getId={x => x.id}
            getLabel={x => x.name}
            getSub={x => x.sub}
            onChange={v => {
              if (READ_WIDTHS.some(x => x.id === v)) {
                set('contentWidth', v)
              } else {
                set('contentWidth', 'custom')
                set('contentWidthCustom', v)
              }
            }}
            customType="text"
            customPlaceholder="e.g. 55ch"
          />
        </Group>
      )}
      {matches('line height leading') && (
        <Group
          label="02"
          title="Line height"
          sub="Leading. Tighter for scanning; looser for long-form."
        >
          <SegmentedCustom
            items={LINE_HEIGHTS}
            value={s.lineHeight || 1.625}
            getId={x => x.id}
            getLabel={x => x.name}
            getSub={x => String(Number(x.id).toFixed(2))}
            onChange={v => set('lineHeight', typeof v === 'number' ? v : parseFloat(v) || 1.625)}
            customType="number"
            customPlaceholder="1.9"
          />
        </Group>
      )}
      {matches('letter tracking spacing') && (
        <Group
          label="03"
          title="Letter spacing"
          sub="Tracking. Negative tightens headings; positive opens body copy."
        >
          <RangeSlider
            min={-0.02}
            max={0.05}
            step={0.005}
            suffix="em"
            value={s.letterSpacing ?? 0}
            onChange={v => set('letterSpacing', +v.toFixed(3))}
          />
        </Group>
      )}
      {matches('word spacing') && (
        <Group label="04" title="Word spacing" sub="Extra space between words. 0 is the default.">
          <RangeSlider
            min={0}
            max={0.2}
            step={0.01}
            suffix="em"
            value={s.wordSpacing ?? 0}
            onChange={v => set('wordSpacing', +v.toFixed(3))}
          />
        </Group>
      )}
      {matches('paragraph spacing') && (
        <Group
          label="05"
          title="Paragraph spacing"
          sub="Multiplier on the 24px base gap between paragraphs."
        >
          <RangeSlider
            min={0.5}
            max={3}
            step={0.25}
            suffix="×"
            value={s.paragraphSpacing ?? 1.5}
            onChange={v => set('paragraphSpacing', v)}
          />
        </Group>
      )}
      {matches('reading aids progress scroll') && (
        <Group label="06" title="Reading aids" sub="Tools that assist long-form study.">
          <ToggleRow
            name="Ruler on hover"
            sub="Highlights the current line while reading."
            value={s.rulerOnHover}
            onChange={v => set('rulerOnHover', v)}
          />
          <ToggleRow
            name="Dyslexia tint"
            sub="Warm cream overlay. Reduces glare, improves tracking."
            value={s.dyslexiaTint}
            onChange={v => set('dyslexiaTint', v)}
          />
          <ToggleRow
            name="Justify body text"
            sub="Full justification. Recommended only at wider measures."
            value={s.justify}
            onChange={v => set('justify', v)}
          />
          <LabelRow label="Scroll progress">
            <Segmented
              items={[
                { id: 'percentage', name: 'Percent' },
                { id: 'time-remaining', name: 'Time left' },
                { id: 'off', name: 'Off' }
              ]}
              value={s.readingProgress}
              getId={x => x.id}
              getLabel={x => x.name}
              onChange={v => set('readingProgress', v)}
              compact
            />
          </LabelRow>
        </Group>
      )}
    </div>
  )
}

function LearningPane({ s, matches }) {
  return (
    <div className="stg-pane">
      {matches('difficulty pace retention interval') && (
        <Group
          label="01"
          title="Difficulty"
          sub="The adaptive engine scales to your demonstrated mastery."
        >
          <div className="stg-radio">
            {DIFFICULTY.map(d => (
              <button
                key={d.id}
                type="button"
                className={`stg-radio-row ${s.difficulty === d.id ? 'active' : ''}`}
                onClick={() => set('difficulty', d.id)}
              >
                <span className="stg-radio-mark" aria-hidden="true">
                  <span className="stg-radio-dot" />
                </span>
                <div className="stg-radio-text">
                  <span className="stg-radio-name">{d.name}</span>
                  <span className="stg-radio-sub">{d.sub}</span>
                </div>
              </button>
            ))}
          </div>
          <LabelRow label="Target retention">
            <input
              type="number"
              className="stg-input"
              min={50}
              max={99}
              step={1}
              placeholder="90"
              value={Math.round(s.desiredRetention * 100)}
              onChange={e => {
                const v = parseInt(e.target.value, 10)
                if (!isNaN(v)) set('desiredRetention', Math.min(0.99, Math.max(0.5, v / 100)))
              }}
            />
          </LabelRow>
          <LabelRow label="Max interval">
            <input
              type="number"
              className="stg-input"
              min={1}
              step={1}
              placeholder="365"
              value={s.maxInterval}
              onChange={e => {
                const v = parseInt(e.target.value, 10)
                if (!isNaN(v)) set('maxInterval', Math.max(1, v))
              }}
            />
          </LabelRow>
        </Group>
      )}
      {matches('pedagogy practice timer auto advance review') && (
        <Group label="02" title="Pedagogy" sub="How sessions are structured.">
          <ToggleRow
            name="Spaced repetition"
            sub="Revisit concepts at scientifically-optimal intervals."
            value={s.spacedRepetition}
            onChange={v => set('spacedRepetition', v)}
          />
          <ToggleRow
            name="Interleaved practice"
            sub="Mix topics within a session. Boosts retention; feels harder."
            value={s.interleave}
            onChange={v => set('interleave', v)}
          />
          <ToggleRow
            name="Hints"
            sub="Show progressive hints on exercises."
            value={s.showHints}
            onChange={v => set('showHints', v)}
          />
          <ToggleRow
            name="Check for understanding"
            sub="Insert quick quizzes between lectures."
            value={s.checkUnderstanding}
            onChange={v => set('checkUnderstanding', v)}
          />
          <ToggleRow
            name="Search web"
            sub="Show a Google search button on each practice card."
            value={s.searchWeb}
            onChange={v => set('searchWeb', v)}
          />
          <ToggleRow
            name="Auto-advance"
            sub="Reveal the answer automatically after a delay."
            value={s.autoAdvance}
            onChange={v => set('autoAdvance', v)}
          />
          {s.autoAdvance && (
            <LabelRow label="Delay">
              <input
                type="number"
                className="stg-input"
                min={0.5}
                max={10}
                step={0.5}
                placeholder="1.5"
                value={s.autoAdvanceDelay}
                onChange={e => {
                  const v = parseFloat(e.target.value)
                  if (!isNaN(v)) set('autoAdvanceDelay', Math.max(0.5, v))
                }}
              />
            </LabelRow>
          )}
          <ToggleRow
            name="Review timer"
            sub="Show elapsed seconds on each practice card."
            value={s.showReviewTimer}
            onChange={v => set('showReviewTimer', v)}
          />
        </Group>
      )}
      {matches('formula render math code speech') && (
        <Group label="04" title="Rendering" sub="How formulas and code display.">
          <LabelRow label="Formula engine">
            <Segmented
              items={[
                { id: 'katex', name: 'KaTeX' },
                { id: 'mathml', name: 'MathML' },
                { id: 'ascii', name: 'ASCII' }
              ]}
              value={s.formulaRender}
              getId={x => x.id}
              getLabel={x => x.name}
              onChange={v => set('formulaRender', v)}
              compact
            />
          </LabelRow>
          <LabelRow label="Code theme">
            <Segmented
              items={[
                { id: 'mono', name: 'Mono' },
                { id: 'syntax', name: 'Syntax' },
                { id: 'contrast', name: 'Contrast' }
              ]}
              value={s.codeTheme}
              getId={x => x.id}
              getLabel={x => x.name}
              onChange={v => set('codeTheme', v)}
              compact
            />
          </LabelRow>
          <LabelRow label="Math speech">
            <Segmented
              items={[
                { id: 'ClearSpeak', name: 'ClearSpeak' },
                { id: 'MathSpeak', name: 'MathSpeak' }
              ]}
              value={s.mathSpeechStyle}
              getId={x => x.id}
              getLabel={x => x.name}
              onChange={v => set('mathSpeechStyle', v)}
              compact
            />
          </LabelRow>
        </Group>
      )}
      {matches('card limits new reviews daily') && (
        <Group label="06" title="Card limits" sub="Max cards per day. Leave blank for unlimited.">
          <LabelRow label="New cards">
            <input
              type="number"
              className="stg-input"
              min={1}
              step={1}
              placeholder="∞"
              value={s.newCardsPerDay === Infinity ? '' : s.newCardsPerDay}
              onChange={e => {
                const v = e.target.value
                set('newCardsPerDay', v === '' ? Infinity : Math.max(1, parseInt(v, 10) || 1))
              }}
            />
          </LabelRow>
          <LabelRow label="Reviews">
            <input
              type="number"
              className="stg-input"
              min={1}
              step={1}
              placeholder="∞"
              value={s.maxReviewsPerDay === Infinity ? '' : s.maxReviewsPerDay}
              onChange={e => {
                const v = e.target.value
                set('maxReviewsPerDay', v === '' ? Infinity : Math.max(1, parseInt(v, 10) || 1))
              }}
            />
          </LabelRow>
        </Group>
      )}
      {matches('pomodoro timer') && (
        <Group
          label="07"
          title="Pomodoro"
          sub="Hourglass icon in the topbar. Configure intervals below."
        >
          <ToggleRow
            name="Pomodoro timer"
            sub="Enable the focus timer."
            value={s.pomodoro}
            onChange={v => set('pomodoro', v)}
          />
        </Group>
      )}
      {s.pomodoro && matches('pomodoro focus break interval auto') && (
        <Group label="08" title="Pomodoro intervals" sub="Timer durations and automation.">
          <LabelRow label="FOCUS">
            <RangeSlider
              min={5}
              max={90}
              step={5}
              suffix="min"
              value={s.pomodoroWork}
              onChange={v => set('pomodoroWork', v)}
            />
          </LabelRow>
          <LabelRow label="SHORT BREAK">
            <RangeSlider
              min={1}
              max={30}
              step={1}
              suffix="min"
              value={s.pomodoroBreak}
              onChange={v => set('pomodoroBreak', v)}
            />
          </LabelRow>
          <LabelRow label="LONG BREAK">
            <RangeSlider
              min={5}
              max={60}
              step={5}
              suffix="min"
              value={s.pomodoroLongBreak}
              onChange={v => set('pomodoroLongBreak', v)}
            />
          </LabelRow>
          <LabelRow label="LONG BREAK EVERY">
            <RangeSlider
              min={0}
              max={8}
              step={1}
              suffix={s.pomodoroLongBreakInterval === 0 ? 'off' : 'sessions'}
              value={s.pomodoroLongBreakInterval}
              onChange={v => set('pomodoroLongBreakInterval', v)}
            />
          </LabelRow>
          <ToggleRow
            name="Auto-start breaks"
            sub="Start the break timer automatically when focus ends."
            value={s.pomodoroAutoBreak}
            onChange={v => set('pomodoroAutoBreak', v)}
          />
          <ToggleRow
            name="Auto-start focus"
            sub="Jump into the next focus block when the break ends."
            value={s.pomodoroAutoWork}
            onChange={v => set('pomodoroAutoWork', v)}
          />
        </Group>
      )}
    </div>
  )
}

function NotifPane({ s, matches }) {
  return (
    <div className="stg-pane">
      {matches('channels desktop') && (
        <Group label="01" title="Channels" sub="Where Aether may reach you.">
          <ToggleRow
            name="Desktop notifications"
            sub="Permission required. Silent on quiet hours."
            value={s.notifDesktop}
            onChange={v => set('notifDesktop', v)}
          />
        </Group>
      )}
      {matches('study reminder time') && (
        <Group label="02" title="Study reminder" sub="A nudge at the same time each day.">
          <ToggleRow
            name="Enable reminder"
            sub="Silent push at the chosen time."
            value={s.studyReminder}
            onChange={v => set('studyReminder', v)}
          />
          <LabelRow label="Time">
            <input
              type="time"
              className="stg-time"
              value={s.reminderTime}
              onChange={e => set('reminderTime', e.target.value)}
            />
          </LabelRow>
        </Group>
      )}
      {matches('quiet hours') && (
        <Group label="03" title="Quiet hours" sub="No notifications during this window.">
          <ToggleRow
            name="Quiet hours"
            sub="Muted between the two times below."
            value={s.quietHours}
            onChange={v => set('quietHours', v)}
          />
          <LabelRow label="From">
            <input
              type="time"
              className="stg-time"
              value={s.quietFrom}
              onChange={e => set('quietFrom', e.target.value)}
            />
          </LabelRow>
          <LabelRow label="Until">
            <input
              type="time"
              className="stg-time"
              value={s.quietTo}
              onChange={e => set('quietTo', e.target.value)}
            />
          </LabelRow>
        </Group>
      )}
    </div>
  )
}

function ShortcutRow({ action, overrides, onChange }) {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const combo = effectiveCombo(action.id, overrides)
  const isDefault = !Object.prototype.hasOwnProperty.call(overrides, action.id)
  const conflicts = editing ? [] : findConflicts(action.id, combo, overrides)
  const tokens = comboTokens(combo)

  useEffect(() => {
    if (editing && inputRef.current) inputRef.current.focus()
  }, [editing])

  const onCapture = e => {
    e.preventDefault()
    e.stopPropagation()
    if (e.key === 'Escape') {
      setEditing(false)
      return
    }
    // Ignore pure modifier keys.
    if (['Shift', 'Control', 'Meta', 'Alt'].includes(e.key)) return
    const next = eventToCombo(e)
    if (!next) return
    onChange(action.id, next)
    setEditing(false)
  }

  const reset = e => {
    e.stopPropagation()
    onChange(action.id, null)
  }

  return (
    <div className={`stg-shortcut${editing ? ' is-editing' : ''}`}>
      <span className="stg-shortcut-k">{action.label}</span>
      <span className="stg-shortcut-v">
        {!isDefault && !editing && (
          <button
            type="button"
            className="stg-shortcut-reset"
            onClick={reset}
            aria-label={`Reset ${action.label}`}
          >
            RESET
          </button>
        )}
        {editing ? (
          <>
            <kbd className="is-listening">LISTENING…</kbd>
            <input
              ref={inputRef}
              className="stg-shortcut-capture"
              data-keybind-capture="1"
              onKeyDown={onCapture}
              onBlur={() => setEditing(false)}
              readOnly
              aria-label={`Press a key combination for ${action.label}`}
            />
          </>
        ) : (
          <button
            type="button"
            className="stg-shortcut-edit"
            onClick={() => setEditing(true)}
            aria-label={`Rebind ${action.label}`}
          >
            {tokens.map((tok, i) =>
              tok === 'then' ? (
                <span key={i} className="stg-shortcut-sep">
                  then
                </span>
              ) : (
                <kbd key={i}>{tok}</kbd>
              )
            )}
          </button>
        )}
        {conflicts.length > 0 && (
          <span className="stg-shortcut-conflict">
            CONFLICTS WITH {conflicts.map(c => c.label.toUpperCase()).join(', ')}
          </span>
        )}
      </span>
    </div>
  )
}

function KeyboardPane({ s, matches }) {
  const overrides = s.keybinds || {}
  const onChange = (id, combo) => {
    const next = { ...overrides }
    if (combo == null) delete next[id]
    else next[id] = combo
    set('keybinds', next)
  }
  return (
    <div className="stg-pane">
      {matches('keymap vim') && (
        <Group label="01" title="Input model" sub="Choose the navigation grammar.">
          <Segmented
            items={[
              { id: 'default', name: 'Default' },
              { id: 'vim', name: 'Vim-like' }
            ]}
            value={s.keymap}
            getId={x => x.id}
            getLabel={x => x.name}
            onChange={v => set('keymap', v)}
          />
          <ToggleRow
            name="Vim modal navigation"
            sub="HJKL movement, / search."
            value={s.vimMode}
            onChange={v => set('vimMode', v)}
          />
        </Group>
      )}
      {matches('shortcuts keys') && (
        <Group label="02" title="Shortcuts" sub="Global key bindings. Click a row to rebind.">
          <div className="stg-shortcuts">
            {KEYBIND_ACTIONS.filter(a => !a.hidden).map(action => (
              <ShortcutRow
                key={action.id}
                action={action}
                overrides={overrides}
                onChange={onChange}
              />
            ))}
          </div>
        </Group>
      )}
    </div>
  )
}

function PrivacyPane({ s, matches }) {
  const sessions = useSessionsList()
  const currentId = getCurrentId()
  const hasOthers = sessions.some(x => x.id !== currentId)
  return (
    <div className="stg-pane">
      {matches('cookies sessions') && (
        <Group label="01" title="Sessions" sub="Devices currently signed in to this account.">
          <div className="stg-sessions">
            {sessions.map((sess, i) => {
              const isCurrent = sess.id === currentId
              const idx = String(i + 1).padStart(2, '0')
              return (
                <div className="stg-session" key={sess.id}>
                  <span className="stg-session-n">{idx}</span>
                  <div className="stg-session-t">
                    <span className="stg-session-d">
                      {sess.browser} · {sess.os}
                    </span>
                    <span className="stg-session-m">
                      {isCurrent
                        ? `Current session · Started ${relTime(sess.firstSeen)}`
                        : `Started ${relTime(sess.firstSeen)} · Active ${relTime(sess.lastSeen)}`}
                    </span>
                  </div>
                  {isCurrent ? (
                    <span className="stg-session-tag">ACTIVE</span>
                  ) : (
                    <button
                      type="button"
                      className="stg-session-remove"
                      onClick={() => removeSession(sess.id)}
                    >
                      REMOVE
                    </button>
                  )}
                </div>
              )
            })}
          </div>
          {hasOthers && (
            <button
              type="button"
              className="stg-danger"
              onClick={removeOtherSessions}
              style={{ marginTop: 12 }}
            >
              SIGN OUT OF ALL OTHER DEVICES
            </button>
          )}
          <button
            type="button"
            className="stg-danger"
            onClick={signOutThisDevice}
            style={{ marginTop: 12 }}
          >
            SIGN OUT OF THIS DEVICE
          </button>
        </Group>
      )}
    </div>
  )
}

function processAvatarFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(reader.error)
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error('image decode failed'))
      img.onload = () => {
        const SIZE = 128
        const canvas = document.createElement('canvas')
        canvas.width = SIZE
        canvas.height = SIZE
        const ctx = canvas.getContext('2d')
        const scale = Math.max(SIZE / img.width, SIZE / img.height)
        const dw = img.width * scale
        const dh = img.height * scale
        ctx.drawImage(img, (SIZE - dw) / 2, (SIZE - dh) / 2, dw, dh)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

function AccountPane({ s }) {
  const profiles = s.profiles || []
  const activeId = s.activeProfileId
  const canDelete = profiles.length > 1
  const [hexDraft, setHexDraft] = useState(s.avatarColor)
  useEffect(() => {
    setHexDraft(s.avatarColor)
  }, [s.avatarColor, activeId])

  const onPickAvatar = async e => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    try {
      const dataUrl = await processAvatarFile(file)
      set('avatarImage', dataUrl)
    } catch (err) {
      console.error('avatar upload failed', err)
    }
  }

  const onAddProfile = () => {
    const n = profiles.length + 1
    addProfile({ displayName: `Operator ${n}`, handle: `@operator${n}` })
  }

  const onDeleteProfile = () => {
    if (!canDelete) return
    removeProfile(activeId)
  }

  const PRESET_HUES = ['#e6e6e8', '#3b9eff', '#50c878', '#ffd700', '#ff6f5e', '#a78bfa']

  return (
    <div className="stg-pane">
      <Group label="01" title="Profile" sub="Your local identity. Stored on this device only.">
        <div className="stg-profile-tabs">
          {profiles.map(p => (
            <button
              key={p.id}
              type="button"
              className={`stg-profile-tab ${p.id === activeId ? 'on' : ''}`}
              onClick={() => switchProfile(p.id)}
            >
              <span
                className="stg-profile-tab-avatar"
                style={{
                  backgroundColor: p.avatarColor,
                  backgroundImage: p.avatarImage ? `url(${p.avatarImage})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {!p.avatarImage && (p.displayName || ' ').slice(0, 1).toUpperCase()}
              </span>
              <span className="stg-profile-tab-name">{p.displayName || 'Untitled'}</span>
            </button>
          ))}
          <button type="button" className="stg-profile-tab add" onClick={onAddProfile}>
            + ADD PROFILE
          </button>
          {profiles.length > 1 && (
            <button type="button" className="stg-profile-tab add danger" onClick={resetProfiles}>
              REMOVE ALL
            </button>
          )}
        </div>

        <div className="stg-profile">
          {s.avatarImage ? (
            <button
              type="button"
              className="stg-avatar has-image"
              onClick={() => set('avatarImage', '')}
              aria-label="Remove avatar image"
              style={{ background: s.avatarColor }}
            >
              <img src={s.avatarImage} alt="" />
              <span className="stg-avatar-x" aria-hidden="true">
                ×
              </span>
            </button>
          ) : (
            <label
              className="stg-avatar is-empty"
              style={{ background: s.avatarColor }}
              title="Upload avatar image"
            >
              <span>{(s.displayName || ' ').slice(0, 1).toUpperCase()}</span>
              <input
                type="file"
                accept="image/*"
                onChange={onPickAvatar}
                style={{ display: 'none' }}
              />
            </label>
          )}
          <div className="stg-profile-fields">
            <LabelRow label="Name">
              <input
                type="text"
                className="stg-input"
                value={s.displayName}
                onChange={e => set('displayName', e.target.value)}
              />
            </LabelRow>
            <LabelRow label="Handle">
              <input
                type="text"
                className="stg-input"
                value={s.handle}
                onChange={e => set('handle', e.target.value)}
              />
            </LabelRow>
            <LabelRow label="Avatar hue">
              <div className="stg-swatch-row">
                {PRESET_HUES.map(c => (
                  <button
                    key={c}
                    type="button"
                    className={`stg-swatch ${s.avatarColor === c ? 'on' : ''}`}
                    style={{ background: c }}
                    onClick={() => set('avatarColor', c)}
                    aria-label={c}
                  />
                ))}
                <label
                  className={`stg-swatch custom ${!PRESET_HUES.includes(s.avatarColor) ? 'on' : ''}`}
                  style={{ background: s.avatarColor }}
                  title="Custom color"
                >
                  <input
                    type="color"
                    value={s.avatarColor}
                    onChange={e => set('avatarColor', e.target.value)}
                  />
                </label>
                <input
                  type="text"
                  className="stg-input stg-hex"
                  value={hexDraft}
                  onChange={e => {
                    const v = e.target.value.trim()
                    setHexDraft(v)
                    if (/^#[0-9a-fA-F]{6}$/.test(v) || /^#[0-9a-fA-F]{3}$/.test(v)) {
                      set('avatarColor', v)
                    }
                  }}
                  onBlur={() => setHexDraft(s.avatarColor)}
                  spellCheck={false}
                  placeholder="#rrggbb"
                />
              </div>
            </LabelRow>
            {canDelete && (
              <LabelRow label="Profile">
                <button type="button" className="stg-upload-btn danger" onClick={onDeleteProfile}>
                  DELETE THIS PROFILE
                </button>
              </LabelRow>
            )}
          </div>
        </div>
      </Group>
    </div>
  )
}

function DataPane({ s }) {
  const [storage, setStorage] = useState(null)

  const computeStorage = async () => {
    const [cards, meta] = await Promise.all([getAllCards(), getAllMeta()])
    const reviewsBytes =
      new Blob([JSON.stringify(cards)]).size + new Blob([JSON.stringify(meta)]).size
    const settingsBytes = new Blob([localStorage.getItem('aether-settings') || '']).size
    let otherLocalBytes = 0
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (!k || k === 'aether-settings') continue
      otherLocalBytes += new Blob([k, localStorage.getItem(k) || '']).size
    }
    let quota = 0
    let usage = 0
    if (navigator.storage?.estimate) {
      const est = await navigator.storage.estimate()
      quota = est.quota || 0
      usage = est.usage || 0
    }
    return { reviewsBytes, settingsBytes, otherLocalBytes, quota, usage, cardCount: cards.length }
  }

  useEffect(() => {
    let cancelled = false
    computeStorage().then(r => {
      if (!cancelled) setStorage(r)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const doExport = () => {
    const data = JSON.stringify(s, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'aether-settings.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const doExportProgress = async () => {
    const [cards, meta] = await Promise.all([getAllCards(), getAllMeta()])
    const legacyProgress = {}
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k?.startsWith('progress-')) legacyProgress[k] = localStorage.getItem(k)
    }
    const payload = { exportedAt: new Date().toISOString(), cards, meta, legacyProgress }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `aether-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const doClear = async () => {
    if (!confirm('Clear all local data - settings, progress, reviews? This cannot be undone.'))
      return
    try {
      await deleteDatabase()
    } catch (err) {
      console.error('IDB clear failed', err)
    }
    try {
      localStorage.clear()
    } catch {
      // ignore quota / privacy errors
    }
    try {
      sessionStorage.clear()
    } catch {
      // ignore
    }
    location.reload()
  }

  const rows = storage
    ? [
        { k: `Reviews · ${storage.cardCount} cards`, bytes: storage.reviewsBytes },
        { k: 'Settings', bytes: storage.settingsBytes },
        { k: 'Local cache', bytes: storage.otherLocalBytes }
      ]
    : []
  const maxBytes = Math.max(1, ...rows.map(r => r.bytes))
  const quotaPct = storage?.quota ? (storage.usage / storage.quota) * 100 : null

  return (
    <div className="stg-pane">
      <Group label="01" title="Your data" sub="Full portability. Export anytime.">
        <div className="stg-data-row">
          <div>
            <div className="stg-data-k">EXPORT SETTINGS</div>
            <div className="stg-data-s">Full snapshot. Import-ready JSON.</div>
          </div>
          <button type="button" className="stg-data-btn" onClick={doExport}>
            EXPORT →
          </button>
        </div>
        <div className="stg-data-row">
          <div>
            <div className="stg-data-k">EXPORT PROGRESS</div>
            <div className="stg-data-s">FSRS reviews, streaks, course history.</div>
          </div>
          <button type="button" className="stg-data-btn" onClick={doExportProgress}>
            EXPORT →
          </button>
        </div>
        <div className="stg-data-row danger">
          <div>
            <div className="stg-data-k">CLEAR LOCAL CACHE</div>
            <div className="stg-data-s">Wipes settings, progress, and reviews.</div>
          </div>
          <button type="button" className="stg-data-btn danger" onClick={doClear}>
            CLEAR ↯
          </button>
        </div>
      </Group>
      <Group label="02" title="Storage" sub="How much Aether keeps on this device.">
        <div className="stg-storage">
          {storage === null ? (
            <div className="stg-storage-row">
              <span className="stg-storage-k">Measuring…</span>
              <span className="stg-storage-bar">
                <span style={{ width: '0%' }} />
              </span>
              <span className="stg-storage-v">-</span>
            </div>
          ) : (
            <>
              {rows.map(r => (
                <div key={r.k} className="stg-storage-row">
                  <span className="stg-storage-k">{r.k}</span>
                  <span className="stg-storage-bar">
                    <span style={{ width: `${(r.bytes / maxBytes) * 100}%` }} />
                  </span>
                  <span className="stg-storage-v">{formatBytes(r.bytes)}</span>
                </div>
              ))}
              {quotaPct !== null && (
                <div className="stg-storage-row">
                  <span className="stg-storage-k">Quota used</span>
                  <span className="stg-storage-bar">
                    <span style={{ width: `${Math.min(100, quotaPct)}%` }} />
                  </span>
                  <span className="stg-storage-v">
                    {formatBytes(storage.usage)}
                    <span> / {formatBytes(storage.quota)}</span>
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </Group>
    </div>
  )
}

function AboutPane() {
  return (
    <div className="stg-pane">
      <Group label="01" title="System">
        <div className="stg-about">
          <svg className="stg-about-banner" viewBox="0 0 480 140" role="img" aria-label="Aether">
            <text
              x="0"
              y="115"
              fill="#ededed"
              fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
              fontSize="120"
              fontWeight="700"
              letterSpacing="2.4"
            >
              ÆTHER
            </text>
          </svg>
          <div className="stg-about-v">Version 1.0.0 · Build 20260509</div>
        </div>
        <div className="stg-credits">
          <div className="stg-credit">
            <span>ENGINE</span>
            <span>KaTeX · Prism</span>
          </div>
          <div className="stg-credit">
            <span>TYPEFACES</span>
            <span>D-DIN · OpenDyslexic</span>
          </div>
          <div className="stg-credit">
            <span>HOST</span>
            <span>Static SPA · Browser-resident</span>
          </div>
          <div className="stg-credit">
            <span>LICENSE</span>
            <span>MIT · Content CC BY-NC-SA 4.0</span>
          </div>
          <div className="stg-credit">
            <span>FEEDBACK</span>
            <span>
              <a
                href="https://github.com/StilyanX/aether/issues/new?template=bug_report.yml"
                target="_blank"
                rel="noopener noreferrer"
                className="stg-credit-link"
              >
                REPORT A BUG
              </a>
              {' · '}
              <a
                href="https://github.com/StilyanX/aether/issues/new?template=feedback.yml"
                target="_blank"
                rel="noopener noreferrer"
                className="stg-credit-link"
              >
                SUGGEST
              </a>
            </span>
          </div>
        </div>
      </Group>
    </div>
  )
}

// SHEET

export function SettingsSheet({ open, onClose }) {
  const settings = useSettings()
  const { theme, setTheme } = useTheme()
  const sheetRef = useRef(null)
  const [tab, setTab] = useState('appearance')
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onToggle = e => {
      const wantTab = e?.detail?.tab
      if (wantTab) setTab(wantTab)
    }
    window.addEventListener('aether:toggle-settings', onToggle)
    return () => window.removeEventListener('aether:toggle-settings', onToggle)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    const first = sheetRef.current?.querySelector('button, input')
    first?.focus()
    const onKey = e => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (previous && previous.focus) previous.focus()
    }
  }, [open, onClose])

  const q = query.trim().toLowerCase()
  const matches = useMemo(() => txt => !q || txt.toLowerCase().includes(q), [q])

  if (!open) return null

  return (
    <>
      <div className="stg-scrim" onClick={onClose} aria-hidden="true" />
      <aside className="stg-sheet" role="dialog" aria-label="Settings" ref={sheetRef}>
        <div className="stg-rail" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className={`stg-rail-tick ${i % 4 === 0 ? 'major' : ''}`} />
          ))}
        </div>

        <header className="stg-head">
          <div className="stg-head-l">
            <span className="stg-head-kick">
              <span className="stg-head-kick-dot" />
              SYSTEM · CONFIGURATION · AETHER
            </span>
            <h2 className="stg-head-title">Settings</h2>
            <p className="stg-head-tagline">
              Tune every instrument on the learning deck. All changes apply live.
            </p>
            <div className="stg-search">
              <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                <circle cx="5" cy="5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1" />
                <line x1="8" y1="8" x2="11" y2="11" stroke="currentColor" strokeWidth="1" />
              </svg>
              <input
                type="text"
                placeholder="SEARCH SETTINGS · ⌘K"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              {query && (
                <button
                  type="button"
                  className="stg-search-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear"
                >
                  ×
                </button>
              )}
            </div>
          </div>
          <button type="button" className="stg-close" onClick={onClose} aria-label="Close settings">
            <span className="stg-close-x" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="stg-close-kbd">ESC</span>
          </button>
        </header>

        <div className="stg-main">
          <nav className="stg-tabs" aria-label="Settings sections">
            {TABS.map(it => (
              <button
                key={it.id}
                type="button"
                className={`stg-tab ${tab === it.id ? 'active' : ''}`}
                onClick={() => setTab(it.id)}
              >
                <span className="stg-tab-n">{it.n}</span>
                <span className="stg-tab-l">{it.label}</span>
                <span className="stg-tab-ind" aria-hidden="true" />
              </button>
            ))}
          </nav>

          <div className="stg-body" key={tab}>
            {tab === 'appearance' && (
              <AppearancePane s={settings} theme={theme} setTheme={setTheme} matches={matches} />
            )}
            {tab === 'reading' && <ReadingPane s={settings} matches={matches} />}
            {tab === 'learning' && <LearningPane s={settings} matches={matches} />}

            {tab === 'notif' && <NotifPane s={settings} matches={matches} />}
            {tab === 'keyboard' && <KeyboardPane s={settings} matches={matches} />}
            {tab === 'privacy' && <PrivacyPane s={settings} matches={matches} />}
            {tab === 'account' && <AccountPane s={settings} />}
            {tab === 'data' && <DataPane s={settings} />}
            {tab === 'about' && <AboutPane />}
          </div>
        </div>

        <footer className="stg-foot">
          <button type="button" className="stg-reset" onClick={() => resetSection(MANAGED_KEYS)}>
            <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true">
              <path
                d="M2,6 a4,4 0 1,0 1.5,-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polyline
                points="1.5,1.5 1.5,4 4,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span>RESTORE DEFAULTS</span>
          </button>
          <div className="stg-foot-meta">
            <span className="stg-foot-pill">
              <span className="stg-foot-dot-g" />
              LOCAL
            </span>
            <span>AUTO-SAVED</span>
            <span className="stg-foot-sep">·</span>
            <span>V 1.0.0</span>
          </div>
        </footer>
      </aside>
    </>
  )
}
