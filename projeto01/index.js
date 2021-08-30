const express = require('express');
//connects to database at MongoDB
// const mongoose = require('mongoose');
// const Games = require('./models/games');
// const functionsLibrary = require('./functionsLibrary');

//Initializes the server
const app = express();
const port = 7001;
const serverAddress = `http://localhost:${port}`;

app.use(express.json())

//imports the routes
const getAllGames = require('./routes/getAllGames');
const getGameByID = require('./routes/getGameByID');
const putGames = require('./routes/putGames');
const patchGames = require('./routes/patchGames');
const postGames = require('./routes/postGames');
const deleteGames = require('./routes/deleteGames');

//consumes the routes
app.use('/games', getAllGames); 
app.use(getGameByID); 
app.use(putGames); 
app.use(patchGames); 
app.use('/games', postGames); 
app.use(deleteGames); 

//imports gameList from gameList.js and loads it in a constant gameList
// const {gameList} = require('./gameList');

app.listen(port, () => {
    console.log(`
    Server running on port ${port}
    You can access using ${serverAddress}`);
});