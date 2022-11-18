import { login } from "../repository/loginClienteRepository";

import { Router } from "express";
const server = Router();


server.post('/api/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;

        const v = await login(email, senha);
        if (!v) {
            throw new Error('Credenciais inválidas');
        }

        resp.send({
            id: v.id,
            nome: v.nome
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;