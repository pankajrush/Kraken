import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './', // Ensure root is set correctly
  build: {
    outDir: 'dist',  // Output directory for the production build
  },
  plugins: [react()],
})
