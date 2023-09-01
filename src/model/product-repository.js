import knex from 'knex';

const tableName = 'produto';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './database/db.sqlite'
    },
    useNullAsDefault: true,
});

export function insertProduct(product) {
    db(tableName)
        .insert(product)
        .then(() => {
            console.log('Produto inserido com sucesso')
        })
        .catch((err) => {
            console.error('Erro ao inserir produto: ', err)
        })
        .finally(() => {
            db.destroy();
        });
};

export function getProductById(productId) {
    let product;

    db(tableName)
        .where({ id: productId })
        .then((result) => {
            console.log('Produto encontrado: ', result)
            product = result;
        })
        .catch((err) => {
            console.error('Erro ao buscar produto: ', err)
        });

    console.log('Produto: ', product)
    return product;
};