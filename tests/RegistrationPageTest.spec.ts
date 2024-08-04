import {expect, test} from '@playwright/test';
import HomePage from '../pages/HomePage';
import generateCustomEmail from "../tools/generateEmail";

test('registration positive test', async ({page}) => {
  const email = generateCustomEmail();
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
    expect(loginPage.homePageLink).toBeVisible(),
  ])

  let registrationPage = await loginPage.clickOnRegistrationPageLink();

  await Promise.all([
    expect(registrationPage.registrationPageTitle).toBeVisible(),
    expect(registrationPage.registrationPageSubTitle).toBeVisible(),
    expect(registrationPage.emailInputField).toBeVisible(),
    expect(registrationPage.passwordInputField).toBeVisible(),
    expect(registrationPage.submitRegistrationFormButton).toBeVisible(),
    expect(registrationPage.loginPageLink).toBeVisible(),
    expect(registrationPage.homePageLink).toBeVisible(),
  ])

  await registrationPage.enterEmail(email);
  await registrationPage.enterPassword("Zaq12wsx");
  loginPage = await registrationPage.clickSubmitRegistrationForm();

  await Promise.all([
    expect(loginPage.loginPageTitle).toBeVisible(),
    expect(loginPage.loginPageSubTitle).toBeVisible(),
    expect(loginPage.emailInputField).toBeVisible(),
    expect(loginPage.passwordInputField).toBeVisible(),
    expect(loginPage.submitLoginFormButton).toBeVisible(),
    expect(loginPage.registrationPageLink).toBeVisible(),
    expect(loginPage.homePageLink).toBeVisible()
  ])

  await loginPage.enterEmail(email);
  await loginPage.enterPassword("Zaq12wsx");
  let protectedPage = await loginPage.clickSubmitLoginForm();

  await Promise.all([
    expect(protectedPage.protectedPageTitle).toBeVisible(),
    expect(protectedPage.protectedPageSubTitle).toBeVisible(),
    expect(protectedPage.signOutButton).toBeVisible(),
    expect(protectedPage.deleteAccountButton).toBeVisible()
  ])

  loginPage = await protectedPage.clickOnDeleteAccountButton();

  await Promise.all([
    expect(loginPage.loginPageTitle).toBeVisible(),
    expect(loginPage.loginPageSubTitle).toBeVisible(),
    expect(loginPage.emailInputField).toBeVisible(),
    expect(loginPage.passwordInputField).toBeVisible(),
    expect(loginPage.submitLoginFormButton).toBeVisible(),
    expect(loginPage.registrationPageLink).toBeVisible(),
    expect(loginPage.homePageLink).toBeVisible(),
  ])
})
