// import files and packages up here
const data = require('./data.json');
const express = require('express');
const morgan = require('morgan');

// create your express server below
var app = express();
const PORT = 3000;

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send('Server is working');
});

app.get('/data', (req, res) => {
    res.status(200).json(data);
});

// finally export the express application
module.exports = app;
