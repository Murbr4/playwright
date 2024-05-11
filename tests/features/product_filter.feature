#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Product Filter

  Contexto:
    Dado que eu acesso a página inicial do Magento

  Cenário: Filtrar calças masculinas
    Dado vou para a seção de calças masculinas
    Quando filtro a opção de compra por "Sweatpants" em "Style"
    E filtro a opção de compra por "All-Weather" em "Climate"
    Então vejo os filtros apicados na página de compra