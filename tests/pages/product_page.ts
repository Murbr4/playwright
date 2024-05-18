import { expect, Locator, Page } from "playwright/test";

export class ProductPage {
    page: Page;
    largeSizeButton: Locator;
    colorButton: Locator;
    qtyButton: Locator;
    addToCartButton: Locator;

    constructor(page: Page){
        this.page  = page;
        this.largeSizeButton = this.page.getByLabel('L', { exact: true });
        this.qtyButton = this.page.getByLabel('Qty');
        this.addToCartButton = this.page.locator("#product-addtocart-button");
    }

    async selectProductAttributes(size: string, color: string, qty: string){
        await this.largeSizeButton.click()
        await this.page.getByLabel('Yellow').click()
        await this.qtyButton.click()
        await this.qtyButton.fill(qty)
    };

    async addProductToCart(){
        await this.addToCartButton.click()
    };

};