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

const swaggerPromisse = swaggerAutogen(outputFile, endpointsFiles, doc);
swaggerPromisse
    .then(() => {
        import('./index.js') // Project's root file
        console.log('Swagger gerado com sucesso.');
    })
    .catch(error => {
        console.error('Erro na auto geracao do Swagger: ', error.message);
    });