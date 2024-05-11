import { expect, test } from "@playwright/test";
import { HomePage } from "./pages/home-page";
import { CreateNewCustomerAccount } from "./pages/create-new-customer-account";
import { UserDTO } from "./dto/user-dto";
import { CustomerAccout } from "./pages/customer-account";

test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo();
    await homePage.goToCreateAnAccount();
});

test('Criar usuário', { tag: '@smoke' }, async ({ page }) => {

    const createNewCustomerAccount = new CreateNewCustomerAccount(page);

    const userDTO: UserDTO = {
        firstName: 'João',
        lastName: 'Silva',
        email: Date.now() + '_email@abc.com',
        password: 'Teste_123',
        confirmPassword: 'Teste_123',
    };

    await createNewCustomerAccount.submitFormCreateAnAccount(userDTO);
    const customerAccout = new CustomerAccout(page);
    await customerAccout.verifyUserCreated(userDTO);

});

test('Criar usuário - campo obrigatório', async ({ page }) => {
    const createNewCustomerAccount = new CreateNewCustomerAccount(page);

    const userDTO: UserDTO = {
        firstName: ' ',
        lastName: 'Silva',
        email: Date.now() + '_email@abc.com',
        password: 'Teste_123',
        confirmPassword: 'Teste_123',
    };
    await createNewCustomerAccount.submitFormCreateAnAccount(userDTO);
    await createNewCustomerAccount.verifyErrorMessage('First Name');

});