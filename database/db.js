const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const dotenv = require('dotenv');
dotenv.config();


/* ROUTES CONTROLLERS FUNCTION */
MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(connect => {
    db = connect.db('books_library');
    console.log('Database connected.')
}).catch(err => {
    console.error('Error: Fail to connect' + err);
});

// GET BOOKS
async function getBooks(callback) {
    return await db.collection('books')
                            .find({})
                            .toArray(callback);
}

// CREATE BOOKS
async function postBooks(books, callback) {
    return await db.collection('books')
                    .insertOne(books, callback);
}

// UPDATE BOOKS
async function patchBooks(id, books) {
    return await db.collection('books')
                    .updateOne(
                        {
                            _id: new ObjectId(id)
                        },
                        {
                            $set: books
                        }
                    );
}

// DELETE BOOKS
async function deleteBooks(id) {
    return await db.collection('books')
                    .deleteOne({
                        _id: new ObjectId(id)
                    });
}



module.exports = { getBooks, postBooks, patchBooks, deleteBooks };