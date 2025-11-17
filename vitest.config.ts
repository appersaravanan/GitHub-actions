import { defineConfig } from 'vitest/config';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'json-summary', 'lcov']
    },
    reporters: ['default', ['vitest-junit-reporter', { outputFile: 'reports/junit.xml' }]],
    setupFiles: [],
    onConsoleLog(log) {
      // Prevent noisy vitest internal warnings printing in CI; keep all logs
      return false;
    },
    hooksTimeout: 30000
  }
});

// Ensure reports directory exists for CI artifacts
const reportsDir = path.resolve('reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}
