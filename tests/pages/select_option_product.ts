import { expect, Locator, Page } from "playwright/test";

export class SelectOptionProduct {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectColorProduct(cor:string) {
        await this.page.getByLabel(cor).click();
    };

    async clickButtonProduct(){
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    }

    async size(tamanho: string) {
        await this.page.getByLabel(tamanho, { exact: true }).click();

    };

}