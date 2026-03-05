import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Deploying as a root site at sohampod.github.io, so base is "/"
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
