import { expect, test } from "@playwright/test";

test('Criar usuário', async ({ page }) => {
    const dateTime = Date.now();
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByRole('link', { name: 'Create an Account' }).click();
    await page.getByLabel('First Name').fill('João');
    await page.getByLabel('Last Name').fill('Silva');
    await page.getByLabel('Email', { exact: true }).fill(dateTime + '_email@abc.com');
    await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Teste123');
    await page.getByLabel('Confirm Password').fill('Teste123');
    await page.getByRole('button', { name: 'Create an Account' }).click();
    const result = await page.getByText('Thank you for registering').textContent();
    expect(result).toBe('Thank you for registering with Main Website Store.');
    const contactInformation = await page.getByText('Account Information Contact').textContent();
    expect(contactInformation).toContain('João Silva');
    expect(contactInformation).toContain(dateTime + '_email@abc.com');
});