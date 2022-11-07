import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function logar(email, senha) {
    const v = await api.post('/api/login', { email, senha });
    return v.data;
}