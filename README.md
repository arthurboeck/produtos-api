# Produtos API

Aplicação desenvolvida para a disciplina de Node.JS na Especialização em Arquitetura de Software Distribuído - PUCMG.

A `produtos-api` é uma aplicação Node.js construída com o framework Express para gerenciar informações sobre produtos. Essa API permite criar, visualizar, atualizar e deletar informações sobre produtos.

## Dependencias
* [Knex](https://knexjs.org/guide/)
* [Node](https://nodejs.org/en/docs/)
* [Npm](https://docs.npmjs.com/)
* [Express](https://github.com/expressjs/express)
* [Sqlite3](https://www.npmjs.com/package/sqlite3)
* [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)
* [Swagger Autogen](https://swagger-autogen.github.io/docs/getting-started/quick-start)

## Como executar a aplicação

Caso voce esteja executando o projeto pela primeira, será necessário executar aas migrations e seeds do projeto, tal processo pode ser startado e executado com base nos seguintes comandos:

Passo 1: Install de dependencias:
```shell
npm install
```
Passo 2: Start do projeto:
    
Caso já possua o docto de configuracao swagger-output.json, executar o comando:

```shell
npm start:migrations
```    
Caso não possua o docto de configuracao swagger-output.json, executar o comando:

```shell
npm run start:swagger:migrations
```

Caso voce já tenha executado as migrations e seeds do projeto, o mesmo pode ser startado e executado com base nos seguintes comandos:

Passo 1: Install de dependencias:
```shell
npm install
```
Passo 2: Start do projeto:
    
Caso já possua o docto de configuracao swagger-output.json, executar o comando:

```shell
npm start
```    
Caso não possua o docto de configuracao swagger-output.json, executar o comando:

```shell
npm run start:swagger
```

Após isso o projeto estará rodando na porta 8080, podendo ser acessado em [http://localhost:8080](http://localhost:8080), ou via swagger disponibilizado em [http://localhost:8080/swagger-ui](http://localhost:8080/swagger-ui).

## Rotas disponibilizadas

A API possui as seguintes rotas disponibilizadas:

| Mapeamento da URL           | Operação (CRUD) | Descrição                                    |
|-----------------------------|-----------------|----------------------------------------------|
| GET /swagger-ui             | INFO            | Swagger da aplicação                         |
| POST /api/v1/produtos       | CREATE          | Cria um produto                              |
| GET /api/v1/produtos        | RETRIEVE        | Retorna a lista de todos os produtos         |
| GET /api/v1/produtos/:id    | RETRIEVE        | Retorna os detalhes de um produto especifico |
| PUT /api/v1/produtos/:id    | UPDATE          | Atualiza os detalhes de um produto existente |
| DELETE /api/v1/produtos/:id | DELETE          | Deleta um produto                            |

## Deploy

Este compononente utiliza o [render](https://render.com/) para deploy. O deploy é realizado automaticamente a cada commit na branch master.

A aplicação pode ser acessada em [https://produtos-api.onrender.com](https://produtos-api.onrender.com), assim como o swagger da aplicação também pode ser acessado em [https://produtos-api.onrender.com/swagger-ui](https://produtos-api.onrender.com/swagger-ui).