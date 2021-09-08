const express = require('express');
const dotenv = require('dotenv').config();

//Initializes the server
const app = express();
const port = process.env.PORT || 7001;
const serverAddress = `http://localhost:${port}`;

app.use(express.json())

//enabling CORS
var cors = require("cors");
app.use(cors());
app.options("*", cors());


//imports the routes
const getAllGames = require('./routes/getAllGames');
const getAllCharacters = require('./routes/getAllCharacters')
const getGameByID = require('./routes/getGameByID');
const putGames = require('./routes/putGames');
const patchGames = require('./routes/patchGames');
const postGames = require('./routes/postGames');
const deleteGames = require('./routes/deleteGames');

//consumes the routes
app.use('/games', getAllGames);
app.use('/characters', getAllCharacters);
app.use(getGameByID); 
app.use(putGames); 
app.use(patchGames); 
app.use('/games', postGames); 
app.use(deleteGames); 

app.listen(port, () => {
    console.log(`
    Server running on port ${port}
    You can access using ${serverAddress}`);
});