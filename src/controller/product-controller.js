import * as productService from '../service/product-service.js';
import { errorHandler } from '../infra/error/RequestError.js';
import Product from '../model/product.js';

export default function routes(router) {

    router.get('/api/v1/produtos', async (req, res) => {
        // #swagger.tags = ['Produtos']

        try {
            const products = await productService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.get('/api/v1/produtos/:id', async (req, res) => {
        // #swagger.tags = ['Produtos']

        const productId = parseInt(req.params.id);
        try {
            const productDetails = await productService.getProductById(productId);
            res.status(200).json(productDetails);
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.post('/api/v1/produtos', async (req, res) => {
        // #swagger.tags = ['Produtos']

        const { descricao, marca, valor } = req.body;
        const novoProduto = new Product(descricao, valor, marca);

        try {
            await productService.createProduct(novoProduto);
            res.status(201).send();
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.put('/api/v1/produtos/:id', async (req, res) => {
        // #swagger.tags = ['Produtos']

        const productId = parseInt(req.params.id);
        const { descricao, marca, valor } = req.body;
        const produtoAtualizado = new Product(descricao, valor, marca);

        try {
            await productService.updateProduct(productId, produtoAtualizado);
            res.status(200).json(produtoAtualizado);
        } catch (error) {
            errorHandler(res, error);
        }
    });

    router.delete('/api/v1/produtos/:id', async (req, res) => {
        // #swagger.tags = ['Produtos']

        const productId = parseInt(req.params.id);

        try {
            await productService.deleteProduct(productId);
            res.status(204).send();
        } catch (error) {
            errorHandler(res, error);
        }
    });
};
