const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const mongoose = require('mongoose');
const GamesSchema = require('../models/games');

//GET /games/:id - returns a game with the id passed in the url
router.get('/', (req, res) => {
    const id = +req.params.id;
    // console.log(typeof gameList);
    // console.log(gameList);
    // I need to reference the gameList to get the game with the id passed in the url
    const game = GamesSchema.find(game => game.id === id);    

    !game? res.status(404).json({error: 'Game not found!'}) : res.json(game);
});

module.exports = router;