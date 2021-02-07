#language:pt

Funcionalidade: Cadastrar Usuário.
  O sistema deve permitir o cadastro de um usuário

  Cenário: Sucesso no cadastro
    Dado um nome, senha e email validos
    Quando ocorre um Post na rota users
    Então a resposta deve ser "Sucesso"
