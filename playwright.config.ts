import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 60000,
  expect: {timeout: 100000},
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
    baseURL: 'http://23.94.44.206:3000/',
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
