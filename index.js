/* ------- SETTING UP EXPRESS ------- */
// -- requiring all necessary dependencies to make API accessable || to basically run the API.
const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let app = express();
app.use(express.json());
app.use(cors());


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


/* ------- SETTING UP ROUTES ------- */
async function main() {
    let db = await connect();

    // BOOKS COLLECTION
    // --- GET ROUTES
    app.get('/books', async (req, res) => {
        let books = await db.collection('books').find().toArray();
        res.json(books);
    });

    app.get('/books/:booksId', async (req, res) => {
        let booksId = await db.collection('books').findOne({
            _id: new ObjectId(req.params.booksId)
        });
        res.json(booksId);
    });

    // --- POST ROUTES
    app.post('/books', async (req, res) => {
        let booksResults = await db.collection('books').insertOne({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            genre: req.body.genre,
            coverImage: req.body.coverImage,
            yearPublished: req.body.yearPublished,
            publisher: req.body.publisher,
            isbn13: req.body.isbn13,
            ratings: req.body.ratings
        })
        res.json('booksResults.ops');
    });

    // --- PATCH ROUTES
    app.patch('/books/:booksId', async (req, res) => {
        let booksResults = await db.collection('books').updateOne({
            '_id': new ObjectId(req.params.booksId),
        }, {
            '$set': {
                'title': req.body.title,
                'author': req.body.author,
                'summary': req.body.summary,
                'genre': req.body.genre,
                'coverImage': req.body.coverImage,
                'yearPublished': req.body.yearPublished,
                'publisher': req.body.publisher,
                'isbn13': req.body.isbn13,
                'ratings': req.body.ratings
            }
        });
        res.json({
            'status': true
        });
    });
}
main();

/* ------- STARTING SERVER ------- */
app.listen(process.env.PORT, () => {
    console.log('let it be done accdg to SERVER!! ha-ha!')
});