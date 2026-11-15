/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Se publica en GitHub Pages: https://tatianadelsoglio.github.io/SocialMediaDashboard/
const BASE = '/SocialMediaDashboard/'

// https://vite.dev/config/
export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    // Vitest fuerza base '/'; se fija la misma base que en producción para que
    // los tests detecten rutas a public/ escritas sin import.meta.env.BASE_URL.
    env: { BASE_URL: BASE },
    setupFiles: ['./src/test/setup.ts'],
  },
})
