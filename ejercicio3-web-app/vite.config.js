import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // puedes usar describe, it, expect sin importarlas
    environment: 'jsdom', // simula un DOM para tests de React
    setupFiles: './src/setupTests.js', // configuración adicional de testing
  },
});
