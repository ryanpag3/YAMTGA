import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.itest.ts'],
        minWorkers: 1,
        maxWorkers: 1,
        setupFiles: ['src/test-helpers/setup.ts']
    }
});