import {expect, test} from '@playwright/test';
import HomePage from '../pages/HomePage';

test('login positive test', async ({page}) => {
    let homePage = new HomePage(page)
    homePage = await homePage.navigate();

    expect(homePage.isHomePageTitleDisplayed()).toBeTruthy();
    expect(homePage.isLoginButtonDisplayed()).toBeTruthy();

    let loginPage = await homePage.clickLoginPageButton();

    expect(loginPage.isLoginPageTitleDisplayed()).toBeTruthy()
    expect(loginPage.isLoginPageSubTitleDisplayed()).toBeTruthy()
    expect(loginPage.isEmailInputDisplayed()).toBeTruthy()
    expect(loginPage.isPasswordInputDisplayed()).toBeTruthy()
    expect(loginPage.isSubmitLoginFormButtonDisplayed()).toBeTruthy()
    expect(loginPage.isRegistrationPageLinkDisplayed()).toBeTruthy()
    expect(loginPage.isHomePageLinkDisplayed()).toBeTruthy()

    await loginPage.enterEmail("admin@gmail.com");
    await loginPage.enterPassword("Zaq12wsx");
    let protectedPage = await loginPage.clickSubmitLoginForm();

    expect(protectedPage.isProtectedPageTitleDisplayed()).toBeTruthy();
    expect(protectedPage.isProtectedPageSubTitleDisplayed()).toBeTruthy();
    expect(protectedPage.isSignOutButtonDisplayed()).toBeTruthy();
    expect(protectedPage.isDeleteAccountButtonDisplayed()).toBeTruthy();

    loginPage = await protectedPage.clickOnSignOutButton();

    expect(loginPage.isLoginPageTitleDisplayed()).toBeTruthy()
    expect(loginPage.isLoginPageSubTitleDisplayed()).toBeTruthy()
    expect(loginPage.isEmailInputDisplayed()).toBeTruthy()
    expect(loginPage.isPasswordInputDisplayed()).toBeTruthy()
    expect(loginPage.isSubmitLoginFormButtonDisplayed()).toBeTruthy()
    expect(loginPage.isRegistrationPageLinkDisplayed()).toBeTruthy()
    expect(loginPage.isHomePageLinkDisplayed()).toBeTruthy()
})
