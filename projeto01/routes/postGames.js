const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const mongoose = require('mongoose');
const GamesSchema = require('../models/games');

//POST /games - creates a new game
router.post('/', (req, res) => {
    const game = req.body.game;
    
    functionsLibrary.checkEmptyInput(game);

    const gameClean = functionsLibrary.sanitizeGameInput(game);

    //Creates the id for the game
    const lastGame = gameList[gameList.length - 1];
    const id = lastGame ? +lastGame.id + 1 : 1;
    gameClean.id = id;

    gameList.push(gameClean);
    res.status(201).json({success: `Game ${gameClean.name} created!`});

});

module.exports = router;