import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    historyApiFallback: true, // Ensures React Router works on refresh
  },
  build: {
    outDir: 'dist', // Output directory for production build
  },

})
