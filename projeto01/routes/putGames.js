const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const Games = require('../models/games');

//PUT /games/:id - updates a game with the id passed in the url
router.put('/games/:id', async (req, res) => {
    //checks if id passed is valid
    const id = req.params.id;
    functionsLibrary.checkId(id, res);

    // /The findOneAndUpdate searches the document and updates just the entries in the given update document. The other entries in the found document will remain (patch). The findOneAndReplace searches the document, removes everything inside this document and sets the entries of the given replacement document (put).

    await functionsLibrary.doesItExist('games', id, res);
 
    const newGame = req.body;
    functionsLibrary.checkEmptyInput(newGame, res);

    //prevents unwanted data to be saved on database
    const gameClean = functionsLibrary.sanitizeGameInput(newGame);

    await Games.findOneAndReplace({_id: id}, gameClean);

    const gamePut = await Games.findById(id);

    res.json(gamePut);
});

module.exports = router;