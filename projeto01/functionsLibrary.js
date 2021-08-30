//importing requirements
const mongoose = require('mongoose');

//Function to sanitize the input
function sanitizeGameInput(input) {
    const gameClean = {
    'name': input.name,
    'release': input.release, 
    'developer': input.developer,
    'genre': input.genre,
    'players': input.players,
    'img': input.img,
    'platform': input.platform
    };
return gameClean;
};

//Function to sanitize the input from patch
function sanitizeGamePatchOld(input, gameOriginal) {
    const gameClean = {
    'name': input.name? input.name : gameOriginal.name,
    'release': input.release? input.release : gameOriginal.release, 
    'developer': input.developer? input.developer : gameOriginal.developer,
    'genre': input.genre? input.genre : gameOriginal.genre,
    'players': input.players? input.players : gameOriginal.players,
    'img': input.img? input.img : gameOriginal.img,
    'platform': input.platform? input.platform : gameOriginal.platform
    };
    return gameClean;
};

//Function to sanitize the input from patch
function sanitizeGamePatch(input) {
    if (input.name) {
        input.name = (input.name).toString();
    }

    if (input.release) {
        input.release = (input.release).toString();
    }

    if (input.developer) {
        input.developer = (input.developer).toString();
    }

    if (input.genre) {
        input.genre = (input.genre).toString();
    }

    if (input.players) {
        input.players = +input.players;
    }

    if (input.img) {
        input.img = (input.img).toString();
    }

    if (input.platform) {
        input.platform = (input.platform).toString();
    }

    return input;
};

//Checks the json object (input) for empty fields
function checkEmptyInput(input, res) {
    if (!input || !input.name || !input.release || !input.developer || !input.genre || !input.players || !input.img || !input.platform) {
        res.status(400).json({error: `All fields are required! Refer to documentation`});
        return;
    }
}

//Checks if the id passed is valid on MongoDB
function checkId(id, res) {
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(422).json({error: 'ID is invalid'});
        return;
    }
}

async function doesItExist(modelName, id, res) {
    const model = './models/' + `${modelName}`;
    const modelExists = require(model);
    const game = await modelExists.findById(id);
    if (!game) {
        res.status(404).json({error: 'Game not found'});
    } else {
        return game;
    };
}

function testFunction() {
    console.log('I\'m okay!');
}

module.exports = {
    sanitizeGameInput,
    sanitizeGamePatch,
    checkEmptyInput,
    checkId,
    doesItExist,
    testFunction
};

//testDoesItExist('games');
//./models/games.js