const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('first_event', (data) => {
    console.log('first_event', data)
})

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 2222;
const routes = require('./Routes/index');
const connect = require('./Database/Connection');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(routes);

connect().then(() => {
    app.listen(port,()=> {
        console.log(`Server running at http://127.0.0.1:${port}`);
    })
});

