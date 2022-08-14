const {schema, Schema} = require('mongoose');
const mongoose = require("mongoose");

const PostSchema = new Schema({
    title: String,
    discriminator: String,
})

module.exports = mongoose.model('Post', PostSchema, 'post');
