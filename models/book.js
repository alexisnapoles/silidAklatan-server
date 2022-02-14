const mongoose = require('mongoose');
require('mongoose-type-url');
const {Schema} = mongoose;

const BookSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
