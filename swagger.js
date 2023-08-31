import swaggerAutogen from 'swagger-autogen';
// import index from './index';

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/controller/product-controller.js'];

const doc = {
    info: {
        title: 'Produtos API',
        description: 'API de produtos desenvolvida na disciplina de Node.JS na Especialização em Arquitetura de Software Distribuído PUCMG',
        version: '1.0.0',
    },
    host: '',
    basePath: '',
    schemes: [],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    import('./index.js') // Project's root file
})