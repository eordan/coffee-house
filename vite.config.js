import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import sass from 'sass';

export default defineConfig({
  plugins: [eslint()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
