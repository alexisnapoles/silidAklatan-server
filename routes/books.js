const express = require("express");
const { send } = require("express/lib/response");
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

app.post("/books", async function(req, res) {
    const books = new bookModel(req.body);

    try {
        await books.save();
        res.send(books);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.patch("/books/:id", async function(req, res) {
    try {
        await bookModel.findByIdAndUpdate(req.params.id, req.body);
        await bookModel.save();
    } catch (e) {
        res.status(500).send(e);
    }
});

app.delete("/books/:id", async function(req, res) {
    try {
        const books = await bookModel.findByIdAndDelete(req.params.id);

        if (!books)
        res.status(404).send("No item found");
        res.status(200).send();
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = app;