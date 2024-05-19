import { expect, Locator, Page } from "playwright/test";

//mover tudo para o page de login
export class Wishlist {
    page: Page;
    alertMessage: Locator;

    constructor(page: Page){
        this.page  = page;
        this.alertMessage = this.page.getByRole('alert');
    }

    async validateAlert(expectedMessage: string){
        const receivedMessage =  await this.alertMessage.textContent();
        expect(receivedMessage).toEqual(expectedMessage);
    };

};