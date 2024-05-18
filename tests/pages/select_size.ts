import { expect, Locator, Page } from "playwright/test";

export class SelectSize {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async size(tamanho: string) {
        await this.page.getByLabel(tamanho, { exact: true }).click();

    };

};