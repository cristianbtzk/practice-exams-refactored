#language:pt

Funcionalidade: Listar resposas de um teste.
  O sistema deve permitir a listagem de respostas de um teste

  Cenário: Sucesso na listagem
    Dado um usuário já autenticado e um teste cadastrado no banco
    Quando ocorre um GET na rota answers com o token de acesso e o id do teste
    Então a resposta para o a listagem de respostas deve ser "Sucesso"
