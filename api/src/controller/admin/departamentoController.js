import { listarDepartamentos } from "../..//repository/departamentoRepository";

import { Router } from "express";
const server = Router();

server.get('/admin/departamento', async (resp) => {
    try {
        const linhas = await listarDepartamentos();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;