import {expect, test} from '@playwright/test';
import HomePage from "../pages/HomePage";

test('home page', async ({page}) => {
    let homePage = new HomePage(page);
    await homePage.navigate();

    expect(homePage.isHomePageTitleDisplayed()).toBeTruthy();
    expect(homePage.isLoginButtonDisplayed()).toBeTruthy();
});
