import { defineConfig } from 'vite'

export default defineConfig({
  // Base public path when served in development or production
  base: './',
  
  // Build options
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  
  // Dev server options
  server: {
    port: 3000,
    open: true
  },
  
  // Preview server options
  preview: {
    port: 4173,
    open: true
  }
})