Feature: Create User

  Background:
    Given acesso a página inicial do Magento Luma
@dev
  Scenario: Criar usuário com sucesso
    Given acessar pagína de Create an Account
    When o formulario é submetido com os dados
      | FirstName | LastName | Email          | Password | ConfirmPassword |
      | Teste     | Silva    | email@abcd.com | Teste123 | Teste123        |
    Then usuário deverá ser criado com sucesso

  Scenario Outline: Criar usuario - Campos Obrigatório
    Given acessar pagína de Create an Account
    When o formulario é submetido com os dados
      | FirstName   | LastName   | Email   | Password   | ConfirmPassword   |
      | <FirstName> | <LastName> | <Email> | <Password> | <ConfirmPassword> |
    Then deverá apresentar mensagem de erro para o campo "<ErrorMessage>"

    Examples:
      | FirstName | LastName | Email           | Password | ConfirmPassword | ErrorMessage     |
      |           | Silva    | email3@abcd.com | Teste123 | Teste123        | First Name       |
      | Teste     |          | email4@abcd.com | Teste123 | Teste123        | Last Name        |
      | Teste     | Silva    |                 | Teste123 | Teste123        | Email            |
      | Teste     | Silva    | email6@abcd.com |          | Teste123        | Password         |
      | Teste     | Silva    | email7@abcd.com | Teste123 |                 | Confirm Password |
