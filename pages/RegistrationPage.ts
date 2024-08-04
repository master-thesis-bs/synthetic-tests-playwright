import {expect, Page} from "@playwright/test";
import HomePage from "./HomePage";
import ProtectedPage from "./ProtectedPage";
import LoginPage from "./LoginPage";

export default class RegistrationPage {
  constructor(private page: Page) {
  }

  public registrationPageTitle = this.page.locator("//*[@data-aid='registration-page-title']")
  public registrationPageSubTitle = this.page.locator("//*[@data-aid='registration-page-subtitle']")
  public emailInputField = this.page.locator("//*[@data-aid='email-input']");
  public passwordInputField = this.page.locator("//*[@data-aid='password-input']")
  public submitRegistrationFormButton = this.page.locator("//*[@data-aid='submit-form']")
  public loginPageLink = this.page.locator("//*[@data-aid='login-page-link']")
  public homePageLink = this.page.locator("//*[@data-aid='home-page-link']")

  async enterEmail(email: string) {
    await expect(this.submitRegistrationFormButton).toBeEditable();
    await this.emailInputField.fill(email);
  }

  async enterPassword(password: string) {
    await expect(this.submitRegistrationFormButton).toBeEditable();
    await this.passwordInputField.fill(password);
  }

  async isEmailInputDisplayed() {
    return await this.emailInputField.isVisible();
  }

  async isPasswordInputDisplayed() {
    return await this.passwordInputField.isVisible();
  }

  async isSubmitRegistrationFormButtonDisplayed() {
    return this.submitRegistrationFormButton.isVisible();
  }

  async clickSubmitRegistrationForm() {
    await expect(this.submitRegistrationFormButton).toBeEnabled();
    await this.submitRegistrationFormButton.click();
    return new LoginPage(this.page);
  }

  async isRegistrationPageTitleDisplayed() {
    return await this.registrationPageTitle.isVisible();
  }

  async isRegistrationPageSubTitleDisplayed() {
    return await this.registrationPageSubTitle.isVisible();
  }

  async isLoginPageLinkDisplayed() {
    return await this.loginPageLink.isVisible();
  }

  async isHomePageLinkDisplayed() {
    return await this.homePageLink.isVisible();
  }

  async clickOnLoginPageLink() {
    await expect(this.loginPageLink).toBeEnabled();
    await this.loginPageLink.click();
    return new ProtectedPage(this.page);
  }
}
