const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const mongoose = require('mongoose');
const Games = require('../models/games');

//POST /games - creates a new game
router.post('/', async (req, res) => {
    const game = req.body;
    functionsLibrary.checkEmptyInput(game, res);
    const gameClean = functionsLibrary.sanitizeGameInput(game);
    const gameCreated = await new Games(gameClean).save();

    res.status(201).json(gameCreated);
});

module.exports = router;