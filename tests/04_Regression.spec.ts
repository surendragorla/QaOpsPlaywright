import config from '../config';
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LandingPage } from '../pages/landingPage';
import { HomePageMenuOptions } from '../pages/HomePageMenuOptions';


test('Product Booking', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const landingPage = new LandingPage(page);
  await homePage.goto();
  await homePage.clickLogin();
  await loginPage.fillEmail(config.Email);
  await loginPage.fillPassword(config.password);
  await loginPage.clickLoginButton();
  await landingPage.clickComputers();
  await landingPage.clickNotebooks();
  await productPage.addToCart();
  await productPage.shoppingCart();
  //await homePage.clickShoppingCart();
  await cartPage.checkTermsOfService();
  await cartPage.clickCheckout();
  await checkoutPage.continueBilling();
  await checkoutPage.saveShipping();
  await checkoutPage.saveShippingMethod();
  await checkoutPage.savePaymentMethod();
  await checkoutPage.savePaymentInfo();
  await checkoutPage.confirmOrder();
  await checkoutPage.viewOrderDetails();
  await homePage.clickLogout();
  await expect(await homePage.isRegisterVisible()).toBeTruthy();
});

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

});

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

});