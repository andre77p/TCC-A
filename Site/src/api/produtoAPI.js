import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarProdutosInicio() {
    const v = await api.get('/api/produto');
    return v.data;
}

export async function buscarProdutoPorId(id) {
    const v = await api.get('/api/produto/' + id);
    return v.data;
}