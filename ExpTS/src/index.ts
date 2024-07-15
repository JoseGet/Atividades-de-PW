import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import router from './router/router';
import {engine} from 'express-handlebars'
import logger from "./middlewares/logger";

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 4466;
app.use(router)

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.engine("handlebars", engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));

app.get("/", (req: Request, res) => {
    res.send("Exercicio 3")
});

app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`) 
});

