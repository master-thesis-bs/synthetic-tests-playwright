import {expect, Page} from "@playwright/test";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ProfilePage from "./ProfilePage";

export default class HomePage {
    constructor(private page: Page) {
    }

    public title = this.page.locator("");
    public loginButtonLocator = this.page.locator("//div[@data-aid='login']");
    public registerButtonLocator = this.page.locator("//div[@data-aid='register']");
    public logoutButtonLocator = this.page.locator("//div[@data-aid='logout']");
    public profileButtonLocator = this.page.locator("//div[@data-aid='profile']");

    async navigate() {
        await this.page.goto('/');
    }

    async clickLoginButton() {
        await expect(this.loginButtonLocator).toBeEnabled();
        await this.loginButtonLocator.click();
        return new LoginPage(this.page)
    }

    async isLogoutButtonDisplayed() {
        return await this.logoutButtonLocator.isVisible();
    }

    async isProfileButtonDisplayed() {
        return await this.profileButtonLocator.isVisible();
    }

    async clickLogoutButton() {
        await expect(this.logoutButtonLocator).toBeEnabled();
        await this.logoutButtonLocator.click()
        return new HomePage(this.page);
    }

    async isLoginButtonDisplayed() {
        return await this.loginButtonLocator.isVisible();
    }

    async clickRegisterButton() {
        await expect(this.registerButtonLocator).toBeEnabled();
        await this.registerButtonLocator.click();
        return new RegistrationPage(this.page);
    }

    async clickProfileButton() {
        await expect(this.profileButtonLocator).toBeEnabled();
        await this.profileButtonLocator.click();
        return new ProfilePage(this.page);
    }
}
