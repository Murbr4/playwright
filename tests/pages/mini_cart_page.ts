import { expect, Locator, Page } from "playwright/test";

export class CartPage {
    page: Page;
    openCartButton: Locator;
    cartDetailsButton: Locator;
    productAttributes: Locator;
    totalPrice: Locator;

    constructor(page: Page){
        this.page  = page;
        this.openCartButton = this.page.locator('//div[@class="minicart-wrapper"]');
        this.cartDetailsButton = this.page.getByRole('tab', { name: 'See Details' });
        this.productAttributes = this.page.locator('#mini-cart');
        this.totalPrice = this.page.locator('.price-wrapper');
    }

    async openCart(){
        await this.page.waitForSelector('//body[@aria-busy="false"]', { timeout: 60000 });
        await this.openCartButton.click()
    };

    async expandCartDetails(){
        await this.cartDetailsButton.click()
    };

    async validateProductAttributes(size: string, color: string){
        await expect(this.productAttributes.getByText(size, {exact: true})).toBeVisible();
        await expect(this.productAttributes.getByText(color, { exact: true})).toBeVisible();
    };

    async productTotalPriceShallBe(total: string){
        await expect(this.totalPrice.getByText(total)).toBeVisible();
    };

    
};