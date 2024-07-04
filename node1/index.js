const fs = require('fs');
const dotenv = require("dotenv")

let diretorio = ""

process.argv.forEach((val) => {
    diretorio = val
})


const http = require('http');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const PORT = process.env.PORT ?? 8080;
const server = http.createServer(function(req,res){
res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    fs.readdir(diretorio, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            files.forEach(file => {
                res.write(file + "<br>");
            })
        }
        res.end();
    })
});
server.listen(PORT);


