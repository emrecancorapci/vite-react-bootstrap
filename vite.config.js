import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    css: true,
  },
  server: {
    port: 3000,
  },
  base: '/'
});
