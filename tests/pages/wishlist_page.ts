import exp from "constants";
import { expect, Locator, Page } from "playwright/test";

export class Wishlist {
    page: Page;
    wishlistError: Locator;

    constructor(page: Page){
        this.page  = page;
        this.wishlistError = this.page.locator('//div[text()="You must login or register to add items to your wishlist."]');
    }

    async validateAlert(expectedMessage: string){
        //await this.page.getByText('You must login or register to add items to your wishlist.');
        const visibleAlertText = await this.wishlistError.innerText();
        expect(visibleAlertText).toEqual(expectedMessage);
    };

};