import { Page } from '@playwright/test';

export class LandingPage {

  constructor(private page: Page) {}

async clickComputers() {
    await this.page.getByRole('link', { name: 'Computers' }).first().click();
  }

  async clickNotebooks() {
    await this.page.getByRole('link', { name: 'Notebooks' }).nth(1).click();
  }
 
  
}
