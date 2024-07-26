import {expect, Page} from "@playwright/test";
import HomePage from "./HomePage";

export default class RegistrationPage {
    constructor(private page: Page) {
    }

    public nameInputField = this.page.locator("//*[@id='name']")
    public emailInputField = this.page.locator("//*[@id='email']");
    public passwordInputField = this.page.locator("//*[@id='password']")
    public passwordConfirmationInputField = this.page.locator("//*[@id='password_confirmation']")
    public submitRegistrationFormButton = this.page.locator("//button")

    async enterEmail(email: string) {
        await expect(this.emailInputField).toBeEditable();
        await this.emailInputField.fill(email);
    }

    async enterPassword(password: string) {
        await expect(this.passwordInputField).toBeEditable();
        await this.passwordInputField.fill(password);
    }

    async enterPasswordConfirmation(password: string) {
        await expect(this.passwordConfirmationInputField).toBeEditable();
        await this.passwordConfirmationInputField.fill(password);
    }

    async enterName(name: string) {
        await expect(this.nameInputField).toBeEditable();
        await this.nameInputField.fill(name);
    }

    async submitRegistrationForm() {
        await expect(this.submitRegistrationFormButton).toBeEnabled();
        await this.submitRegistrationFormButton.click();
        return new HomePage(this.page);
    }
}
