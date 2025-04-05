import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/my_cv",
  resolve: {
    alias: {
      '@asset': resolve(__dirname, 'assets')
    }
  }
})