import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import router from './router/router';

import logger from "./middlewares/logger";

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 4466;
app.use(router)

app.get("/", (req: Request, res) => {
    res.send("Exercicio 3")
});

app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`) 
});

