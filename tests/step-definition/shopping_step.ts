import { Given, Then, When } from "@cucumber/cucumber";
import { PageJaquets } from "../pages/jaquets_page";
import { pageFixture } from "../support/pageFixture";
import { FirstProduct } from "../pages/first_product";

import { SelectOptionProduct } from "../pages/select_option_product";

Given('que eu acesso a seção de vestuário {string}', async function (gender) {
  const pageJaquets = new PageJaquets(pageFixture.page);
  await pageJaquets.openMenSection();

});

Given('que eu acesso a página de {string}', async function (tipo: string) {
  const pageJaquets = new PageJaquets(pageFixture.page);
  await pageJaquets.openType(tipo);
});

When('seleciono a primeira jaqueta da lista', async function () {
  const firstProduct = new FirstProduct(pageFixture.page);
  await firstProduct.firstJaquet();
});

When('seleciono a primeira camisa da lista', async function () {
  const firstProduct = new FirstProduct(pageFixture.page);
  await firstProduct.firstTee();
});

When('seleciono a primeira calca da lista', async function () {
  const firstProduct = new FirstProduct(pageFixture.page);
  await firstProduct.firstPants();
});


When('seleciono o tamanho {string}', async function (tamanho) {
  // Write code here that turns the phrase above into concrete actions
  const selectSize = new SelectOptionProduct(pageFixture.page);
  await selectSize.size(tamanho)

});

When('seleciono a cor {string}', async function (cor) {
  const selectColor = new SelectOptionProduct(pageFixture.page);
  await selectColor.selectColorProduct(cor)
});

When('adiciono o produto no carrinho', async function () {
  const selectColor = new SelectOptionProduct(pageFixture.page);
  await selectColor.clickButtonProduct()
});

