import { expect, Locator, Page } from "playwright/test";

export class ProductCatalog {
    page: Page;

    constructor(page: Page){
        this.page  = page;
    }

    async selectCategory(category: string){
        this.page.getByRole('tab', { name: category });
    };

    async selectSubCategory(subcategory: string){
        this.page.getByRole('link', { name: subcategory });
    };

    async validatePageURL(url: string){
        expect(this.page).toHaveURL(url);
    };

};