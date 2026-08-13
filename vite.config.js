import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function inlineCss() {
  return {
    name: 'inline-css',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = bundle['index.html']
      if (!html || typeof html.source !== 'string') return

      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type !== 'asset' || !fileName.endsWith('.css')) continue
        const linkPattern = new RegExp(`<link[^>]+href="/${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`)
        html.source = html.source.replace(linkPattern, `<style>${asset.source}</style>`)
        delete bundle[fileName]
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
  server: {
    port: 4200,
    strictPort: true,
  },
})
