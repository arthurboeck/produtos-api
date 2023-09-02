/**
 * @param {import("../../../../")} knex
 */
export function up(knex) {
    return knex.schema.createTable('loja', function (table) {
        table.increments('id').primary();
        table.string('nome', 255).notNullable();
        table.string('endereco', 255).notNullable();
        table.string('nomeGerente', 255).notNullable();
    });
};

/**
 * @param {import("../../../../")} knex
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('loja');
};
