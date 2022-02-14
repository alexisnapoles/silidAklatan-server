const express = require("express");
const { ObjectId } = require("mongodb");
const bookModel = require("../models/book");

const app = express();

app.get("/books", async function(req, res) {
    const books = await bookModel.find({});

    try {
        res.send(books);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/books/:id", async function(req, res) {
    const books = await bookModel.findById(req.params.id).exec();

    try {
        res.send(books);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.post("/books", async function(req, res) {
    const books = new bookModel(req.body);

    try {
        await books.save();
        res.send(books);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.patch("/books/:id", async function(req, res, next) {
    const query = {
        imageUrl: req.body.imageUrl,
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        genre: req.body.genre,
        yearPublished: req.body.yearPublished,
        publisher: req.body.publisher,
        isbn13: req.body.isbn13,
        ratings: req.body.ratings
    }

    try {
        const books = await bookModel.findByIdAndUpdate(req.params.id, query, {
            new: true
        });
        // console.log("updated book", books)
        await bookModel.save();
        return res.status(200).send(books)
        // return res.json(books) 
    } catch (error) {
        res.status(500).send(error)
    }
    
});

app.delete("/books/:id", async function(req, res) {
    try {
        const books = await bookModel.findByIdAndDelete(req.params.id);

        if (!books)
        res.status(404).send("No item found");
        res.status(200).send('Book deleted');
    } catch (e) {
        res.status(500).send(e);
    }
});


module.exports = app;