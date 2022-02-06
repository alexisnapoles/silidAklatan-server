const express = require('express');
const router = express.Router();

const { 
    getBooks,
    postBooks,
    patchBooks,
    deleteBooks } = require('../database/db.js');

// READ
router.get('/books', async(req, res) => {
    await getBooks((err, books) => {
        if(err) {
            return console.log(err);
        }
        return res.send({ books });
    });
});

// CREATE
router.post('/books', async(req, res) => {
    try {
        await postBooks({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            genre: req.body.genre,
            yearPublished: req.body.yearPublished,
            publisher: req.body.publisher,
            isbn13: req.body.isbn13,
            ratings: req.body.ratings,
            createdAt: new Date()
        });
        return res.status(200).send({ success: 'Books added!' });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: 'Error add Book' });
    }    
});

// UPDATE
router.patch('/books/:id', async(req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const summary = req.body.summary;
    const genre = req.body.genre;
    const yearPublished = req.body.yearPublished;
    const publisher = req.body.publisher;
    const isbn13 = req.body.isbn13;
    const ratings = req.body.ratings;

    try {
        await patchBooks(req.params.id, {
            title,
            author,
            summary,
            genre,
            yearPublished,
            publisher,
            isbn13,
            ratings
        });
        return res.status(200).send({ success: 'Book updated!' })
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: 'Error update Book' });
    }
});

// DELETE
router.delete('/books/:id', async(req, res) => {
    try {
        await deleteBooks(req.params.id);
        return res.status(200).send({ success: 'Book deleted!' })
    } catch (error) {
        return res.status(400).send({ error: 'Error delete book' })
    } 
});

module.exports = router;



// try {
//     const books = await db.collection('books')
//         .insertOne({
//             title: req.body.title,
//             author: req.body.author,
//             summary: req.body.summary,
//             genre: req.body.genre,
//             yearPublished: req.body.yearPublished,
//             publisher: req.body.publisher,
//             isbn13: req.body.isbn13,
//             ratings: req.body.ratings
//         });
//     res.status(201).json(books.ops);
// } catch (err) {
//     res.status(500).json(err);
// }




// const booksId = await db.collection('books').updateOne({ _id: req.params.id });
// if (!booksId)
//     return res.status(404).json({ message: "Data not found." });
// try {
//     const books = await db.collection('books')
//         .updateOne(
//             {
//                 '_id': new ObjectId(req.params.id)
//             }, {
//             $set: {
//                 'title': req.body.title,
//                 'author': req.body.author,
//                 'summary': req.body.summary,
//                 'genre': req.body.genre,
//                 'yearPublished': req.body.yearPublished,
//                 'publisher': req.body.publisher,
//                 'isbn13': req.body.isbn13,
//                 'ratings': req.body.ratings
//             }
//         });
//     res.status(201).json(books.ops);
// } catch (err) {
//     res.status(500).json(err);
// }


// GET ALL BOOKS
// async function getBooks(req, res) {
//     try {
//         const books = await booksSchema.find();
//         res.json(books);
//     } catch (err) {
//         res.status(500).json({ message : err.message });
//     }
// }

// GET BOOKS BY ID
// async function getBooksById(req, res) {
//     try {
//         const books = await booksSchema.findById(req.params.id);
//         res.json(books);
//     } catch (err) {
//         res.status(404).json({ message : err.message });
//     }
// }

// CREATE BOOKS
// async function saveBooks(req, res) {
//     const books = new booksSchema(req.body);
//     try {
//         const saveBooks = await books.save();
//         res.status(201).json({ saveBooks });
//     } catch (err) {
//         res.status(400).json({ message : err.message });
//     }
// }

// UPDATE BOOKS
// async function updateBooks(req, res) {
//     const booksId = await booksSchema.findById(req.params.id);
//     if (!booksId)
//         return res.status(404).json({ message: "Data not found." });
//     try {
//         const updateBooks = await booksSchema.updateOne(
//             { _id: req.params.id },
//             { $set: req.body }
//         );
//         res.status(200).json(updateBooks);
//     } catch (err) {
//         res.status(404).json({ message : err.message });
//     }
// }

// DELETE BOOKS
// async function deleteBooks(req, res) {
//     const booksId = await booksSchema.findById(req.params.id);
//     if (!booksId)
//         return res.status(404).json({ message: "Data not found." });
//     try {
//         const deleteBooks = await booksSchema.deleteOne(
//             {_id: req.params.id}
//         );
//         res.status(200).json(deleteBooks);
//     } catch (err) {
//         res.status(400).json({ message : err.message });
//     }
// }