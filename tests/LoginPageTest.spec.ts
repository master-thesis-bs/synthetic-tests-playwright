import {expect, test} from '@playwright/test';
import HomePage from '../pages/HomePage';

test('login positive test', async ({page}) => {
  let homePage = new HomePage(page)
  homePage = await homePage.navigate();

  await Promise.all([
    expect(homePage.title).toBeVisible(),
    expect(homePage.loginPageButtonLocator).toBeVisible()
  ])

  let loginPage = await homePage.clickLoginPageButton();

  await Promise.all([
    expect(loginPage.loginPageTitle).toBeVisible(),
    expect(loginPage.loginPageSubTitle).toBeVisible(),
    expect(loginPage.emailInputField).toBeVisible(),
    expect(loginPage.passwordInputField).toBeVisible(),
    expect(loginPage.submitLoginFormButton).toBeVisible(),
    expect(loginPage.registrationPageLink).toBeVisible(),
    expect(loginPage.homePageLink).toBeVisible()
  ])

  await loginPage.enterEmail("admin@gmail.com");
  await loginPage.enterPassword("Zaq12wsx");
  let protectedPage = await loginPage.clickSubmitLoginForm();

  await Promise.all([
    expect(protectedPage.protectedPageTitle).toBeVisible(),
    expect(protectedPage.protectedPageSubTitle).toBeVisible(),
    expect(protectedPage.signOutButton).toBeVisible(),
    expect(protectedPage.deleteAccountButton).toBeVisible()
  ])

  loginPage = await protectedPage.clickOnSignOutButton();

  await Promise.all([
    expect(loginPage.loginPageTitle).toBeVisible(),
    expect(loginPage.loginPageSubTitle).toBeVisible(),
    expect(loginPage.emailInputField).toBeVisible(),
    expect(loginPage.passwordInputField).toBeVisible(),
    expect(loginPage.submitLoginFormButton).toBeVisible(),
    expect(loginPage.registrationPageLink).toBeVisible(),
    expect(loginPage.homePageLink).toBeVisible()
  ])
})
