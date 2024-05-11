#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Product Search

  Contexto:
    Dado que eu acesso a página inicial do Magento
   
  Cenário: Busca por produto para adicionar ao carrinho
    Quando busco pelo produto  "Beaumont Summit Kit"
    E seleciono a compra de "2" unidades na cor "Yellow"
    E adiciono o produto ao carrinho
    E abro o carrinho
    Então eu vejo o produto que selecionei na quantidade correta
    E na cor de minha escolha 
    E com o valor total de "$84.00"

  Cenário: Busca é menor do que três caracteres 
    Quando eu faço uma busca com meno de "3" caracteres
    Então sou redirecionado para a página de buscas sem resultados
    E vejo a mensagem "Minimum Search query length is 3"

  Cenário: Busca não retorna resultado
    Quando eu faço uma busca por "asldfjlasfjlasjfaksl"
    Então sou redirecionado para a página de buscas
    E vejo a mensagem "Your search returned no results."
