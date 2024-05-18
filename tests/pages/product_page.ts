import { expect, Locator, Page } from "playwright/test";

export class ProductPage {
    page: Page;
    //sizeButton: Locator;
    //colorButton: Locator;
    qtyButton: Locator;
    addToCartButton: Locator;

    constructor(page: Page){
        this.page  = page;
        //this.sizeButton = this.page.getByLabel('L', { exact: true });
        //this.yellowColorButton = this.page.getByLabel('Yellow');
        this.qtyButton = this.page.getByLabel('Qty');
        this.addToCartButton = this.page.locator("#product-addtocart-button");
    }

    async selectProductAttributes(size: string, color: string, qty: string){
       // await this.sizeButton.getByLabel(size, { exact: true });
      //  await this.colorButton.getByLabel(color);
        await this.qtyButton.click()
        await this.qtyButton.fill(qty)
    };

    async addProductToCart(){
        await this.addToCartButton.click()
    };

};