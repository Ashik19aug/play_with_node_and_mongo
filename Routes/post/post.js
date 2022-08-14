const express = require('express');
const postRouter = express.Router();
const connect = require('../../Database/Connection');

// normal post routes
postRouter
    .route('/posts')
    .get( async (req, res) => {
        const conn = await connect();
        const posts = await conn.collection("post").find().toArray();
        res.json( posts);
        // res.send("get route for posts");
    })
    .post( async (req, res) => {
        // console.log(req.body);
        // res.json(req.body);
        const conn = await connect();
        // const data = {title: 'asd', description: 'mnb',};
        await conn.collection('post').insertOne(req.body);
        res.json({data: "A new post has been created."});
    });

// dynamic routes
postRouter
    .route('/:id')
    .get((req, res) => {
    res.json({data: `route for post no : ${req.params.id}`});
    })
    .patch((req, res) => {
    res.json({data: `update route for post no : ${req.params.id}`});
    })
    .delete((req, res) => {
    res.json({data: `delete route for post no : ${req.params.id}`});
    })



module.exports = postRouter;
