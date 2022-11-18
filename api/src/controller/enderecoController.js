import { Router } from "express";
import { listar, salvar } from "../repository/enderecoRepository";
const server = Router();


server.get('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const v = await listar(id);
        resp.send(v);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.post('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;

        const r = await salvar(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;