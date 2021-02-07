#language:pt

Funcionalidade: Listar testes.
  O sistema deve permitir a listagem de testes cadastrados

  Cenário: Sucesso na listagem
    Dado um usuário já autenticado e pelo menos um teste cadastrado no banco
    Quando ocorre um GET na rota tests com o token de acesso e o número da página
    Então a resposta para a listagem de testes deve ser "Sucesso"
