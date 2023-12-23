import { BadRequestError } from '../infra/error/RequestError.js';

const tamanhoCampo = 'deve ser do tipo string com tamanho entre 1 e 255!';
const nomeInvalido = `Campo nome é obrigatorio, ${tamanhoCampo}`;
const enderecoInvalido = `Campo endereco é obrigatorio, ${tamanhoCampo}`;
const nomeGerenteInvalido = `Campo nomeGerente é obrigatorio, ${tamanhoCampo}`;

export default function validateStore(store) {
    isValidString(store.nome, nomeInvalido);
    isValidString(store.endereco, enderecoInvalido);
    isValidString(store.nomeGerente, nomeGerenteInvalido);

    console.info('Loja informada com request.body válido!');
};

function isValidString(value, callbackMessage) {
    if (!value || typeof value !== 'string' || value.length === 0 || value.length > 255) {
        throw new BadRequestError(callbackMessage);
    }
};