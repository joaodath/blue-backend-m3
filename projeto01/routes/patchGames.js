const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const mongoose = require('mongoose');
const GamesSchema = require('../models/games');

//PATCH /games/:id - patches a game with the id passed in the url
router.patch('/', (req, res) => {
    const id = +req.params.id;
    const game = req.body.game;

    const gameClean = functionsLibrary.sanitizeGamePatch(game, gameList[id]);

    gameList[id] = gameClean;
    res.status(204).json({success: `Game ${gameClean.name} patched!`});
});

module.exports = router;
