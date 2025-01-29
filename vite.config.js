import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/My-portfolio/', 
  build: {
    rollupOptions: {
  
      input: 'index.html',
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
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
  },
  resolve: {
    alias: {
      'framer-motion': resolve(__dirname, 'node_modules/framer-motion'),
    },
  },
});