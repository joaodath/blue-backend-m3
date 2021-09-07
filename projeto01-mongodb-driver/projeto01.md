# Proposta dos projeto da semana

- **Projeto 01:** Projeto com lista de objetos armazenando jogos.

- ID, Nome e Ano de Lançamento
- Armazenando tudo em uma lista de objetos;
- Faremos um GET, POST PUT E DELETE.

## Informações adicionais

O projeto 01 finaliza nessa semana. 

# Dicas validação [PUT]

## Procurar o jogo pelo ID do objeto em que está armazenado;

## Verificar se esse jogo já existe na lista;

## Se não existir, retornar um erro 404 falando que o jogo não existe;

## Verificar se o body da requisição está vazio, se estiver, retornas um 400 avisando

## Verificar a estrutura do body, se realmente tem os campos que você quer atualizar nome e imagem estão corretos, id não pode alterar. Isso também retorna um 400.

# Dicas validação [DELETE]

## Procurar o jogo pelo ID do objeto em que está armazenado;

## Verificar se esse jogo já existe na lista;

## Se não existir, retornar um erro 404 falando que o jogo não existe;

## Se o jogo existir, retorna que o jogo foi excluído com sucesso.