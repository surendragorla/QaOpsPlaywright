import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}


  async removeFromCart(){
    await this.page.locator("input[name='removefromcart']").click();
  }
  async updateCart(){

    await this.page.locator("input[value='Update shopping cart']").click();
  
  }
  async isShoppingCartEmpty(){

    return this.page.getByText('Your Shopping Cart is empty!').isVisible
  }
  async checkTermsOfService() {
    await this.page.locator('#termsofservice').check();
  }

  async clickCheckout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}

