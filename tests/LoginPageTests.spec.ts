import {expect, test} from '@playwright/test';
import HomePage from '../pages/HomePage';

test('login positive test', async ({page}) => {
    let homePage = new HomePage(page);
    await homePage.navigate();
    let loginPage = await homePage.clickLoginButton();

    await loginPage.enterEmail("admin@gmail.com");
    await loginPage.enterPassword("Zaq12wsx");
    homePage = await loginPage.submitLoginForm();

    expect(await homePage.isLogoutButtonDisplayed()).toBeTruthy();
    expect(await homePage.isProfileButtonDisplayed()).toBeTruthy();

    homePage = await homePage.clickLogoutButton();

    expect(await homePage.isLoginButtonDisplayed()).toBeTruthy();
})
