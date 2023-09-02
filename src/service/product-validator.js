import { BadRequestError } from '../infra/error/RequestError.js';

const descricaoInvalida = 'Campo descrição é obrigatorio, deve ser do tipo string com tamanho entre 1 e 255!';
const marcaInvalida = 'Campo marca é obrigatorio, deve ser do tipo string com tamanho entre 1 e 128!';
const valorInvalido = 'Campo valor é obrigatorio, deve ser do tipo number e maior que zero!';

export default function validateProduct(product) {
    isValidDescricao(product.descricao);
    isValidMarca(product.marca);
    isValidValor(product.valor);

    console.info('Produto informado com request.body válido!');
};

function isValidDescricao(descricao) {
    if (!descricao || typeof descricao !== 'string' || descricao.length === 0 || descricao.length > 255) {
        throw new BadRequestError(descricaoInvalida);
    }
};

function isValidMarca(marca) {
    if (!marca || typeof marca !== 'string' || marca.length === 0 || marca.length > 128) {
        throw new BadRequestError(marcaInvalida);
    }
};

function isValidValor(valor) {
    if (!valor || typeof valor !== 'number' || isNaN(valor)) {
        throw new BadRequestError(valorInvalido);
    }
};
