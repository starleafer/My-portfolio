import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'framer-motion': 'framer-motion/dist/framer-motion'
    }
  },
  build: {
    commonjsOptions: {
      include: [/framer-motion/]
    }
  }
});