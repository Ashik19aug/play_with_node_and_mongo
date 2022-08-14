const express = require('express');
const postRouter = express.Router();
const PostController = require('../../controller/PostController/PostController')
const connect = require('../../Database/Connection');
const {ObjectID} = require("mongodb");

// normal post routes
postRouter
    .route('/posts')
    .get(PostController.index)
    .post(PostController.createPost);

// dynamic routes
postRouter
    .route('/posts/:id')
    .get(PostController.postDetails)
    .patch(PostController.updatePost)
    .delete(PostController.deletePost);



module.exports = postRouter;
