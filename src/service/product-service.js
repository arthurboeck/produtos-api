import * as productRepository from '../repository/product-repository.js';
import { NotFoundError } from '../infra/error/RequestError.js';
import validateProduct from './product-validator.js';

export async function getProducts() {
    const products = await productRepository.getProducts();
    if (!products || products.length === 0) {
        throw new NotFoundError('Nenhum produto encontrado!');
    }
    return products;
};

export async function getProductById(productId) {
    const productDetail = await productRepository.getProductById(productId);
    if (!productDetail) {
        throw new NotFoundError('Produto não encontrado!');
    }
    return productDetail;
};

export async function createProduct(product) {
    try {
        validateProduct(product);
        productRepository.insertProduct(product);
    } catch (error) {
        throw error;
    }
};

export async function updateProduct(productId, productUpdate) {
    try {
        await getProductById(productId);

        validateProduct(productUpdate);
        productRepository.updateProduct(productId, productUpdate);
    } catch (error) {
        throw error;
    }
};

export async function deleteProduct(productId) {
    try {
        await getProductById(productId);
        await productRepository.deleteProduct(productId);
    } catch (error) {
        throw error;
    }
};