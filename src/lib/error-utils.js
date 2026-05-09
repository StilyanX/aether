/**
 * Error classification and logging utilities.
 */

export function generateCorrelationId() {
  const time = Date.now().toString(36)
  const rand = Math.random().toString(36).slice(2, 6)
  return `${time}-${rand}`
}

export function logError(error, context = {}) {
  const id = context.correlationId || generateCorrelationId()
  const timestamp = new Date().toISOString()

  console.error(
    `[AETHER FAULT] ${timestamp}\n` +
      `  correlation: ${id}\n` +
      `  component: ${context.componentPath || 'unknown'}\n` +
      `  level: ${context.level || 'unknown'}\n` +
      `  error:`,
    error
  )
}
