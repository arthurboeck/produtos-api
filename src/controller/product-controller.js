import productList from '../model/products.js';

const basePath = '/api/v1';

export default function routes(router) {
    router.get(`${basePath}/produtos`, (req, res) => {
        const products = productList.produtos;

        res.status(200).json(products);
    });

    router.get(`${basePath}/produtos/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        const produto = productList.produtos.find(p => p.id === id);

        if (!produto) {
            res.status(404).send();
        } else {
            res.status(200).json(produto);
        }
    });

    router.post(`${basePath}/produtos`, (req, res) => {
        const novoProduto = req.body;
        novoProduto.id = productList.produtos.length + 1;

        const resposta = {
            id: novoProduto.id,
            descricao: novoProduto.descricao,
            valor: novoProduto.valor,
            marca: novoProduto.marca,
        };

        productList.produtos.push(resposta);
        res.status(201).json(resposta);
    });

    router.put(`${basePath}/produtos/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        const produtoIndex = productList.produtos.findIndex(p => p.id === id);

        if (produtoIndex === -1) {
            res.status(404).send();
        } else {
            const produtoAtualizado = { id, ...req.body };
            productList.produtos[produtoIndex] = produtoAtualizado;

            res.status(200).json(produtoAtualizado);
        }
    });

    router.delete(`${basePath}/produtos/:id`, (req, res) => {
        const id = parseInt(req.params.id);
        const produtoIndex = productList.produtos.findIndex(p => p.id === id);

        if (produtoIndex === -1) {
            res.status(404).send();
        } else {
            productList.produtos.splice(produtoIndex, 1);
            res.status(204).send();
        }
    });
};