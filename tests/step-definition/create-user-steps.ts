import { Given, Then, When } from "@cucumber/cucumber"
import { HomePage } from "../pages/home-page";
import { CreateNewCustomerAccount } from "../pages/create-new-customer-account";
import { UserDTO } from "../dto/user-dto";
import { CustomerAccout } from "../pages/customer-account";
import { pageFixture } from "../support/pageFixture";

let user: UserDTO[] = [];


Given('acesso a página inicial do Magento Luma', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goTo();
});


Given('acessar pagína de Create an Account', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goToCreateAnAccount();
});


When('o formulario é submetido com os dados', async function (dataTable) {
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);

    const table = dataTable.hashes();
    user = [];
    for (const row of table) {
        const email_aleatorio = !row['Email'] ? "" : Date.now() + row['Email'];
        user.push({
            firstName: row['FirstName'],
            lastName: row['LastName'],
            email: email_aleatorio,
            password: row['Password'],
            confirmPassword: row['ConfirmPassword'],
        });
    }
    await createNewCustomerAccount.submitFormCreateAnAccount(user[0]);
});

Then('usuário deverá ser criado com sucesso', async function () {
    const customerAccout = new CustomerAccout(pageFixture.page);
    await customerAccout.verifyUserCreated(user[0]);
});

Then('deverá apresentar mensagem de erro para o campo {string}', async function (string) {
    const createNewCustomerAccount = new CreateNewCustomerAccount(pageFixture.page);
    await createNewCustomerAccount.verifyErrorMessage(string);

});
