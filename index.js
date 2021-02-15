const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// create express server
const app = express();

// Database
dbConnection();

//CORS
app.use(cors());

// public directory
app.use(express.static('public'));

// body reading and parsing
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// listen to requests
app.listen(process.env.PORT, () => {
    console.log(
        `*********************** server running in port ${process.env.PORT} ***********************`
    );
});
