import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://34.118.94.255/');

  await expect(page).toHaveTitle(/timeline-app/);
});