const router = require('express').Router();

//connects to database at MongoDB
const Games = require('../models/games');

//GET /games - returns all games
// /router.get('/games', async (req, res) => {
router.get('/', async (req, res) => {
    const gameList = await Games.find();
    res.send(gameList);
});

module.exports = router;