const express = require('express');
const postRouter = express.Router();
const connect = require('../../Database/Connection');
const {ObjectID} = require("mongodb");

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
        const conn = await connect();
        await conn.collection('post').insertOne(req.body);
        res.json({data: "A new post has been created."});
    });

// dynamic routes
postRouter
    .route('/posts/:id')
    .get(async (req, res) => {
        const _id = ObjectID(req.params.id);
        const conn = await connect();
        const post = await conn.collection('post').findOne({ _id });
        res.json(post);
    })
    .patch((req, res) => {
    res.json({data: `update route for post no : ${req.params.id}`});
    })
    .delete((req, res) => {
    res.json({data: `delete route for post no : ${req.params.id}`});
    })



module.exports = postRouter;
