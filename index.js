import express from 'express';
import productController from './src/controller/product-controller.js';
import storeController from './src/controller/store-controller.js';
import swaggerDocument from './swagger-output.json' assert { type: "json" };
import swaggerUi from 'swagger-ui-express';

const router = express();
const port = process.env.PORT || 8080;

router.use(express.urlencoded({ extended: true }))
router.use(express.json());

router.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
productController(router);
storeController(router);

router.use((err, req, res, next) => {
    console.error('Erro interno: ', err.stack);
    res.status(500).send(`Erro interno: ${err.message}`);
});

const server = router.listen(port, () => {
    console.info(`App listening on port ${port}!`)
});
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;