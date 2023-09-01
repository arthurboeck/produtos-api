/**
 * @param {import("../../../../")} knex
 */
export function up(knex) {
    return knex.schema.createTable('produto', function (table) {
        table.increments('id').primary();
        table.string('descricao', 255).notNullable();
        table.string('marca', 128).notNullable();
        table.decimal('valor').notNullable();
    });
};

/**
 * @param {import("../../../../")} knex
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('produto');
};
