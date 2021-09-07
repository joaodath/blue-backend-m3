const router = require('express').Router();
const dotenv = require('dotenv').config();
const { charactersRM, dbconnect, dbclose } = require('../database/mongodbConnection');

//GET /characters, returns all characters
router.get('/characters', async (req, res) => {
    await dbconnect();

    let charactersCursor = await charactersRM.find();
    let charactersArr = charactersCursor.toArray();

    await dbclose();

    charactersArr ? res.send(charactersArr) : res.json({"response": "it works but the database has no data."})
});

module.exports = router;