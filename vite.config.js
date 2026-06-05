import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/demo-asl-napoli-1-centro/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        print: resolve(__dirname, 'index-print.html'),
        servizi: resolve(__dirname, 'page-servizi.html'),
        referti: resolve(__dirname, 'page-referti.html'),
        'come-fare-per': resolve(__dirname, 'page-come-fare-per.html'),
        ospedali: resolve(__dirname, 'page-ospedali.html'),
        maresca: resolve(__dirname, 'page-maresca.html'),
        'redazione-web': resolve(__dirname, 'page-redazione-web.html'),
        distretti: resolve(__dirname, 'page-distretti.html'),
      },
    },
  },
})
