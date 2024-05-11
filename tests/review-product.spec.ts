import { test } from "@playwright/test";

test('Review Product', async ({page}) => {
    await page.goto('https://magento2-demo.magebit.com/radiant-tee.html');
    await page.locator('#tab-label-reviews').getByRole('link', { name: 'Reviews' }).click();
    await page.waitForLoadState();
    const rating_1 = page.getByText('Your Rating Rating').getByTitle('1 star');
    await rating_1.evaluate(((input: HTMLInputElement) => input.click()));
    await page.waitForTimeout(1000);
    const rating_2 = page.getByText('Your Rating Rating').getByTitle('2 stars');
    await rating_2.evaluate(((input: HTMLInputElement) => input.click()));
    await page.waitForTimeout(1000);
    const rating_3 = page.getByText('Your Rating Rating').getByTitle('3 stars');
    await rating_3.evaluate(((input: HTMLInputElement) => input.click()));
    await page.waitForTimeout(1000);
    const rating_4 = page.getByText('Your Rating Rating').getByTitle('4 stars');
    await rating_4.evaluate(((input: HTMLInputElement) => input.click()));
    await page.waitForTimeout(1000);
    const rating_5 = page.getByText('Your Rating Rating').getByTitle('5 stars');
    await rating_5.evaluate(((input: HTMLInputElement) => input.click()));
    await page.waitForTimeout(1000);    
});