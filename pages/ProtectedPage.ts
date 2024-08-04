import {Page} from "@playwright/test";
import LoginPage from "./LoginPage";

export default class ProtectedPage {
  constructor(private page: Page) {
  }

  public protectedPageTitle = this.page.locator("//*[@data-aid='protected-page-title']")
  public protectedPageSubTitle = this.page.locator("//*[@data-aid='protected-page-subtitle']")
  public signOutButton = this.page.locator("//*[@data-aid='sign-out-button']")
  public deleteAccountButton = this.page.locator("//*[@data-aid='delete-account-button']")

  async clickOnSignOutButton() {
    await this.signOutButton.hover();
    await this.signOutButton.click();
    return new LoginPage(this.page);
  }

  async clickOnDeleteAccountButton() {
    await this.deleteAccountButton.hover();
    await this.deleteAccountButton.click();
    return new LoginPage(this.page);
  }
}
