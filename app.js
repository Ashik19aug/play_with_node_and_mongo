const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('first_event', (data) => {
    console.log('first_event', data)
})

const express = require('express');
const app = express();
const port = 2222;
const routes = require('./Routes/index');

app.use(routes);
app.set('view engine', 'pug')

app.listen(port,()=> {
    console.log(`Server running at http://127.0.0.1:${port}`);
})
