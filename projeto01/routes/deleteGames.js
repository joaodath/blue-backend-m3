const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const mongoose = require('mongoose');
const GamesSchema = require('../models/games');

//DELETE /games/:id - deletes a game with the id passed in the url
//router.delete('/games/:id', (req, res) => {
router.delete('/', (req, res) => {
    const id = +req.params.id;
    const game = gameList[id];
    
    !game ? res.status(404).json({error: 'Game not found!'}) : gameList.splice(id, 1);

    res.status(204).json({success: `Game ${game.name} deleted!`});
});

module.exports = router;