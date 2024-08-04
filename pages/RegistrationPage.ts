import {expect, Page} from "@playwright/test";
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

  async clickSubmitRegistrationForm() {
    await this.submitRegistrationFormButton.hover();
    await this.submitRegistrationFormButton.click();
    return new LoginPage(this.page);
  }
}
