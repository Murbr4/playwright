#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Lista de Desejos

  Contexto:
    Dado que eu acesso a página inicial do Magento

  Cenário: Não é possível adicionar produto a lista de desejos sem estar logado no sistema
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "Pants" 
    Quando tento adicionar o primeiro produto na lista de desejos
    Então vejo uma a mesangem informando que "You must login or register to add items to your wishlist."
