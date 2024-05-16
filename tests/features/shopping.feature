#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Validação de Compra

  Contexto:
    Dado que eu acesso a página inicial do Magento

  Cenário: Comprar jaqueta masculina com sucesso
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "jaquetas" 
    Quando seleciono o primeiro produto da lista
    E seleciono o tamanho "M"
    E seleciono a cor "azul"
    E adiciono o produto no carrinho
    Então vejo a mensagem "You added Proteus Fitness"

  Cenário: Comprar camiseta masculina com sucesso
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "camisetas" 
    Quando seleciono o primeiro produto da lista
    E seleciono o tamanho "M"
    E seleciono a cor "vermelha"
    E adiciono o produto no carrinho
    Então vejo a mensagem "You added Strike Endurance"

  Cenário: Comprar calça masculina com sucesso
    Dado que eu acesso a seção de vestuário "masculino"
    E que eu acesso a página de "calça" 
    Quando seleciono o primeiro produto da lista
    E seleciono o tamanho "32"
    E seleciono a cor "preta"
    E adiciono o produto no carrinho
    Então vejo a mensagem "You added Cronus Yoga Pant to"
