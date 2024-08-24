import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 20000,
  expect: {timeout: 20000},
  reporter: [
    ['list'],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: true,
        categories: [
          {
            name: "Outdated tests",
            messageRegex: ".*FileNotFound.*",
          },
        ],
        environmentInfo: {
          framework: "playwright",
        },
      },
    ]
  ],
  use: {
    baseURL: 'https://auth-nextjs-green.vercel.app/',
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
