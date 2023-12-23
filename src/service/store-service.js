import * as storeRepository from '../repository/store-repository.js';
import { NotFoundError } from '../infra/error/RequestError.js';
import validateStore from './store-validator.js';

export async function getStores() {
    const stores = await storeRepository.getStores();
    if (!stores || stores.length === 0) {
        throw new NotFoundError('Nenhuma loja encontrada!');
    }
    return stores;
};

export async function getStoreById(storeId) {
    const storeDetail = await storeRepository.getStoreById(storeId);
    if (!storeDetail) {
        throw new NotFoundError('Loja não encontrada!');
    }
    return storeDetail;
};

export async function createStore(store) {
    try {
        validateStore(store);
        storeRepository.insertStore(store);
    } catch (error) {
        throw error;
    }
};

export async function updateStore(storeId, storeUpdate) {
    try {
        await getStoreById(storeId);

        validateStore(storeUpdate);
        storeRepository.updateStore(storeId, storeUpdate);
    } catch (error) {
        throw error;
    }
};

export async function deleteStore(storeId) {
    try {
        await getStoreById(storeId);
        await storeRepository.deleteStore(storeId);
    } catch (error) {
        throw error;
    }
};