import { crx } from '@crxjs/vite-plugin'
import { defineConfig } from 'vite'
import gleam from 'vite-gleam'
import manifest from './manifest.json'

export default defineConfig(({ mode }) => ({
  plugins: [gleam(), crx({ manifest })],
  server: {
    // Workaround to make HMR work in side panel.
    // Explicitely set a port overrides the port detection, and as such,
    //  allows to get HMR working.
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5174,
    },
  },
  build: {
    sourcemap: true,
  },
  rollupOptions: {
    output: {
      interop: 'auto',
    },
  },
}))
