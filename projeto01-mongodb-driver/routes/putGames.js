const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');
const dotenv = require('dotenv').config();

//database connection
const { client, dbconnect, ObjectId, dbclose} = require('../database/mongodbdriver');

//PUT /games/:id - updates a game with the id passed in the url
router.put('/games/:id', async (req, res) => {
    //checks if id passed is valid
    const id = req.params.id;
    const put = true;
    functionsLibrary.checkId(id, res);
    
    await dbconnect();

    await functionsLibrary.doesItExist(id, res, put);
 
    const newGame = req.body;
    functionsLibrary.checkEmptyInput(newGame, res);

    //prevents unwanted data to be saved on database
    const gameClean = functionsLibrary.sanitizeGameInput(newGame);

    const updateQuery = {_id: ObjectId(id)};
    const updateObject = { $set: gameClean };
    const updateOptions = { upsert: true }
    const updatedObject = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).findOneAndUpdate(updateQuery, updateObject, updateOptions);

    await dbclose();

    updatedObject.lastErrorObject.updatedExisting ? res.json(updatedObject.value) : res.status(500).json({"error": "failed to patch. try again later."});

    if (updatedObject.lastErrorObject.updatedExisting) {
        res.json(updatedObject.value)
    } else if (!updatedObject.lastErrorObject.updatedExisting && updatedObject.value) {
        res.status(201).json(updatedObject.value)
    }
});

module.exports = router;