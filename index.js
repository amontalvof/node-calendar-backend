const express = require('express');
require('dotenv').config();
// create express server
const app = express();

// public directory
app.use(express.static('public'));

// routes
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD

// listen to requests
app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}`);
});
