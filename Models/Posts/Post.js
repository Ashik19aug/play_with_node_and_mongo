const {Schema} = require('mongoose');
const mongoose = require("mongoose");

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Post', PostSchema, 'post');
