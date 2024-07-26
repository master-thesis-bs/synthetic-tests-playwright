import {expect, Page} from "@playwright/test";
import HomePage from "./HomePage";

export default class ProfilePage {
    constructor(private page: Page) {
    }

    public deleteAccountPasswordInput = this.page.locator("//input[@data-aid='delete-account-password']");
    public deleteAccountButton = this.page.locator("//button[@data-aid='delete-account']");

    async enterDeleteAccountPassword(password: string) {
        await expect(this.deleteAccountPasswordInput).toBeEditable();
        await this.deleteAccountPasswordInput.fill(password);
    }

    async clickOnDeleteAccountButton() {
        await expect(this.deleteAccountButton).toBeEnabled();
        await this.deleteAccountButton.click();
        return new HomePage(this.page);
    }
}
