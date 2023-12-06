import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslint()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/app/variables.scss" as *;`
      }
    },
  },
  build: {
    outDir: "./dist",
    target: "esnext",
    polyfillDynamicImport: false,
  },
  base: './'
});
