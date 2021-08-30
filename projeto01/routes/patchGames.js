const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const Games = require('../models/games');

//PATCH /games/:id - patches a game with the id passed in the url
router.patch('/games/:id', async (req, res) => {
    //checks if id passed is valid
    const id = req.params.id;
    functionsLibrary.checkId(id, res);
    await functionsLibrary.doesItExist('games', id, res);
     
    const gamePatch = req.body;

    const gameClean = functionsLibrary.sanitizeGamePatch(gamePatch);

    await Games.findOneAndUpdate({_id: id}, gameClean);
    //const gamePatched = await Games.findOne({_id: id});
    const gamePatched = await Games.findById(id);
    
    res.json(gamePatched);
});

module.exports = router;
