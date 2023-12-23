/**
 * @param {import("../../../../")} knex
 */
export async function seed(knex) {
  await knex("loja").del();
  await knex("loja").insert(lojas);
};

const lojas = [
  { id: 1, nome: "Zaffari Bom Fim", endereco: "Ramiro Barcelos 2000 - Porto Alegre/RS", nomeGerente: "João Silva" },
  { id: 2, nome: "Baklizi Centro", endereco: "Presidente Vargas 2000 - Uruguaiana/RS", nomeGerente: "Silva Jao" },
  { id: 3, nome: "Zaffari Fernandes", endereco: "Fernandes Vieira 2000 - Porto Alegre/RS", nomeGerente: "Joao Silva e Silva" },
];