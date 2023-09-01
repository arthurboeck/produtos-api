import productList from '../model/products.js';

export default function routes(router) {

    router.get('/api/v1/produtos', (req, res) => {
        // #swagger.tags = ['Produtos']

        const products = productList.produtos;
        res.status(200).json(products);
    });

    router.get('/api/v1/produtos/:id', (req, res) => {
        // #swagger.tags = ['Produtos']

        const productId = parseInt(req.params.id);
        const produto = productList.produtos.find(p => p.id === productId);

        if (!produto) {
            res.status(404).send();
        } else {
            res.status(200).json(produto);
        }
    });

    router.post('/api/v1/produtos', (req, res) => {
        // #swagger.tags = ['Produtos']

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

    router.put('/api/v1/produtos/:id', (req, res) => {
        // #swagger.tags = ['Produtos']

        const productId = parseInt(req.params.id);
        const produtoIndex = productList.produtos.findIndex(p => p.id === productId);

        if (produtoIndex === -1) {
            res.status(404).send();
        } else {
            const produtoAtualizado = { id: productId, ...req.body };
            productList.produtos[produtoIndex] = produtoAtualizado;

            res.status(200).json(produtoAtualizado);
        }
    });

    router.delete('/api/v1/produtos/:id', (req, res) => {
        // #swagger.tags = ['Produtos']

        const productId = parseInt(req.params.id);
        const produtoIndex = productList.produtos.findIndex(p => p.id === productId);

        if (produtoIndex === -1) {
            res.status(404).send();
        } else {
            productList.produtos.splice(produtoIndex, 1);
            res.status(204).send();
        }
    });
};