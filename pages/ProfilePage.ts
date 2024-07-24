import {Page} from "@playwright/test";
import HomePage from "./HomePage";

export default class ProfilePage {
    constructor(private page: Page) {
    }

    public deleteAccountPasswordInput = this.page.locator("//input[@data-aid='delete-account-password']");
    public deleteAccountButton = this.page.locator("//button[@data-aid='delete-account']");

    async enterDeleteAccountPassword(password: string) {
        await this.deleteAccountPasswordInput.fill(password);
    }

    async clickOnDeleteAccountButton() {
        await this.deleteAccountButton.click();
        return new HomePage(this.page);
    }
}
