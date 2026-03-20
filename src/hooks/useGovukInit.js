import { useEffect } from 'react'
import { initAll } from 'govuk-frontend'

/**
 * Initialise govuk-frontend JS components after the component mounts.
 * Needed for: PasswordInput, CharacterCount, Accordions, etc.
 */
export function useGovukInit() {
  useEffect(() => {
    try {
      initAll()
    } catch {
      // initAll may throw if already initialised; safe to ignore
    }
  }, [])
}
