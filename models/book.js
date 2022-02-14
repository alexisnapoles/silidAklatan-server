const mongoose = require('mongoose');
require('mongoose-type-url')
const {ObjectId} = require('mongodb');

const BookSchema = new mongoose.Schema({
    imageUrl: {
        type: mongoose.SchemaTypes.Url, required: true
    },
    title: String,
    author: String,
    summary: String,
    genre: String,
    yearPublished: Number,
    publisher: String,
    isbn13: Number,
    ratings: Number,
}
);


const Book = mongoose.model("books", BookSchema);
module.exports = Book;
