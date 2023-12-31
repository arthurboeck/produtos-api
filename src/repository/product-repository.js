import { ServerError } from '../infra/error/RequestError.js';
import knex from 'knex';

const tableProduct = 'produto';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './database/db.sqlite'
    },
    useNullAsDefault: true,
});

export async function getProducts() {
    let product;
    try {
        product = await db(tableProduct);
        console.info('Produto encontrado na base: ', product);
    } catch (err) {
        handleDatabaseError('consultar', err);
    }
    return product;
};

export async function getProductById(productId) {
    let product;
    try {
        product = await db(tableProduct).where({ id: productId });
        console.info('Produto encontrado na base: ', product);
    } catch (err) {
        handleDatabaseError('consultar', err);
    }
    return product[0];
};

export function insertProduct(product) {
    db(tableProduct)
        .insert(product)
        .then(() => {
            console.info('Produto inserido com sucesso na base');
        })
        .catch((err) => {
            handleDatabaseError('inserir', err);
        });
};

export function updateProduct(productId, product) {
    db(tableProduct)
        .where({ id: productId })
        .update(product)
        .then(() => {
            console.info('Produto atualizado com sucesso na base');
        })
        .catch((err) => {
            handleDatabaseError('atualizar', err);
        });
};

export function deleteProduct(productId) {
    db(tableProduct)
        .where({ id: productId })
        .del()
        .then(() => {
            console.info('Produto deletado com sucesso na base');
        })
        .catch((err) => {
            handleDatabaseError('deletar', err);
        });
};

function handleDatabaseError(operation, error) {
    console.error(`Erro ao ${operation} produto na base: `, error);
    throw new ServerError(`Erro ao ${operation} produto na base: `, error.message);
};