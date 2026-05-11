import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async fillEmail(email: string) {
    await this.page.getByRole('textbox', { name: 'Email:' }).fill(email);
  }

  async fillPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password:' }).fill(password);
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }
}
