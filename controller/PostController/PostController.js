const connect = require('../../Database/Connection');
const {ObjectID} = require("mongodb");

exports.index = async (req, res) => {
    try {
        const conn = await connect();
        const posts = await conn.collection("post").find().toArray();
        res.json( posts);
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};

exports.createPost = async (req, res) => {
    try {
        const conn = await connect();
        await conn.collection('post').insertOne(req.body);
        res.status(201).json({data: "A new post has been created."});
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};

exports.postDetails = async (req, res) => {
    try {
        const _id = ObjectID(req.params.id);
        const conn = await connect();
        const post = await conn.collection('post').findOne({ _id });
        res.status(200).json(post);
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};

exports.updatePost = async (req, res) => {
    try {
        const _id = ObjectID(req.params.id);
        const conn = await connect();
        const updatePost = await conn.collection('post').updateOne({ _id }, {$set: req.body});
        res.json({data: "Your Post has been updated successfully."});
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};

exports.deletePost = async (req, res) => {
    try {
        const _id = ObjectID(req.params.id);
        const conn = await connect();
        await conn.collection('post').deleteOne({ _id });
        res.status(204).json({data: `The delete post id is : ${req.params.id}`});
    }
    catch(e) {
        console.log('error: ' + e.message);
    }
};
