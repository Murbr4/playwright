#Create by Murillo, Marcelo, Luiz
#language: pt

Funcionalidade: Conta de Usuário

  Contexto:
    Dado que eu acesso a página inicial do Magento

  Cenário: Registro de usuário
    Dado que abro o formulário de registro do Magento
    Quando preencho meus dados
    E crio minha conta com sucesso
    Então vejo minha página de perfil
    
  Cenário: Usuário se autentica com sucesso no sistema
    Dado que acesso a página de login do cliente
    Quando informo meus dados de acesso
    E acesso o sistema
    Então vejo a minha página de perfil
