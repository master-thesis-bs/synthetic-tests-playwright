import {expect, Page} from "@playwright/test";
import LoginPage from "./LoginPage";

export default class HomePage {
  constructor(private page: Page) {
  }

  public title = this.page.locator("//div[@data-aid='home-page-title']");
  public loginPageButtonLocator = this.page.locator("//button[@data-aid='auth-page-button']");

  async navigate() {
    await this.page.goto('/');
    return new HomePage(this.page);
  }

  async clickLoginPageButton() {
    await expect(this.loginPageButtonLocator).toBeEnabled();
    await this.loginPageButtonLocator.click();
    return new LoginPage(this.page)
  }

  async isLoginButtonDisplayed() {
    return await this.loginPageButtonLocator.isVisible();
  }

  async isHomePageTitleDisplayed() {
    return await this.title.isVisible();
  }

  async getHomePageTitleText() {
    return await this.title.textContent();
  }
}
