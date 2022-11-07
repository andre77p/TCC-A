import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function salvar(idUsuario, referencia, cep, logradouro, bairro, cidade, estado, numero, complemento) {
    const v = await api.post('/api/usuario/' + idUsuario + '/endereco', { referencia, cep, logradouro, bairro, cidade, estado, numero, complemento });
    return v.data;
}

export async function listar(idUsuario) {
    const v = await api.get('/api/usuario/' + idUsuario + '/endereco');
    return v.data;
}