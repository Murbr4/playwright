import { expect, Locator, Page } from "playwright/test";

export class ProductCatalog {
    page: Page;
    addWishListButton: Locator;
    firstCatalogItem: Locator;

    constructor(page: Page){
        this.page  = page;
        this.addWishListButton = this.page.getByRole('link', { name: ' Add to Wish List' });
        this.firstCatalogItem = this.page.locator('ol > li:first-child');
    }

    async selectCategory(category: string){
        await this.page.getByRole('tab', { name: category }).click();
    };

    async selectSubCategory(subcategory: string){
        await this.page.getByRole('link', { name: subcategory }).click();
    };

    async validatePageURL(url: string){
        await expect(this.page).toHaveURL(url);
    };

    async addToWishList(){
        await this.addWishListButton.click();
    };

    async opentFirstItemOfList(){
        await this.firstCatalogItem.click();
    }

};