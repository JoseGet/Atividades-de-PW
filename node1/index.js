const fs = require('fs');

let diretorio = ""

process.argv.forEach((val) => {
    diretorio = val
})


const http = require('http');
require('dotenv').config();
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


