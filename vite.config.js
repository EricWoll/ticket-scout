import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/pages/',
    build: {
        outDir: '../../dist',
        rollupOptions: {
          input: {
            'main': resolve(__dirname, 'src/pages/index.html'),
            'search-events': resolve(__dirname, 'src/pages/search-events/index.html'),
            'saved-events': resolve(__dirname, 'src/pages/saved-events/index.html'),
          },
        },
      },
})


