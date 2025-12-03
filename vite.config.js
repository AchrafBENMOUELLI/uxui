import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './Pages/Acceuil.html' // specify your actual HTML file path
    }
  }
})