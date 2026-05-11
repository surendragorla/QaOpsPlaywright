import config from '../config';
import { test , expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { HomePageMenuOptions } from '../pages/HomePageMenuOptions';

test('Verify that all menu options are visible', async ({ page })=> {
 
    const homePage = new HomePage(page);
    const menuOptions = new HomePageMenuOptions(page);
    const loginPage = new LoginPage(page);
    await homePage.goto();
    await homePage.clickLogin();
    await loginPage.fillEmail(config.Email);
    await loginPage.fillPassword(config.password);
    await loginPage.clickLoginButton();
    await expect(await menuOptions.isBooksVisible()).toBeTruthy();
    await expect(await menuOptions.isComputersVisible()).toBeTruthy();
    await expect(await menuOptions.isElectronicsVisible()).toBeTruthy();
    await expect(await menuOptions.isApparelVisible()).toBeTruthy();
    await expect(await menuOptions.isDigitalDownloadsVisible()).toBeTruthy();
    await expect(await menuOptions.isJewelryVisible()).toBeTruthy();
    await expect(await menuOptions.isGiftCardsVisible()).toBeTruthy();

})