import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import router from './router/router';
import {engine} from 'express-handlebars'
import logger from "./middlewares/logger";
import sass from 'node-sass-middleware';
import cookieParser = require("cookie-parser");

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

app.use('/js', [
    express.static(`${__dirname}/../public/js`),
    express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);

app.use(express.urlencoded({extended: false}));

app.use(router)

app.use(cookieParser());

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

