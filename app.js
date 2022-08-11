const express = require('express');

const app = express();

const port = 2222;

app.get('/', (req, res) => {
    res.send('Hello node app!');
})

app.listen(port,()=> {
    console.log(`Server running at http://127.0.0.1: + ${port}`);
})

// const http = require("http");
//
// const server = http.createServer(((req, res) => {
//     if(req.url === '/'){
//         res.write('<h1>Home page</h1>');
//         res.end();
//     }
//     if(req.url === '/login'){
//         res.write('<h1>login Page</h1>');
//         res.end();
//     }
//     else {
//         res.writeHead(200, {'Content-Type': "text/html"});
//         res.write('<h1>page not found</h1>');
//         res.end();
//     }
// }))

// console.log(`Project is running at http://localhost:${2222}`)
// server.listen(2222);
