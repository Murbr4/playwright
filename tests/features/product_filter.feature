#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Filtro de Produto

  Contexto:
    Dado que eu acesso a página inicial do Magento

  Cenário: Filtrar calças masculinas
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "Pants" 
    Quando filtro a opção de compra por "Sweatpants" em "Style"
    E filtro a opção de compra por "All-Weather" em "Climate"
    Então vejo que a a página foi atualizada com os filtros escolhidos
