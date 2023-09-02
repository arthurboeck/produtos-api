import { ServerError } from '../infra/error/RequestError.js';
import knex from 'knex';

const tableStore = 'loja';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './database/db.sqlite'
    },
    useNullAsDefault: true,
});

export async function getStores() {
    let stores;
    try {
        stores = await db(tableStore);
        console.info('Loja encontrada na base: ', stores);
    } catch (err) {
        console.error('Erro ao consultar loja na base: ', err);
        throw new ServerError('Erro ao consultar loja na base: ', err.message);
    }
    return stores;
};

export async function getStoreById(storeId) {
    let storeDetail;
    try {
        storeDetail = await db(tableStore).where({ id: storeId });
        console.info('Loja encontrada na base: ', storeDetail);
    } catch (err) {
        console.error('Erro ao consultar loja na base: ', err);
        throw new ServerError('Erro ao consutar loja na base: ', err.message);
    }
    return storeDetail[0];
};

export function insertStore(store) {
    db(tableStore)
        .insert(store)
        .then(() => {
            console.info('Loja inserida com sucesso na base');
        })
        .catch((err) => {
            console.error('Erro ao inserir loja na base: ', err);
            throw new ServerError('Erro ao inserir loja na base: ', err.message);
        });
};

export function updateStore(storeId, store) {
    db(tableStore)
        .where({ id: storeId })
        .update(store)
        .then(() => {
            console.info('Loja atualizada com sucesso na base');
        })
        .catch((err) => {
            console.error('Erro ao atualizar loja na base: ', err);
            throw new ServerError('Erro ao atualizar loja na base: ', err.message);
        });
};

export function deleteStore(storeId) {
    db(tableStore)
        .where({ id: storeId })
        .del()
        .then(() => {
            console.info('Loja deletada com sucesso na base');
        })
        .catch((err) => {
            console.error('Erro ao deletar loja na base: ', err);
            throw new ServerError('Erro ao deletar loja na base: ', err.message);
        });
};