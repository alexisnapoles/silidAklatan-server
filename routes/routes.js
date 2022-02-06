

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
    // get by book title 
    app.get('/books/:booksId/title', async (req, res) => {
        const { booksId } = req.params;
        const title = '';
        res.json(title);
    })

    // --- POST ROUTES
    app.post('/books', async (req, res) => {
        let booksResults = await db.collection('books').insertOne({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            genre: req.body.genre,
            yearPublished: req.body.yearPublished,
            publisher: req.body.publisher,
            isbn13: req.body.isbn13,
            ratings: req.body.ratings
        },
            (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500)({ err: err })
                    return
                }
                res.status(200)({ ok: true })
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


    app.delete('/books/:booksId')
}
main();