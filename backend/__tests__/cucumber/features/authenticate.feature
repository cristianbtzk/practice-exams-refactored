#language:pt

Funcionalidade: Fazer login.
  O sistema deve permitir o login de um usuário

  Cenário: Sucesso no cadastro
    Dado um usuário já cadastrado
    Quando ocorre um Post na rota sessions com email e senha válidos
    Então a resposta para a autenticação deve ser "Sucesso"
