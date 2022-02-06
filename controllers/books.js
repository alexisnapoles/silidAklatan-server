const mongodb = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const MongoClient = mongodb.MongoClient;

/* ------- CONNECTING TO MONGO DB ------- */
async function connect() {
    const mongo_uri = process.env.MONGO_URI;
    let client = await MongoClient.connect(mongo_uri, {
        "useUnifiedTopology": true
    })
    let db = client.db('books_library');
    console.log('database has commenced! fantastic! great job bruuuh!');
    return db;
}
