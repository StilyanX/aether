import { useMathJax } from '../../hooks/use-mathjax'

export default function ReferenceMode({ config, hasMath }) {
  useMathJax([], hasMath)
  const { category, title, sections } = config.reference

  return (
    <article className="ref" aria-label={`${title} quick reference`}>
      <div className="ref-header" data-section="header">
        <span className="ref-label">{category}</span>
        <h1>{title}</h1>
      </div>

      {sections.map((section, i) => (
        <section key={i} className="ref-section" data-section={`r${i + 1}`}>
          {section.title && <h2>{section.title}</h2>}
          {section.content || section}
        </section>
      ))}
    </article>
  )
}
