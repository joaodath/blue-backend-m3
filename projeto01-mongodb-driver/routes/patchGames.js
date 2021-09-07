const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');
const dotenv = require('dotenv').config();

//database connection
const { client, dbconnect, ObjectId, dbclose} = require('../database/mongodbdriver');

//PATCH /games/:id - patches a game with the id passed in the url
router.patch('/games/:id', async (req, res) => {
    //checks if id passed is valid
    const id = req.params.id;
    const patch = true;
    functionsLibrary.checkId(id, res);

    await dbconnect();

    await functionsLibrary.doesItExist(id, res, patch);
     
    const gamePatch = req.body;

    const gameClean = functionsLibrary.sanitizeGamePatch(gamePatch);

    const updateQuery = {_id: ObjectId(id)};
    const updateObject = { $set: gameClean };
    const updateOptions = { upsert: false }
    const updatedObject = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).findOneAndUpdate(updateQuery, updateObject, updateOptions);

    const putObject = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).findOne(updateQuery);

    await dbclose();

    updatedObject.lastErrorObject.updatedExisting ? res.json(putObject) : res.status(500).json({"error": "failed to patch. try again later."});
});

module.exports = router;