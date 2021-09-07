const router = require('express').Router();
const dotenv = require('dotenv').config();

//database connection
const { client, dbconnect, dbclose } = require('../database/mongodbdriver');

// GET /games - returns all games
router.get('/', async (req, res) => {
    await dbconnect();
    const gameListCursor = await client.db(process.env.DB_NAME).collection(process.env.COLLECTION).find({}).toArray();

    await dbclose();

    gameListCursor ? res.send(gameListCursor) : res.json({"response": "it works but no data found!"});
});

module.exports = router;

// async function gameListFunction(gameListCursor) {  
//     try { 
//         await gameListCursor.toArray();
//     } catch(e) {
//         console.log(`Error on gameListCursor: ${e}`)
//     }
// }

// const gameList = await gameListFunction(gameListCursor);