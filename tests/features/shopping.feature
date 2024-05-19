#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Validação de Compra

  Contexto:
    Dado que eu acesso a página inicial do Magento
  @teste
  Cenário: Comprar jaqueta masculina com sucesso
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "Jackets" 
    Quando seleciono a primeira jaqueta da lista
    E seleciono o tamanho "M"
    E seleciono a cor "Blue"
    E adiciono o produto no carrinho
    Então vejo a mensagem na pagina "You added Proteus Fitness"
  @teste
  Cenário: Comprar camiseta masculina com sucesso
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "Tees" 
    Quando seleciono a primeira camisa da lista
    E seleciono o tamanho "M"
    E seleciono a cor "Red"
    E adiciono o produto no carrinho
    Então vejo a mensagem na pagina "You added Strike Endurance"
  @teste
  Cenário: Comprar calça masculina com sucesso
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "Pants" 
    Quando seleciono a primeira calca da lista
    E seleciono o tamanho "32"
    E seleciono a cor "Black"
    E adiciono o produto no carrinho
    Então vejo a mensagem na pagina "You added Cronus Yoga Pant to"
