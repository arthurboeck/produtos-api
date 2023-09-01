import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/controller/product-controller.js'];

const doc = {
    info: {
        title: 'Produtos API',
        description: 'API de produtos desenvolvida na disciplina de Node.JS na Especialização em Arquitetura de Software Distribuído PUCMG',
        version: '2.0.0',
    },
    host: '',
    basePath: '',
    schemes: [],
};

swaggerAutogen({ openapi: '3.1.0' })(outputFile, endpointsFiles, doc)
    .then(() => {
        import('./index.js') // Project's root file
    })
    .catch(error => {
        console.error('Erro na auto geracao do Swagger: ', error.message);
    });