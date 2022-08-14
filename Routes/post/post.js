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
        res.status(200).json( posts);
    })
    .post( async (req, res) => {
        const conn = await connect();
        await conn.collection('post').insertOne(req.body);
        res.status(201).json({data: "A new post has been created."});
    });

// dynamic routes
postRouter
    .route('/posts/:id')
    .get(async (req, res) => {
        const _id = ObjectID(req.params.id);
        const conn = await connect();
        const post = await conn.collection('post').findOne({ _id });
        res.status(200).json(post);
    })
    .patch(async (req, res) => {
        const _id = ObjectID(req.params.id);
        const conn = await connect();
        const updatePost = await conn.collection('post').updateOne({ _id }, {$set: req.body});
        res.json({data: "Your Post has been updated successfully."});
        // res.json({data: `update route for post no : ${req.params.id}`});
    })
    .delete(async (req, res) => {
        const _id = ObjectID(req.params.id);
        const conn = await connect();
        await conn.collection('post').deleteOne({ _id });
        res.status(204).json({data: `The delete post id is : ${req.params.id}`});
    })



module.exports = postRouter;
