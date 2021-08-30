const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');

//connects to database at MongoDB
const Games = require('../models/games');

//DELETE /games/:id - deletes a game with the id passed in the url
//router.delete('/games/:id', (req, res) => {
router.delete('/games/:id', async (req, res) => {
    //checks if id passed is valid
    const id = req.params.id;
    functionsLibrary.checkId(id, res);
    await functionsLibrary.doesItExist(Games, id, res);

    await Games.findByIdAndDelete(id);
    
    res.status(204).json({success: "Game deleted!"});
});

module.exports = router;