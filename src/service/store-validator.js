import { BadRequestError } from '../infra/error/RequestError.js';

const tamanhoCampo = 'deve ser do tipo string com tamanho entre 1 e 255!';
const nomeInvalido = `Campo nome é obrigatorio, ${tamanhoCampo}`;
const enderecoInvalido = `Campo endereco é obrigatorio, ${tamanhoCampo}`;
const nomeGerenteInvalido = `Campo nomeGerente é obrigatorio, ${tamanhoCampo}`;

export default function validateStore(store) {
    validateField(store.nome, nomeInvalido);
    validateField(store.endereco, enderecoInvalido);
    validateField(store.nomeGerente, nomeGerenteInvalido);

    console.info('Loja informada com request.body válido!');
};

function validateField(campo, callbackMessage) {
    if (!campo || typeof campo !== 'string' || campo.length === 0 || campo.length > 255) {
        throw new BadRequestError(callbackMessage);
    }
};