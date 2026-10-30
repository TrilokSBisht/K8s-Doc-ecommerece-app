import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/auth': 'http://localhost:4001',
      '/oauth': 'http://localhost:4001',
      '/products': 'http://localhost:4001',
      '/users': 'http://localhost:4001',
      '/cart': 'http://localhost:4001',
      '/orders': 'http://localhost:4001',
      '/payments': 'http://localhost:4001'
    }
  }
})
