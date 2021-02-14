const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// create express server
const app = express();

// Database
dbConnection();

// body reading and parsing
app.use(express.json());

// public directory
app.use(express.static('public'));

// routes
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD

// listen to requests
app.listen(process.env.PORT, () => {
    console.log(
        `*********************** server running in port ${process.env.PORT} ***********************`
    );
});
