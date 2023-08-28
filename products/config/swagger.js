const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "title": "Produtos API",
    "description": "API de produtos desenvolvida na disciplina de Node.JS na Especialização em Arquitetura de Software Distribuído PUCMG",
    "version": "1.0"
  },
  "produces": ["application/json"],
  "paths": {
    "/api/v1/produtos": {
      "get": {
        "tags": ["product-controller"],
        "description": "Realiza a listagem de todos os produtos",
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      },
      "post": {
        "tags": ["product-controller"],
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
    "/api/v1/produtos/{id}": {
      "get": {
        "tags": ["product-controller"],
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
        "tags": ["product-controller"],
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
        "tags": ["product-controller"],
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
