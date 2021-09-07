const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');
const dotenv = require('dotenv').config();

//database connection
const { client, dbconnect, dbclose, ObjectId} = require('../database/mongodbdriver');

//DELETE /games/:id - deletes a game with the id passed in the url
//router.delete('/games/:id', (req, res) => {
router.delete('/games/:id', async (req, res) => {
    //checks if id passed is valid
    const id = req.params.id;
    const deleteMethod = true;
    functionsLibrary.checkId(id, res);

    await dbconnect();

    await functionsLibrary.doesItExist(id, res, deleteMethod);

    let deleteResult = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).deleteOne({_id: ObjectId(id)});
    await dbclose();

    console.log(deleteResult);
    deleteResult.deletedCount === 1 ? res.json({success: "Game deleted!"}) : res.status(500).json({error: "Could not delete the game. Try again later."});
});

module.exports = router;