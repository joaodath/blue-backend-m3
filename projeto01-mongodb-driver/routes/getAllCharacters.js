const router = require('express').Router();
const dotenv = require('dotenv').config();
const { client, dbconnect, dbclose } = require('../database/mongodbdriver');

//GET /characters, returns all characters
router.get('/', async (req, res) => {
    
    await client.connect();

    const charactersCursor = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).find({});
    const charactersArr = await charactersCursor.toArray();

    console.log(charactersCursor);
    console.log(charactersArr);

    charactersArr ? res.send(charactersArr) : res.json({"response": "it works but the database has no data."})
});

module.exports = router;