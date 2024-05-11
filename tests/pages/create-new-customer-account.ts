import { expect, Locator, Page } from "playwright/test";
import { UserDTO } from "../dto/user-dto";

export class CreateNewCustomerAccount {
    page: Page;
    fieldFirstName: Locator;
    fieldLastName: Locator;
    fieldEmail: Locator;
    fieldPassword: Locator;
    fieldConfirmPassword: Locator;
    buttonCreateAnAccount: Locator;    

    constructor(page: Page) {
        this.page = page;
        this.fieldFirstName = this.page.getByLabel('First Name');
        this.fieldLastName = this.page.getByLabel('Last Name');
        this.fieldEmail = this.page.getByLabel('Email', { exact: true });
        this.fieldPassword = this.page.getByRole('textbox', { name: 'Password*', exact: true });
        this.fieldConfirmPassword = this.page.getByLabel('Confirm Password');
        this.buttonCreateAnAccount = this.page.getByRole('button', { name: 'Create an Account' });
    };

    async submitFormCreateAnAccount(userDTO: UserDTO) {
        await this.fieldFirstName.fill(userDTO.firstName);
        await this.fieldLastName.fill(userDTO.lastName);
        await this.fieldEmail.fill(userDTO.email);
        await this.fieldPassword.fill(userDTO.password);
        await this.fieldConfirmPassword.fill(userDTO.confirmPassword);
        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState();
        await this.buttonCreateAnAccount.click();
    };

    async verifyErrorMessage(field: string) {
        const errorMsg = this.page.locator('#form-validate div')
            .filter({ hasText: field }) //'First Name'
            .getByText('This is a required field');
        await errorMsg.isVisible();       

        const errorMsgTxt = await errorMsg.textContent();
        expect(errorMsgTxt).toBe('This is a required field.');
    };
};