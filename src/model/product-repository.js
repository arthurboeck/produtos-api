import { ServerError } from '../infra/error/RequestError.js';
import knex from 'knex';

const tableName = 'produto';

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
        product = await db(tableName);
        console.info('Produto encontrado na base: ', product);
    } catch (err) {
        console.error('Erro ao consultar produto na base: ', err);
        throw new ServerError('Erro ao consultar produto na base: ', err.message);
    }
    return product;
};

export async function getProductById(productId) {
    let product;
    try {
        product = await db(tableName).where({ id: productId });
        console.info('Produto encontrado na base: ', product);
    } catch (err) {
        console.error('Erro ao consultar produto na base: ', err);
        throw new ServerError('Erro ao consutar produto na base: ', err.message);
    }
    return product[0];
};

export function insertProduct(product) {
    db(tableName)
        .insert(product)
        .then(() => {
            console.info('Produto inserido com sucesso na base');
        })
        .catch((err) => {
            console.error('Erro ao inserir produto na base: ', err);
            throw new ServerError('Erro ao inserir produto na base: ', err.message);
        });
};

export function updateProduct(productId, product) {
    db(tableName)
        .where({ id: productId })
        .update(product)
        .then(() => {
            console.info('Produto atualizado com sucesso na base');
        })
        .catch((err) => {
            console.error('Erro ao atualizar produto na base: ', err);
            throw new ServerError('Erro ao atualizar produto na base: ', err.message);
        });
};

export function deleteProduct(productId) {
    db(tableName)
        .where({ id: productId })
        .del()
        .then(() => {
            console.info('Produto deletado com sucesso na base');
        })
        .catch((err) => {
            console.error('Erro ao deletar produto na base: ', err);
            throw new ServerError('Erro ao deletar produto na base: ', err.message);
        });
};