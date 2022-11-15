import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'pub-sub',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd'],
    },
    outDir: resolve(__dirname, './dist'),
  },
});