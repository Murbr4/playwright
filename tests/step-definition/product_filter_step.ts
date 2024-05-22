import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/home-page";
import { pageFixture } from "../support/pageFixture";
import { ProductCatalog } from "../pages/product_catalog";

When('filtro a opção de compra por {string} em {string}', async function (subcategory, category) {
    const catalogPage = new ProductCatalog(pageFixture.page)
    await catalogPage.selectCategory(category);
    await catalogPage.selectSubCategory(subcategory);
});

Then('vejo que a a página foi atualizada com os filtros escolhidos', async function () {
    const catalogPage = new ProductCatalog(pageFixture.page);
    await catalogPage.validatePageURL('https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html?climate=201&style_bottom=112');
});
