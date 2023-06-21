import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs-extra'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // Disable automatic chunking
      },
      onwrite(options) {
        // Copy specific files to the destination folder
        fs.copySync('src/assets/a2-go.png', 'dist/assets/a2-go.png');
        fs.copySync('src/assets/django-dz.png', 'dist/assets/django-dz.png');
        fs.copySync('src/assets/eecs-sim.png', 'dist/assets/eecs-sim.png');
        fs.copySync('src/assets/eng-club.png', 'dist/assets/eng-club.png');
        fs.copySync('src/assets/flappy-bird.png', 'dist/assets/flappy-bird.png');
        fs.copySync('src/assets/stick-sim.png', 'dist/assets/stick-sim.png');
        fs.copySync('src/assets/valentine.png', 'dist/assets/valentine.png');
        fs.copySync('src/assets/vue-weather.png', 'dist/assets/vue-weather.png');
        fs.copySync('src/assets/wii-nunchuk.png', 'dist/assets/wii-nunchuk.png');
        fs.copySync('src/assets/wordle.png', 'dist/assets//wordle.png');
        // Add more file entries as needed
      }
    }
  }
})
