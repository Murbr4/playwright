import { expect, Locator, Page } from "playwright/test";

export class PageJaquets {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openMenSection() {
        await this.page.locator('#ui-id-5').click()

    };

    async openType(tipo: string) {
        await this.page.getByRole('link', { name: tipo, exact: true }).click();
    };


};