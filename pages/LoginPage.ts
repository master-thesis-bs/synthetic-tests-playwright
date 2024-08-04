import {expect, Page} from "@playwright/test";
import RegistrationPage from "./RegistrationPage";
import ProtectedPage from "./ProtectedPage";

export default class LoginPage {
  constructor(private page: Page) {
  }

  public loginPageTitle = this.page.locator("//*[@data-aid='login-page-title']")
  public loginPageSubTitle = this.page.locator("//*[@data-aid='login-page-subtitle']")
  public emailInputField = this.page.locator("//*[@data-aid='email-input']");
  public passwordInputField = this.page.locator("//*[@data-aid='password-input']")
  public submitLoginFormButton = this.page.locator("//*[@data-aid='submit-form']")
  public registrationPageLink = this.page.locator("//*[@data-aid='registration-page-link']")
  public homePageLink = this.page.locator("//*[@data-aid='home-page-link']")

  async enterEmail(email: string) {
    await expect(this.submitLoginFormButton).toBeEditable();
    await this.emailInputField.fill(email);
  }

  async enterPassword(password: string) {
    await expect(this.submitLoginFormButton).toBeEditable();
    await this.passwordInputField.fill(password);
  }

  async isEmailInputDisplayed() {
    return await this.emailInputField.isVisible();
  }

  async isPasswordInputDisplayed() {
    return await this.passwordInputField.isVisible();
  }

  async clickSubmitLoginForm() {
    await expect(this.submitLoginFormButton).toBeEnabled();
    await this.submitLoginFormButton.click();
    return new ProtectedPage(this.page);
  }

  async isSubmitLoginFormButtonDisplayed() {
    return this.submitLoginFormButton.isVisible();
  }

  async isLoginPageTitleDisplayed() {
    return await this.loginPageTitle.isVisible();
  }

  async isLoginPageSubTitleDisplayed() {
    return await this.loginPageSubTitle.isVisible();
  }

  async isRegistrationPageLinkDisplayed() {
    return await this.registrationPageLink.isVisible();
  }

  async isHomePageLinkDisplayed() {
    return await this.homePageLink.isVisible();
  }

  async clickOnRegistrationPageLink() {
    await expect(this.registrationPageLink).toBeEnabled();
    await this.registrationPageLink.click();
    return new RegistrationPage(this.page);
  }
}
