import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './docs',
    emptyOutDir: true, // also necessary
  },
  base: process.env.NODE_ENV === 'production'
    ? 'https://vvaffl4.github.io/portfolio/' // prod
    : '/', // dev
})
