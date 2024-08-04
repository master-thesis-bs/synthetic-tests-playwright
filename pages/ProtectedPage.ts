import {expect, Page} from "@playwright/test";
import LoginPage from "./LoginPage";

export default class ProtectedPage {
  constructor(private page: Page) {
  }

  public protectedPageTitle = this.page.locator("//*[@data-aid='protected-page-title']")
  public protectedPageSubTitle = this.page.locator("//*[@data-aid='protected-page-subtitle']")
  public signOutButton = this.page.locator("//*[@data-aid='sign-out-button']")
  public deleteAccountButton = this.page.locator("//*[@data-aid='delete-account-button']")

  async isProtectedPageTitleDisplayed() {
    return await this.protectedPageTitle.isVisible();
  }

  async isProtectedPageSubTitleDisplayed() {
    return await this.protectedPageSubTitle.isVisible();
  }

  async isSignOutButtonDisplayed() {
    return await this.signOutButton.isVisible();
  }

  async isDeleteAccountButtonDisplayed() {
    return await this.deleteAccountButton.isVisible();
  }

  async clickOnSignOutButton() {
    await expect(this.signOutButton).toBeEnabled();
    await this.signOutButton.click();
    return new LoginPage(this.page);
  }

  async clickOnDeleteAccountButton() {
    await expect(this.deleteAccountButton).toBeEnabled();
    await this.deleteAccountButton.click();
    return new LoginPage(this.page);
  }
}
