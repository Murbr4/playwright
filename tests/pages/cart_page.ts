import { expect, Locator, Page } from "playwright/test";

export class CartPage {
    page: Page;
    openCartButton: Locator;
    cartDetailsButton: Locator;
    productSizeLabel: Locator;
    productColorLabel: Locator;
    //productQtyLabel: Locator;
    //productTotalLabel: Locator;

    constructor(page: Page){
        this.page  = page;
        this.openCartButton = this.page.locator('//div[@class="minicart-wrapper"]')
        this.cartDetailsButton = this.page.getByRole('tab', { name: 'See Details' })
        this.productSizeLabel = this.page.locator('#mini-cart')
        this.productColorLabel = this.page.locator('#mini-cart')   
    }

    async openCart(){
        await this.openCartButton.click()
    };

    async seeCartDetails(){
        await this.cartDetailsButton.click()
    };

    async validateProductAttributes(size: string, color: string, qty: string){
        
    };

    
};