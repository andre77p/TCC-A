import 'dotenv/config'
import { con } from './repository/connection'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/produto', express.static('storage/produto'));

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("API subiu na porta" + PORT));