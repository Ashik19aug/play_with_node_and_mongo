const http = require("http");

const server = http.createServer(((req, res) => {
    res.write('play with node');
    res.end();
}))

server.listen(2222);
