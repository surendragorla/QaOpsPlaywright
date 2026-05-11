import { test , expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { LandingPage } from '../pages/landingPage';
import config from '../config';

test('Remove product from cart', async ({ page })=>{
     
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cartPage = new CartPage(page);
    const productPage = new ProductPage(page);
    await homePage.goto();
    await homePage.clickLogin();
    await loginPage.fillEmail(config.Email);
    await loginPage.fillPassword(config.password);
    await loginPage.clickLoginButton();
    await landingPage.clickComputers();
    await landingPage.clickNotebooks();
    await productPage.addToCart();
    await productPage.shoppingCart();
    await cartPage.removeFromCart();
    await cartPage.updateCart();
    await expect( await cartPage.isShoppingCartEmpty()).toBeTruthy();
    //await page.waitForTimeout(3000);
    await homePage.clickLogout();
    await homePage.isRegisterVisible();

})