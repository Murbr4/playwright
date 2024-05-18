import { expect, Locator, Page } from "playwright/test";

export class SearchPage {
    page: Page;
    inputSearch: Locator;

    constructor(page: Page){
        this.page  = page;
        this.inputSearch = this.page.locator('#search');
    }

    async searchFor(content: string){
        await this.inputSearch.click();    
        await this.inputSearch.fill(content);   
        await this.inputSearch.press('Enter'); 
    };

    async selectProductOnSearchResults(product: string){
        const product_locator  = '//a[@class="product-item-link"][contains(text(),,"' + product + '")]'; 
        await this.page.locator(product_locator).click()
    };

    async URLShallBe(url: string){
        await expect(this.page).toHaveURL(url);
    };

    async MessageNoticeShallBe(message: string){
        const alert_locator  = '//div[@class="message notice"]/div[contains(text(),"' + message + '")]';
        await expect(this.page.locator(alert_locator)).toBeVisible()
    };

};