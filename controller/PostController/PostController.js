const Post = require('../../Models/Posts/Post')
const {ObjectID} = require("mongodb");

exports.index = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json( posts);
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};

exports.createPost = async (req, res) => {
    try {
        await Post.create(req.body);
        res.status(201).json({data: "A new post has been created."});
    }
    catch(error) {
        res.json(error.message);
    }
};

exports.postDetails = async (req, res) => {
    try {
        const _id = ObjectID(req.params.id);
        const post = await Post.find({_id});
        res.status(200).json(post);
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};

exports.updatePost = async (req, res) => {
    try {
        const _id = ObjectID(req.params.id);
        await Post.updateOne({ _id}, {$set : req.body});
        res.json({data: "Your Post has been updated successfully."});
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};

exports.deletePost = async (req, res) => {
    try {
        const _id = ObjectID(req.params.id);
        await Post.deleteOne({ _id});
        res.status(204).json({data: `The delete post id is : ${req.params.id}`});
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};
