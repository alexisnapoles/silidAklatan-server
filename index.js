const express = require("express");
const mongoose = require("mongoose");
require('mongoose-type-url');
const books = require("./routes/books.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, 
    {
    useUnifiedTopology: true
    }
);

app.use(books);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server OK! port: ${PORT}`)
});