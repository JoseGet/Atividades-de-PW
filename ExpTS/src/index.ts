import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import router from './router/router';
import {engine} from 'express-handlebars'
import logger from "./middlewares/logger";
import sass from 'node-sass-middleware';

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 3333;

app.use(sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: "compressed",
    prefix: "/css",
}));

app.use("/css", express.static(`${__dirname}/../public/css`));

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

