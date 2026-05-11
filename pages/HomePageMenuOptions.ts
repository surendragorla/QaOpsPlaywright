import { Page } from '@playwright/test';

export class HomePageMenuOptions {
  constructor(private page: Page) {}

    async isBooksVisible() {

        //return await this.page.getByRole('link', { name: 'Books' }).first().isVisible(); 
        return await this.page.locator(".header-menu .top-menu a[href='/books']").isVisible();
    }
    async isComputersVisible() {
        return await this.page.locator(".header-menu .top-menu a[href='/computers']").isVisible();
    }
    async isElectronicsVisible() {
        return await this.page.locator(".header-menu .top-menu a[href='/electronics']").isVisible();
    }
    async isApparelVisible() {
        return await this.page.locator(".header-menu .top-menu a[href='/apparel-shoes']").isVisible();
    }
    async isDigitalDownloadsVisible() {
        return await this.page.locator(".header-menu .top-menu a[href='/digital-downloads']").isVisible();
    }
    async isJewelryVisible() {
        return await this.page.locator(".header-menu .top-menu a[href='/jewelry']").isVisible();
    }
    async isGiftCardsVisible() {
        return await this.page.locator(".header-menu .top-menu a[href='/gift-cards']").isVisible();
    }



}