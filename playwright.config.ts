import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: [
        ['list'],
        ['html'],
        ['json', {outputFile: 'playwright-report/results.json'}]
    ],
    use: {
        baseURL: 'https://master-thesis-bs.click',
        trace: 'on-first-retry',
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        }
    ],
});
