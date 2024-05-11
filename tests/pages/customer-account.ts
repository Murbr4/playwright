import { expect, Locator, Page } from "playwright/test";
import { UserDTO } from "../dto/user-dto";

export class CustomerAccout {
    page: Page;
    alert: Locator;
    contactInformation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alert = this.page.getByText('Thank you for registering');
        this.contactInformation = this.page.getByText('Account Information Contact');
    }

    async verifyUserCreated(userDTO: UserDTO) {
        await this.alert.isVisible();
        const alertText = await this.alert.textContent();
        expect(alertText).toBe('Thank you for registering with Main Website Store.');

        const contactInformation = await this.contactInformation.textContent();
        expect(contactInformation).toContain(userDTO.firstName + ' ' + userDTO.lastName);
        expect(contactInformation).toContain(userDTO.email);
    };
};