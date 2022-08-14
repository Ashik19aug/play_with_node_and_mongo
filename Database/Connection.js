
// CONNECT DATABASE USING MONGOOSE
const mongoose = require("mongoose");

async function Connect(options) {
    await mongoose.connect('mongodb://127.0.0.1:27017/play_with_node_mongodb');
}

module.exports = Connect;

// CONNECT DATABASE USING NODE_mongodb

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);
//
// const dbName = 'play_with_node_mongodb';
//
// async function connect() {
//     await client.connect();
//     console.log('Connected successfully to server');
//     return client.db(dbName);
// }
//
// module.exports = connect;
