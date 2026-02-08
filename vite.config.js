import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VTSUILibrary',
      fileName: 'vts-ui-lib',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})
