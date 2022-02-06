/* SERVER */
// requiring all necessary dependencies to make API accessable 
// to basically run the API.
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// construct express function
const app = express();

// connecting to mongoDB via mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware
app.use(cors());
app.use(express.json());
app.use('/books', route);
 
// server start
app.listen(process.env.PORT, () => {
    console.log('let it be done according to SERVER!! ha-ha!')
});