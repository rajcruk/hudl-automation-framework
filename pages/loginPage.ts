import { expect, Locator, Page } from "@playwright/test";

class LoginPage {
  page: Page;
  loginInput: Locator;
  pwdInput: Locator;
  loginBtn: Locator;
  errMsgLocator: Locator;
  displayNameLocator: Locator;
  needHelpLink: Locator;
  resetInfo: Locator;
  resetErrMsgLocator: Locator;
  forgotEmail: Locator;
  resetBtn: Locator;
  resetPwdConfMsg: Locator;
  rememberMeChkBx: Locator;
  logOutLink: Locator;
  loginBtnOnMainNav: Locator;
  signUpLink: Locator;
  loginWithOrg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginInput = page.locator("#email");
    this.pwdInput = page.locator("#password");
    this.loginBtn = page.locator("#logIn");
    this.errMsgLocator = page.locator(".login-error-container p");
    this.displayNameLocator = page.locator(
      ".hui-globaluseritem__display-name span"
    );
    this.needHelpLink = page.locator("#forgot-password-link");
    this.resetInfo = page.locator('div[class="reset-info"] >> nth=0');
    this.resetErrMsgLocator = page.locator(
      'div[class="reset-error-container"] p'
    );
    this.forgotEmail = page.locator("#forgot-email");
    this.resetBtn = page.locator("#resetBtn");
    this.resetPwdConfMsg = page.locator('div[class="reset-info"] >> nth=1');
    this.rememberMeChkBx = page.locator(".checkbox-container");
    this.logOutLink = page.locator(
      'a[data-qa-id="webnav-usermenu-logout"] >> nth=0'
    );
    this.loginBtnOnMainNav = page.locator('a[data-qa-id="login"]');
    this.signUpLink = page.locator('text=Sign up');
    this.loginWithOrg = page.locator('text=Log In with an Organization');
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(user: string, pwd: string) {
    await this.loginInput.fill(user);
    await this.pwdInput.fill(pwd);
    await this.loginBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async loginWithRemeberMe(user: string, pwd: string) {
    await this.rememberMeChkBx.click();
    await this.login(user, pwd);
  }

  async clickOnLoginButtonOnMainPage() {
    await this.loginBtnOnMainNav.click();
    await expect(this.loginInput).toBeVisible();
    await this.page.waitForTimeout(1000);
  }
  async logOut() {
    await this.displayNameLocator.hover();
    await this.logOutLink.click();
    await expect(this.loginBtnOnMainNav).toBeVisible();
  }

  async enterUserNameToRestPassword(user: string) {
    await this.forgotEmail.fill(user);
    await this.resetBtn.click();
    await this.page.waitForTimeout(1000);
  }

  async setUserPassword(pwd: string) {
    await this.pwdInput.fill(pwd);
  }

  async captureError(): Promise<string> {
    let message = "";
    await expect(this.errMsgLocator).toBeVisible();
    message = await this.errMsgLocator.innerText();
    return message;
  }

  async displayName(): Promise<string> {
    let name = "";
    await this.page.waitForNavigation({ url: "https://www.hudl.com/home" });
    await expect(this.displayNameLocator).toBeVisible();
    name = await this.displayNameLocator.innerText();
    return name;
  }

  async needHelp() {
    await this.needHelpLink.click();
    await this.page.waitForTimeout(1000);
  }

  async signUp() {
    await this.signUpLink.click();
    await this.page.waitForTimeout(1000);
  }

  async loginWithOrganisation() {
    await this.loginWithOrg.click();
    await this.page.waitForTimeout(1000);
  }

  async getResetInfo(): Promise<string> {
    let resetMessage = "";
    await expect(this.resetInfo).toBeVisible();
    resetMessage = await this.resetInfo.innerText();
    return resetMessage;
  }

  async getResetErrorMessage(): Promise<string> {
    let errorMessage = "";
    await expect(this.resetErrMsgLocator).toBeVisible();
    errorMessage = await this.resetErrMsgLocator.innerText();
    return errorMessage;
  }

  async getResetPasswordConfirmationMessage(): Promise<string> {
    let confMessage = "";
    await expect(this.resetPwdConfMsg).toBeVisible();
    confMessage = await this.resetPwdConfMsg.innerText();
    return confMessage;
  }

  async captureUserName(): Promise<string> {
    let userName = "";
    await expect(this.loginInput).toBeVisible();
    userName = await this.page.inputValue("#email");
    return userName;
  }
}
module.exports = { LoginPage };
