import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web102-whats-this-dog-game-v2/',
  plugins: [react()],
})
