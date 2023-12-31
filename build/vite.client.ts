import { defineConfig } from 'vite';
import baseConfig from './vite.base';
import env from '../config/env';

const config = defineConfig({
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

export default Object.assign(config, baseConfig);
