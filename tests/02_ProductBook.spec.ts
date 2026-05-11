
import config from '../config';
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LandingPage } from '../pages/landingPage';

// This test case covers the complete product booking flow, from logging in to confirming the order and logging out.
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

