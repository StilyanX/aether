import { GRADES } from './use-exam'
import { formatDuration } from '../../utils/format'
import './exam-runner.css'

const markLabel = m => `${m} ${m === 1 ? 'mark' : 'marks'}`
// Colourblind redundancy: each verdict carries a distinct GLYPH SHAPE plus the
// word, so correct/partial/wrong never rely on the border hue alone.
const VERDICT_MARK = { correct: '✓', partial: '≈', wrong: '✗' }
const verdictLabel = g => GRADES.find(([v]) => v === g)?.[1] || ''

// Presentational. All state lives in useExam (owned by ProjectTemplate) so the
// sidebar can read the same source. MathJax typesetting is owned by the parent.
export default function ExamRunner({ state }) {
  const {
    exam,
    phase,
    revealed,
    grades,
    totalMarks,
    totalQuestions,
    elapsedMs,
    earned,
    gradedCount,
    accuracy,
    ungraded,
    begin,
    reveal,
    grade,
    finish,
    review,
    restart,
    scoreFor
  } = state

  if (phase === 'intro') {
    return (
      <div className="exr">
        <div className="exr-intro">
          <p className="exr-intro-meta">
            {totalQuestions} questions · {totalMarks} marks · {exam.sections.length} sections
          </p>
          <p className="exr-intro-desc">
            Attempt each question, reveal the mark scheme, then grade yourself Correct, Partial, or
            Wrong. The timer starts when you begin and stops when you finish.
          </p>
          <ul className="exr-intro-sections">
            {exam.sections.map(s => (
              <li key={s.id}>
                <span className="exr-intro-sec-id">{s.id}</span>
                <span className="exr-intro-sec-body">
                  <span className="exr-intro-sec-title">{s.title}</span>
                  <span className="exr-intro-sec-meta">{s.meta}</span>
                </span>
              </li>
            ))}
          </ul>
          <button className="exr-btn exr-btn-primary" onClick={begin}>
            Begin exam
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'results') {
    return (
      <div className="exr">
        <div className="exr-results">
          <p className="exr-results-tag">Exam complete</p>
          <div className="exr-results-grid">
            <div className="exr-result">
              <span className="exr-result-value">
                {earned}
                <span className="exr-result-sub">/{totalMarks}</span>
              </span>
              <span className="exr-result-label">Points</span>
            </div>
            <div className="exr-result">
              <span className="exr-result-value">{accuracy}%</span>
              <span className="exr-result-label">Accuracy</span>
            </div>
            <div className="exr-result">
              <span className="exr-result-value">{formatDuration(elapsedMs)}</span>
              <span className="exr-result-label">Time</span>
            </div>
          </div>

          <div className="exr-breakdown">
            <h3 className="exr-breakdown-title">By section</h3>
            {exam.sections.map(s => {
              let es = 0
              let ts = 0
              let cs = 0
              s.questions.forEach(q => {
                ts += q.marks
                const g = grades[q.id]
                if (g) {
                  es += scoreFor(g, q.marks)
                  if (g === 'correct') cs += 1
                }
              })
              return (
                <div key={s.id} className="exr-brk-row">
                  <span className="exr-brk-sec">
                    Section {s.id} · {s.title}
                  </span>
                  <span className="exr-brk-marks">
                    {es}/{ts} marks
                  </span>
                  <span className="exr-brk-correct">
                    {cs}/{s.questions.length} correct
                  </span>
                </div>
              )
            })}
          </div>

          {ungraded > 0 && (
            <p className="exr-results-note">
              {ungraded} {ungraded === 1 ? 'question was' : 'questions were'} left ungraded and
              counted as zero.
            </p>
          )}

          <div className="exr-results-actions">
            <button className="exr-btn exr-btn-ghost" onClick={review}>
              Review answers
            </button>
            <button className="exr-btn exr-btn-primary" onClick={restart}>
              Restart
            </button>
          </div>
        </div>
      </div>
    )
  }

  // phase === 'running'
  return (
    <div className="exr">
      <div className="exr-bar">
        <div className="exr-bar-item">
          <span className="exr-bar-label">Time</span>
          <span className="exr-bar-value">{formatDuration(elapsedMs)}</span>
        </div>
        <div className="exr-bar-item">
          <span className="exr-bar-label">Score</span>
          <span className="exr-bar-value">
            {earned}
            <span className="exr-bar-sub">/{totalMarks}</span>
          </span>
        </div>
        <div className="exr-bar-item">
          <span className="exr-bar-label">Graded</span>
          <span className="exr-bar-value">
            {gradedCount}
            <span className="exr-bar-sub">/{totalQuestions}</span>
          </span>
        </div>
        <button className="exr-btn exr-btn-finish" onClick={finish}>
          Finish
        </button>
      </div>

      {exam.sections.map(section => (
        <section key={section.id} id={`exr-section-${section.id}`} className="exr-section">
          <h2 className="exr-section-title">
            <span className="exr-section-letter">{section.id}</span>
            {section.title}
          </h2>
          <p className="exr-section-meta">{section.meta}</p>

          {section.questions.map(q => {
            const g = grades[q.id]
            const isRevealed = revealed.has(q.id)
            return (
              <div key={q.id} className={`exr-q${g ? ` exr-q-${g}` : ''}`}>
                <div className="exr-q-head">
                  <span className="exr-q-id">{q.id}</span>
                  <span className="exr-marks">{markLabel(q.marks)}</span>
                  {g && (
                    <span className={`exr-q-verdict exr-q-verdict-${g}`}>
                      <span className="exr-q-verdict-mark" aria-hidden="true">
                        {VERDICT_MARK[g]}
                      </span>
                      {verdictLabel(g)}
                    </span>
                  )}
                </div>
                <div className="exr-prompt">{q.prompt}</div>

                {!isRevealed ? (
                  <button className="exr-btn exr-btn-reveal" onClick={() => reveal(q.id)}>
                    Reveal answer
                  </button>
                ) : (
                  <>
                    <div className="exr-answer">{q.answer}</div>
                    <div className="exr-grade">
                      <span className="exr-grade-label">Mark yourself</span>
                      {GRADES.map(([val, lbl]) => (
                        <button
                          key={val}
                          className={`exr-grade-btn exr-grade-${val}${g === val ? ' active' : ''}`}
                          onClick={() => grade(q.id, val)}
                          aria-pressed={g === val}
                        >
                          {lbl}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </section>
      ))}

      <div className="exr-foot">
        <button className="exr-btn exr-btn-primary" onClick={finish}>
          Finish and see results
        </button>
      </div>
    </div>
  )
}
