import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/My-portfolio/', 

  resolve: {
    alias: {
    },
  },

  optimizeDeps: {
    include: ['framer-motion'], 
    esbuildOptions: {
      target: 'esnext',
    },
  },

  build: {
    rollupOptions: {
      output: {
        globals: {
          'framer-motion': 'framerMotion',
        },
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  }
});
