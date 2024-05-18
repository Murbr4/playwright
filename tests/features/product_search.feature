#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Busca por Produtos

  Contexto:
    Dado que eu acesso a página inicial do Magento
  
  Cenário: Busca por produto para adicionar ao carrinho
    Quando busco pelo produto "Beaumont Summit Kit"
    E seleciono a compra de "2" unidades na cor "Yellow" e tamanho "L" do "Beaumont Summit Kit"
    E adiciono o produto ao carrinho
    E abro o carrinho
    Então eu vejo o produto com os atributos que selecionei
    E com o valor total de "$84.00"
  
  @doing
  Cenário: Busca é menor do que três caracteres 
    Quando eu faço uma busca com menos de três caracteres
    Então sou redirecionado para a página de buscas sem resultados
    E vejo a mensagem "Minimum Search query length is 3"
  
  @doing
  Cenário: Busca não retorna resultado
    Quando eu faço uma busca por "asldfjlasfjlasjfaksl"
    Então sou redirecionado para a página de buscas
    E vejo a mensagem "Your search returned no results."
