import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup.js',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080/',
      '/images': 'http://localhost:8080/'
    }
  }  
})
