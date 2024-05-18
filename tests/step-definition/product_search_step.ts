import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/home-page";
import { pageFixture } from "../support/pageFixture";
import { SearchPage } from "../pages/search_page";
import { ProductPage } from "../pages/product_page";
import { CartPage } from "../pages/cart_page";

Given('que eu acesso a página inicial do Magento', async function () {
    const homePage = new HomePage(pageFixture.page);
    await homePage.goTo();
});

When('busco pelo produto {string}', async function (content_search) {
    const searchPage = new SearchPage(pageFixture.page);
    await searchPage.searchFor(content_search)
});

When('seleciono a compra de {string} unidades na cor {string} e tamanho {string} do {string}', async function (qty, color, size, product) {
    const search_page = new SearchPage(pageFixture.page);
    const product_page = new ProductPage(pageFixture.page);

    await search_page.selectProductOnSearchResults(product);
    await product_page.selectProductAttributes(color, size, qty)
});

When('adiciono o produto ao carrinho', async function () {
    const product_page = new ProductPage(pageFixture.page);
    await product_page.addProductToCart()
});

When('abro o carrinho', async function () {
    const cart_page = new CartPage(pageFixture.page);
    await cart_page.openCart()
});

Then('eu vejo o produto que com os atributos que selecionei', async function () {
    const cart_page = new CartPage(pageFixture.page);
    await cart_page.seeCartDetails()
});

Then('com o valor total de {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('eu faço uma busca com menos de três caracteres', async function () {
    const searchPage = new SearchPage(pageFixture.page);
    await searchPage.searchFor("at")
});

Then('sou redirecionado para a página de buscas sem resultados', async function () {
    const searchPage = new SearchPage(pageFixture.page);
    await searchPage.URLShallBe("https://magento2-demo.magebit.com/catalogsearch/result/?q=at")
});

Then('vejo a mensagem {string}', async function (alert_message) {
    const searchPage = new SearchPage(pageFixture.page)
    await searchPage.MessageNoticeShallBe(alert_message)
});

When('eu faço uma busca por {string}', async function (content_search) {
    const searchPage = new SearchPage(pageFixture.page);
    await searchPage.searchFor(content_search)
});

Then('sou redirecionado para a página de buscas', async function () {
    const searchPage = new SearchPage(pageFixture.page);
    await searchPage.URLShallBe("https://magento2-demo.magebit.com/catalogsearch/result/?q=asldfjlasfjlasjfaksl")
});
