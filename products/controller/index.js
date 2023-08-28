import express from 'express';
import productList from '../model/products.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, function () {
    console.log('Servidor rodando em localhost:8080')
})

app.get('/produtos', (req, res) => {
    const products = productList.produtos;
    res.status(200).json(products);
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = productList.produtos.find(p => p.id === id);
    if (!produto) {
        res.status(404).send();
    } else {
        res.status(200).json(produto);
    }
});

app.post('/produtos', (req, res) => {
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

app.put('/produtos/:id', (req, res) => {
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

app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produtoIndex = productList.produtos.findIndex(p => p.id === id);

    if (produtoIndex === -1) {
        res.status(404).send();
    } else {
        productList.produtos.splice(produtoIndex, 1);
        res.status(204).send();
    }
});