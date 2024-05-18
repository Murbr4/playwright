import { expect, Locator, Page } from "playwright/test";

export class ProductPage {
    page: Page;
    //colorButton: Locator;
    qtyButton: Locator;
    addToCartButton: Locator;

    constructor(page: Page){
        this.page  = page;
        this.qtyButton = this.page.getByLabel('Qty');
        this.addToCartButton = this.page.locator("#product-addtocart-button");
    }

    async selectProductAttributes(size: string, color: string, qty: string){
        await this.page.getByLabel(size, { exact: true }).click();

        await this.page.getByLabel(color).click()
        await this.qtyButton.click()
        await this.qtyButton.fill(qty)
    };

    async addProductToCart(){
        await this.addToCartButton.click()
    };

};