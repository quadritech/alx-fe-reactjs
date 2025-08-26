import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import.meta.env.VITE_APP_GITHUB_API_KEY

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
