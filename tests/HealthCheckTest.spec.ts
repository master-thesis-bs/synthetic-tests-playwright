import {expect, test} from '@playwright/test';
import HomePage from "../pages/HomePage";

test('home page', async ({page}) => {
  let homePage = new HomePage(page);
  await homePage.navigate();

  await Promise.all([
    expect(homePage.title).toBeVisible(),
    expect(homePage.loginPageButtonLocator).toBeVisible()
  ])
});
