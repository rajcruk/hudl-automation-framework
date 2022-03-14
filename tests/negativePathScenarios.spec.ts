import test, { TestFixture, Page, expect } from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import staticData from "../fixtures/staticData.json";

let loginPage:LoginPage;

test.beforeEach(async({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate(staticData.url);
});

test('user gets correct error message for invalid credentials', async ({page}) => {
    await loginPage.login(staticData.invalidUserName, staticData.invalidUserName);
    const expErrMessage = "We didn't recognize that email and/or password. Need help?";
    const erroMessage = await loginPage.captureError();
    expect(erroMessage).toEqual(expErrMessage);
});

test('user gets correct error message for empty credentials', async ({page}) => {
    await loginPage.login('', '');
    const expErrMessage = "We didn't recognize that email and/or password. Need help?";
    const erroMessage = await loginPage.captureError();
    expect(erroMessage).toEqual(expErrMessage);
});

// Not sure we want to add this test?
// test('user gets correct error message for using test credentials on production', async ({page}) => {
//     await loginPage.login('test1@hudl.com', 'password');
//     const expErrMessage = "We didn't recognize that email and/or password. Need help?";
//     const erroMessage = await loginPage.captureError();
//     expect(erroMessage).toEqual(expErrMessage);
// });