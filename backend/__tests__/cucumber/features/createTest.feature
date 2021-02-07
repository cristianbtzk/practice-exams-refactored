#language:pt

Funcionalidade: Cadastrar teste.
  O sistema deve permitir o cadastro de testes

  Cenário: Sucesso no cadastro
    Dado um usuário já autenticado
    Quando ocorre um Post na rota tests com o token de acesso e as respostas
    Então a resposta para o cadastro do teste deve ser "Sucesso"
