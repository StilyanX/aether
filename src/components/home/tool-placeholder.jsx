import { Suspense, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CATEGORIES,
  TOOL_COMPONENTS
} from '../../features/explore/mathematics/arithmetic/arithmetic-tools'

function findToolMeta(toolSlug) {
  for (const cat of CATEGORIES) {
    const tool = cat.tools.find(t => t.id === toolSlug)
    if (tool) return { ...tool, category: cat.name }
  }
  return null
}

function ToolPlaceholder() {
  const { domain, resource: resourceName, toolSlug } = useParams()
  const navigate = useNavigate()

  const meta = findToolMeta(toolSlug)
  const ToolComponent = TOOL_COMPONENTS[toolSlug]

  useEffect(() => {
    if (meta) document.title = `${meta.name} - AETHER`
  }, [meta])

  const handleBack = () => navigate(`/explore/${domain}/${resourceName}`)

  if (!ToolComponent) {
    return (
      <div
        style={{
          background: '#000',
          minHeight: '100vh',
          color: 'rgba(240,240,250,1)',
          padding: 40
        }}
      >
        <button
          type="button"
          onClick={handleBack}
          style={{
            background: 'transparent',
            border: '1px solid rgba(240,240,250,0.3)',
            color: 'inherit',
            padding: '8px 16px',
            cursor: 'pointer',
            fontFamily: 'D-DIN, sans-serif',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontSize: 11
          }}
        >
          ← Back
        </button>
        <p style={{ marginTop: 24, fontFamily: 'D-DIN, sans-serif' }}>Tool not found.</p>
      </div>
    )
  }

  return (
    <Suspense fallback={<div style={{ background: '#000', minHeight: '100vh' }} />}>
      <ToolComponent toolName={meta?.name || toolSlug} onBack={handleBack} />
    </Suspense>
  )
}

export default ToolPlaceholder
