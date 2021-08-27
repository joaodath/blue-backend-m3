const router = require('express').Router();

//connects to database at MongoDB
const mongoose = require('mongoose');
const GamesSchema = require('../models/games');

//GET /games - returns all games
// /router.get('/games', async (req, res) => {
router.get('/', async (req, res) => {
    const gameList = await GamesSchema.GamesSchema.find();
    res.send(gameList);
});

module.exports = router;