const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');
//connects to database at MongoDB
const mongoose = require('mongoose');
const GamesSchema = require('../models/games');

//PUT /games/:id - updates a game with the id passed in the url
router.put('/', (req, res) => {
    const id = +req.params.id;
    const game = req.body.game;

    functionsLibrary.checkEmptyInput(game);

    const gameClean = functionsLibrary.sanitizeGameInput(game);

    gameList[id] = gameClean;
    res.status(200).json({success: `Game ${gameClean.name} updated!`});
});

module.exports = router;