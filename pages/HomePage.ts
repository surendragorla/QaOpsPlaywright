import { Page } from '@playwright/test';
import config from '../config';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(config.URL);
  }

  async clickLogin() {
    await this.page.getByRole('link', { name: 'Log in' }).click();
  }
async clickLogout() {
    await this.page.getByRole('link', { name: 'Log out' }).click();
  }

  async isRegisterVisible() {
    return this.page.getByRole('link', { name: 'Register' }).isVisible();
  }
  
}
