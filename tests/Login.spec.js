const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { FormsPage } = require('../pages/FormsPage');

test.describe('Untangled Pro - Work Order form', () => {
  test('Login and submit a Work Order form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const formsPage = new FormsPage(page);

    // Login
    await loginPage.goto();
    await loginPage.assertLoginPageLoaded();
    await loginPage.login('yamuna_testclient', 'Login@123');
    await loginPage.assertLoginSuccessful();

    // Open the form
    await formsPage.searchAndOpenForm('Work Order1');
    await formsPage.clickAdd();
    await formsPage.assertAddFormDisplayed();

    // Fill the form
    await formsPage.fillTextField();
    await formsPage.fillNumberField();
    await formsPage.selectMultipleOptions(2);
    await formsPage.selectSingleOption();
    //await formsPage.fillCurrentDateTime();

    // Submit and verify
    await formsPage.submit();
    //await formsPage.assertSubmissionSuccess();
    //await formsPage.confirmSuccess();
    await formsPage.assertPopupClosed();
  });
});