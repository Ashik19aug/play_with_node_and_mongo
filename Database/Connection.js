const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'play_with_node_mongodb';

async function connect() {
    await client.connect();
    console.log('Connected successfully to server');
    return client.db(dbName);
}

module.exports = connect;
