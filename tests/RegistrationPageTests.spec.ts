import {expect, test} from '@playwright/test';
import HomePage from '../pages/HomePage';

test('registration positive test', async ({page}) => {
    let homePage = new HomePage(page);
    await homePage.navigate();
    let registrationPage = await homePage.clickRegisterButton();
    await registrationPage.enterName("tempuser2");
    await registrationPage.enterEmail("temp.user2@gmail.com");
    await registrationPage.enterPassword("Zaq12wsx");
    await registrationPage.enterPasswordConfirmation("Zaq12wsx");
    homePage = await registrationPage.submitRegistrationForm();

    expect(await homePage.isLogoutButtonDisplayed()).toBeTruthy();
    expect(await homePage.isProfileButtonDisplayed()).toBeTruthy();

    let profilePage = await homePage.clickProfileButton();
    await profilePage.enterDeleteAccountPassword("Zaq12wsx");
    homePage = await profilePage.clickOnDeleteAccountButton();

    expect(await homePage.isLoginButtonDisplayed()).toBeTruthy();
})
