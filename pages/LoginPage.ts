import {expect, Page} from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {
    constructor(private page: Page) {
    }

    public emailInputField = this.page.locator("//*[@id='email']");
    public passwordInputField = this.page.locator("//*[@id='password']")
    public submitLoginFormButton = this.page.locator("//button")

    async enterEmail(email: string) {
        await expect(this.submitLoginFormButton).toBeEditable();
        await this.emailInputField.fill(email);
    }

    async enterPassword(password: string) {
        await expect(this.submitLoginFormButton).toBeEditable();
        await this.passwordInputField.fill(password);
    }

    async submitLoginForm() {
        await expect(this.submitLoginFormButton).toBeEnabled();
        await this.submitLoginFormButton.click();
        return new HomePage(this.page);
    }
}
