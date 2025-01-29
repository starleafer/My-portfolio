import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/My-portfolio/', 
  optimizeDeps: {
    include: ['framer-motion'], 
  },
  resolve: {
    alias: {
      'framer-motion': resolve(__dirname, 'node_modules/framer-motion'),
    },
  },
  build: {
    rollupOptions: {
      external: ['framer-motion'],
      output: {
        globals: {
          'framer-motion': 'framerMotion'
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['framer-motion'],
    esbuildOptions: {
      target: 'esnext'
    }
  }
});