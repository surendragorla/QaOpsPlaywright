import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async continueBilling() {
    await this.page.locator("input[onclick='Billing.save()']").click();
  }

  async saveShipping() {
    await this.page.locator("input[onclick='Shipping.save()']").click();
  }

  async saveShippingMethod() {
    await this.page.locator("input[onclick='ShippingMethod.save()']").click();
  }

  async savePaymentMethod() {
    await this.page.locator("input[onclick='PaymentMethod.save()']").click();
  }

  async savePaymentInfo() {
    await this.page.locator("input[onclick='PaymentInfo.save()']").click();
  }

  async confirmOrder() {
    await this.page.locator("input[onclick='ConfirmOrder.save()']").click();
  }

  async viewOrderDetails() {
    await this.page.getByRole('link', { name: 'Click here for order details.' }).click();
  }
}
