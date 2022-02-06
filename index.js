/* SERVER */
// requiring all necessary dependencies to make API accessable 
// to basically run the API.
const express = require('express');
const cors = require('cors');
const {urlencoded} = require('express');

const app = express();
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));

const router = require('./routes/routes.js');
app.use('/routes', router);

// server start
const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log('let it be done according to SERVER!! ha-ha!')
});
