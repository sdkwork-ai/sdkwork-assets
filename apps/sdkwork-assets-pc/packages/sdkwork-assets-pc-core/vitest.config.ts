import { defineConfig } from 'vitest/config';

/**
 * Package-local vitest config.
 *
 * Without this file vitest walks up to the application root `vite.config.ts`, which imports
 * `@vitejs/plugin-react` and is only resolvable from the app root — so every test in this
 * package failed to start. The app root is a browser bundle; this package's tests are
 * node-environment unit tests, so they must not load the browser config at all.
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
