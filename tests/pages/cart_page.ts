import { expect, Locator, Page } from "playwright/test";

export class CartPage {
    page: Page;
    openCartButton: Locator;
    cartDetailsButton: Locator;

    constructor(page: Page){
        this.page  = page;
        this.openCartButton = this.page.locator('//div[@class="minicart-wrapper"]')
        this.cartDetailsButton = this.page.getByRole('tab', { name: 'See Details' })
    }

    async openCart(){
        await this.openCartButton.click()
    };

    async seeCartDetails(){
        await this.cartDetailsButton.click()
    };

    async selectProductAttributes(size: string, color: string, qty: string){
        
    };

    
};