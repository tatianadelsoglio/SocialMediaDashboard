import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// Sin `globals: true`, Testing Library no limpia sola entre tests.
afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.className = ''
  document.head.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.remove())
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})
