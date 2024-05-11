# Setup do projeto
1) npm init -y
2) npm install --save-dev typescript
3) npm install --save-dev ts-node
4) npm install --save-dev playwright
5) npm install --save-dev @playwright/test
6) npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox
7) Apagar a pasta tests-examples e e2e
8) Apagar arquivo de exemplo em tests
9) Alterar arquivo playwright.config.ts a configuração: ==> testDir: './tests',

# Criar primeiro teste 
1) Criar um teste para a funcionalidade de Create User
2) Criar arquivo tests/create-user.spec.ts
3) Executar o teste, com o comando:  npx playwright test

# Criar page objects
1) Criar a pasta tests/pages
2) Criar arquivo tests/pages/home-page.ts
3) Criar arquivo tests/pages/create-new-customer-account.ts
4) Criar arquivo tests/pages/customer-account.ts


# Criar DTO
Criar o arquivo de DTO para facilitar o transporte de dados pelos métodos.
1) Criar arquivo tests/dto/user-dto.ts

# Refatorar o teste utilizando os Page Objects
1) Criar arquivo: tests/create-user-page-object.spec.ts
2) Executar o teste
3) Executar o teste, com o comando:  npx playwright test

# Setup Cucumber
1) npm install --save-dev @cucumber/cucumber
2) npm install --save-dev @types/cucumber
3) Criar o arquivo de configuração: cucumber.json
4) Criar a pasta tests/features
5) Criar a pasta tests/step-definition
6) Criar o arquivo de BDD: tests/features/create-user.feature
7) Criar o arquivo de step definition: tests/step-definition/create-user-steps.ts
Documentação do arquivo de configuração do Cucumber https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md


# Diretório node_modules
    Pode ser reconstruído a partir do package.json, e por esse motivo não é enviado para o sistema de controle de versão ou mesmo repassado.
    Para deixar o código executável executar o comando: npm install




