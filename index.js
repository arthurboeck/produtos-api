import express from 'express';
import productController from './src/controller/product-controller.js';
import swaggerDocument from './swagger-output.json' assert { type: "json" };
import swaggerUi from 'swagger-ui-express';

const router = express();
const port = process.env.PORT || 8080;
router.use(express.urlencoded({ extended: true }))
router.use(express.json());

const server = router.listen(port, () => console.log(`App listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

router.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
productController(router);