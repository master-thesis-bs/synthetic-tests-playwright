import {Page} from "@playwright/test";
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
        await this.logoutButtonLocator.click()
        return new HomePage(this.page);
    }

    async isLoginButtonDisplayed() {
        return await this.loginButtonLocator.isVisible();
    }

    async clickRegisterButton() {
        await this.registerButtonLocator.click();
        return new RegistrationPage(this.page);
    }

    async clickProfileButton() {
        await this.profileButtonLocator.click();
        return new ProfilePage(this.page);
    }
}
