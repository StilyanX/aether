import { useVizColors } from './shared'
import './tool-shell.css'

export default function ToolShell({ title, onBack, onReset, children }) {
  return (
    <div className="ts-root">
      <div className="ts-nav">
        <button
          className="ts-back-btn"
          onClick={onBack}
          aria-label="Back to tools"
          title="Back to tools"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5m7 7-7-7 7-7" />
          </svg>
        </button>
        <span className="ts-title">{title}</span>
        {onReset && (
          <button className="ts-reset-btn" onClick={onReset} aria-label="Reset tool">
            Reset
          </button>
        )}
      </div>
      {children}
    </div>
  )
}
