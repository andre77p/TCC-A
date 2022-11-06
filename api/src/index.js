import 'dotenv/config'


import adminCategoriaController from './controller/admin/categoriaController';
import adminDepartamentoController from './controller/admin/departamentoController';
import adminProdutoController from './controller/admin/produtoController';

import enderecoController from './controller/enderecoController';
import loginClienteController from './controller/loginClienteController';
import pedidoController from './controller/pedidoController';
import produtoController from './controller/produtoController';


import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors());
server.use(express.json());


server.use(adminCategoriaController);
server.use(adminDepartamentoController);
server.use(adminProdutoController);

server.use(enderecoController);
server.use(loginClienteController);
server.use(pedidoController);
server.use(produtoController);

server.use('/storage/produto', express.static('storage/produto'));


const PORT = process.env.PORT;
server.listen(PORT, () => console.log("API subiu na porta" + PORT));