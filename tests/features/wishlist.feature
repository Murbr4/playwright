#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Lista de Desejos

  Contexto:
    Dado que eu acesso a página inicial do Magento
    E sou um usário registrado no sistema

  Cenário: Adicionar um produto na lista de desejos
    Dado que eu acesso a seção de vestuário "feminino"
    E que eu acesso a página de "shorts" 
    Quando filtro a opção de compra por "Basic" em "Style"
    E seleciono o primeiro produto da lista
    E adiciono o produto na minha lista de desejos
    Então sou redirecionado para página de lista de desejos
    E vejo o produto que escolhi na minha lista
