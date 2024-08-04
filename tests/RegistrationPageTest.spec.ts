import {expect, test} from '@playwright/test';
import HomePage from '../pages/HomePage';
import generateCustomEmail from "../tools/generateEmail";

test('registration positive test', async ({page}) => {
  const email = generateCustomEmail();
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

  let registrationPage = await loginPage.clickOnRegistrationPageLink();

  expect(registrationPage.isRegistrationPageTitleDisplayed()).toBeTruthy()
  expect(registrationPage.isRegistrationPageSubTitleDisplayed()).toBeTruthy()
  expect(registrationPage.isEmailInputDisplayed()).toBeTruthy()
  expect(registrationPage.isPasswordInputDisplayed()).toBeTruthy()
  expect(registrationPage.isSubmitRegistrationFormButtonDisplayed()).toBeTruthy()
  expect(registrationPage.isLoginPageLinkDisplayed()).toBeTruthy()
  expect(registrationPage.isHomePageLinkDisplayed()).toBeTruthy()

  await registrationPage.enterEmail(email);
  await registrationPage.enterPassword("Zaq12wsx");
  loginPage = await registrationPage.clickSubmitRegistrationForm();

  expect(loginPage.isLoginPageTitleDisplayed()).toBeTruthy()
  expect(loginPage.isLoginPageSubTitleDisplayed()).toBeTruthy()
  expect(loginPage.isEmailInputDisplayed()).toBeTruthy()
  expect(loginPage.isPasswordInputDisplayed()).toBeTruthy()
  expect(loginPage.isSubmitLoginFormButtonDisplayed()).toBeTruthy()
  expect(loginPage.isRegistrationPageLinkDisplayed()).toBeTruthy()
  expect(loginPage.isHomePageLinkDisplayed()).toBeTruthy()

  await loginPage.enterEmail(email);
  await loginPage.enterPassword("Zaq12wsx");
  let protectedPage = await loginPage.clickSubmitLoginForm();

  loginPage = await protectedPage.clickOnDeleteAccountButton();

  expect(loginPage.isLoginPageTitleDisplayed()).toBeTruthy()
  expect(loginPage.isLoginPageSubTitleDisplayed()).toBeTruthy()
  expect(loginPage.isEmailInputDisplayed()).toBeTruthy()
  expect(loginPage.isPasswordInputDisplayed()).toBeTruthy()
  expect(loginPage.isSubmitLoginFormButtonDisplayed()).toBeTruthy()
  expect(loginPage.isRegistrationPageLinkDisplayed()).toBeTruthy()
  expect(loginPage.isHomePageLinkDisplayed()).toBeTruthy()
})
