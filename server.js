const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //creat app

app.use(bodyParser.urlencoded({extended: true})) //parse request and content-type

app.get('/',((req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."})
}));


app.listen(2222, ()=>{console.log('i am from server listening port define');})


//now run : node server.js
