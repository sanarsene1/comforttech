import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(projectRoot, 'index.html'),
        shop: resolve(projectRoot, 'shop.html'),
        team: resolve(projectRoot, 'team.html'),
        contact: resolve(projectRoot, 'contact.html'),
        services: resolve(projectRoot, 'service-detail.html')
      }
    }
  }
});
