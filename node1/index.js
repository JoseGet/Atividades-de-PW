const fs = require('fs');
const dotenv = require("dotenv")

let diretorio = ""
const strHelper = require('./str_helper')

process.argv.forEach((val) => {
    diretorio = val
})


const http = require('http');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT ?? 8080;
const server = http.createServer(function (req, res) {
res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

    if (req.url === "/") {
        fs.readdir(diretorio, (err, files) => {
            if (err) {
                console.log(err);
            } else {
                files.forEach(file => {
                    res.write(strHelper.createLink(file) + "<br>");
                });
                res.end();
            }
        });
    } else {
        const filePath = diretorio + req.url;
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const texto = "Ola! Voce entrou no arquivo, clique em Voltar para sair :)";
                const textoModificado = texto + data;
                res.write(`<a href="/">Voltar</a><br><br>`);
                res.write(`<pre>${textoModificado}</pre>`);
                res.end();
            }
        });
    }
});
server.listen(PORT);


