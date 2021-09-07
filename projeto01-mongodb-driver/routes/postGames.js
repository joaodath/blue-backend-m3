const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');
const dotenv = require('dotenv').config();

//database connection
const { client, dbconnect, dbclose, ObjectId} = require('../database/mongodbdriver');

//POST /games - creates a new game
router.post('/', async (req, res) => {
    const game = req.body;
    //rework to allow insertMany
    functionsLibrary.checkEmptyInput(game, res);
    let gameClean = functionsLibrary.sanitizeGameInput(game);

    await dbconnect();

    let result = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).insertOne(gameClean);

    let objectCreated = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).findOne({_id: ObjectId(result.insertedId)});

    await dbclose();

    result.acknowledged ? res.status(201).json(objectCreated) : res.status(500).json({"error": "post failed. try again later."})
});

module.exports = router;