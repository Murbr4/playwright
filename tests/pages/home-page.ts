import { Locator, Page } from "playwright/test";

export class HomePage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    };

    async goTo(){
        const URL = String(process.env.BASE_URL);
        await this.page.goto(URL);
    };

    async goToCreateAnAccount(){
        await this.page.getByRole('link', { name: 'Create an Account' }).click();
    };
};