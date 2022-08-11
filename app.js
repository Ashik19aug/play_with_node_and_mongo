const http = require("http");

const server = http.createServer(((req, res) => {
    if(req.url === '/'){
        res.write('play with nodejs Home page');
        res.end();
    }
    if(req.url === '/login'){
        res.write('play with nodejs Login page');
        res.end();
    }
    else {
        res.writeHead(200, {'Content-Type': "application/json"});
        res.end(JSON.stringify({data: 'page not found'}));
    }

}))

console.log(`Project is running at http://localhost:${2222}`)
server.listen(2222);
