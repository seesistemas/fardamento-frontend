/**
 * @file Configuração do Vite.
 *
 * Plugins:
 * - `@vitejs/plugin-react`: JSX/TSX e Fast Refresh.
 * - `@tailwindcss/vite`: Tailwind CSS v4 (a configuração do tema fica em
 *   `src/index.css`, via `@theme`; não existe `tailwind.config.js`).
 */
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
