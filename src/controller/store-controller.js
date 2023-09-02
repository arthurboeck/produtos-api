import * as storeService from '../service/store-service.js';
import { errorHandler } from '../infra/error/RequestError.js';
import Store from '../model/store.js';

export default function routes(router) {

    router.get('/api/v1/lojas', async (req, res) => {
        // #swagger.tags = ['Lojas']

        try {
            const stores = await storeService.getStores();
            res.status(200).json(stores);
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.get('/api/v1/lojas/:id', async (req, res) => {
        // #swagger.tags = ['Lojas']

        const storeId = parseInt(req.params.id);
        try {
            const storeDetails = await storeService.getStoreById(storeId);
            res.status(200).json(storeDetails);
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.post('/api/v1/lojas', async (req, res) => {
        // #swagger.tags = ['Lojas']

        const { nome, endereco, nomeGerente } = req.body;
        const novaLoja = new Store(nome, endereco, nomeGerente);

        try {
            await storeService.createStore(novaLoja);
            res.status(201).send();
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.put('/api/v1/lojas/:id', async (req, res) => {
        // #swagger.tags = ['Lojas']

        const storeId = parseInt(req.params.id);
        const { nome, endereco, nomeGerente } = req.body;
        const lojaAtualizada = new Store(nome, endereco, nomeGerente);

        try {
            await storeService.updateStore(storeId, lojaAtualizada);
            res.status(200).json(lojaAtualizada);
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.delete('/api/v1/lojas/:id', async (req, res) => {
        // #swagger.tags = ['Lojas']

        const storeId = parseInt(req.params.id);

        try {
            await storeService.deleteStore(storeId);
            res.status(204).send();
        } catch (error) {
            errorHandler(res, error);
        }
    });
};
