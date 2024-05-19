import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../support/pageFixture";
import { Wishlist } from "../pages/wishlist_page";
import { ProductCatalog } from "../pages/product_catalog";

When('tento adicionar o primeiro produto na lista de desejos', async function () {
    const productPage = new ProductCatalog(pageFixture.page);
    productPage.opentFirstItemOfList();
    productPage.addToWishList();
});

Then('vejo uma a mesangem informando que {string}', async function (messageContent) {
    const wishlistPage  = new Wishlist(pageFixture.page);
    wishlistPage.validateAlert(messageContent);
});
