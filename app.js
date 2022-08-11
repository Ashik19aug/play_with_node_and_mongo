const http = require("http");

const server = http.createServer(((req, res) => {
    res.write('play with nodejs');
    res.end();
}))

console.log(`Project is running at http://localhost:${2222}`)
server.listen(2222);
