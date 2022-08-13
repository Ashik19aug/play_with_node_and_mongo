const express = require('express');
const postRouter = express.Router();


// normal post routes
postRouter.get('/posts', (req, res) => {
    res.json({data: "ashik 19aug"});
})

// dynamic routes
postRouter.use('/posts/:id', (req, res) => {
    res.json({data: `ashik 19aug data : ${req.params.id}`});
})

module.exports = postRouter;
