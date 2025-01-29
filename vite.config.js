import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/My-portfolio/', 
  resolve: {
    alias: {
      'framer-motion': resolve(__dirname, 'node_modules/framer-motion'),
    },
  },
  build: {
    rollupOptions: {
      // Remove 'framer-motion' from external
      output: {
        globals: {
          'framer-motion': 'framerMotion'
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['framer-motion'],
    esbuildOptions: {
      target: 'esnext'
    }
  }
});
