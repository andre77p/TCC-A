import { listarCategorias } from "../../repository/categoriaRepository";

import { Router } from "express";
const server = Router();

server.get('/admin/categoria', async (resp) => {
    try {
        const linhas = await listarCategorias();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;