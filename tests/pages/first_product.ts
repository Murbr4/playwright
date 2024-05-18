import { expect, Locator, Page } from "playwright/test";

export class FirstProduct{
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async firstJaquet() {
        await this.page.getByRole('link', { name: 'Proteus Fitness Jackshirt' }).first().click();
    };

    async firstTee() {
        await this.page.getByRole('link', { name: 'Strike Endurance Tee' }).first().click();
    };

    async firstPants() {
        await this.page.getByRole('link', { name: 'Cronus Yoga Pant' }).first().click();
    };  
};