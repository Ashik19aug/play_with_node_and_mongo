const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('first_event', (data) => {
    console.log('first_event', data)
})

const express = require('express');

const app = express();

const port = 2222;
// normal get routes
app.get('/', (req, res) => {
    myEvent.emit('first_event', {name: 'Amisha ayat'});
    res.send('Hello node app!');
})
// normal post routes
app.post('/posts', (req, res) => {
    res.json({data: "ashik 19aug"});
})
// dynamic routes
app.use('/posts/:id', (req, res) => {
    res.json({data: `ashik 19aug data : ${req.params.id}`});
})

app.listen(port,()=> {
    console.log(`Server running at http://127.0.0.1:${port}`);
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
