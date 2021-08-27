const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const mongoose = require('mongoose');
const GamesSchema = require('./models/games');

//imports docAPI from docAPI.js and loads it in a constant docAPI
//TODO: docAPI.js is not yet written
const {docAPI} = require('../docAPI');

//GET / - returns documentation of the API
router.get('/', (req, res) => {
    res.json(docAPI);
});

module.exports = router;