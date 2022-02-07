const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    summary: String,
    genre: String,
    yearPublished: Number,
    publisher: String,
    isbn13: Number,
    ratings: Number
});

const Book = mongoose.model("books", BookSchema);

module.exports = Book;