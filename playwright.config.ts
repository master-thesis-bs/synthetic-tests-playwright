import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 2,
  workers: process.env.CI ? 1 : 1,
  timeout: 60000,
  expect: {timeout: 30000},
  reporter: [
    ['list'],
    ['html'],
    ['json', {outputFile: 'playwright-report/results.json'}]
  ],
  use: {
    baseURL: 'https://auth-nextjs-green.vercel.app/',
    trace: 'on',
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
