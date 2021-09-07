const router = require('express').Router();
const functionsLibrary = require('../functionsLibrary');
const dotenv = require('dotenv').config();

//database connection
const { client, dbconnect, dbclose} = require('../database/mongodbdriver');

//GET /games/:id - returns a game with the id passed in the url
router.get('/games/:id', async (req, res) => {  
    const id = req.params.id;

    functionsLibrary.checkId(id, res)

    await dbconnect();

    //Checks if the object with given id exists and returns the object if found or else returns and error
    await functionsLibrary.doesItExist(id, res)
  
    await dbclose();
});

module.exports = router;