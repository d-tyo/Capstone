import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': 'http://localhost:8080/', // axios call in front-end /api
      '/lesson': 'http://localhost:8080/' 
    }
  }  
})
