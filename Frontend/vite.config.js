import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // This ensures HMR works properly with React 19
      jsxRuntime: 'automatic',
    })
  ],
  server: {
    hmr: {
      // Force HMR to use websocket
      protocol: 'ws',
      host: 'localhost',
      port: 24678,
    },
    // Watch for changes in these files
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
})