import { defineConfig } from 'vite';
import { resolve } from 'path';
import env from './config/env';

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './')
    }
  },
  css: {
    modules: {
      generateScopedName: '[local]-[hash:6]',
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
    },
  },
  base: env.BASE_URL || '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(url) {
          if (url.includes('node_modules')) {
            return url.split('node_modules/')[1].split('/')[0];
          }
        }
      }
    },
  }
})
