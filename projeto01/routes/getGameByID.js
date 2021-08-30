const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const Games = require('../models/games');

//GET /games/:id - returns a game with the id passed in the url
router.get('/games/:id', async (req, res) => {  
    //checks if id passed is valid
    const id = req.params.id;
    functionsLibrary.checkId(id, res);
   
    const game = await functionsLibrary.doesItExist('games', id, res);
    
    res.send(game);
});

module.exports = router;