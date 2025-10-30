import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/tests/**/*.test.{ts,tsx}', 'src/tests/**/*.spec.{ts,tsx}']
  }
});
