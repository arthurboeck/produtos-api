const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "title": "Produtos API",
    "description": "API de produtos desenvolvida na disciplina de Node.JS na Especialização em Arquitetura de Software Distribuído PUCMG",
    "version": "1.0"
  },
  "produces": ["application/json"],
  "paths": {
    "/produtos": {
      "get": {
        "description": "Realiza a listagem de todos os produtos",
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      },
      "post": {
        "description": "Realiza o cadastro de um produto",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "descricao": {
                  "type": "string"
                },
                "valor": {
                  "type": "number"
                },
                "marca": {
                  "type": "string"
                }
              },
              "required": ["descricao", "valor", "marca"]
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created"
          }
        }
      }
    },
    "/produtos/{id}": {
      "get": {
        "description": "Obtem os detalhes de um produto",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do produto",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "delete": {
        "description": "Realiza a deleção de um produto",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do produto",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {
          "204": {
            "description": "No Content"
          },
          "404": {
            "description": "Not Found"
          }
        }
      },
      "put": {
        "description": "Realiza a atualização de um produto",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID do produto",
            "required": true,
            "type": "integer"
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "descricao": {
                  "type": "string"
                },
                "valor": {
                  "type": "number"
                },
                "marca": {
                  "type": "string"
                }
              },
              "required": ["descricao", "valor", "marca"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success"
          },
          "404": {
            "description": "Not Found"
          }
        }
      }
    }
  }
};

export default swaggerDocument;