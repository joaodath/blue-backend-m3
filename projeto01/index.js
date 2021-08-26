const express = require('express');
const app = express();
app.use(express.json())

const port = 6000;
const serverAddress = `http://localhost:${port}`;

//imports gameList from games.js and loads it in a constant gameList
const {gameList} = require('./games');

// const gameList = [
//     { 
//         id: 1,
//         name: 'Grand Theft Auto 2',
//         release: '1999',
//         developer: 'Rockstar Games',
//         genre: 'Action',
//         players: '1',
//         img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/07/GrandTheftAuto2-Capa.png/270px-GrandTheftAuto2-Capa.png',
//         platform: ['Playstation', 'Windows']
//     },

//     {
//         id: 2,
//         'name': 'Grand Theft Auto 3',
//         release: '2001-10-22',
//         developer: 'Rockstar Games',
//         genre: 'Action',
//         players: '1',
//         img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cc/Grand_Theft_Auto_III_capa.png/270px-Grand_Theft_Auto_III_capa.png',
//         platform: ['Android','Playstation 2', 'PlayStation 4', 'Windows']
//     },
// ]

//imports docAPI from docAPI.js and loads it in a constant docAPI
//TODO: docAPI.js is not yet written
const docAPI = require('./docAPI');

//Function to sanitize the input
function sanitizeGameInput(input) {
        const gameClean = {
        'name': input.name,
        'release': input.release, 
        'release': input.developer,
        'genre': input.genre,
        'players': input.players,
        'img': input.img,
        'platform': input.platform
    };
    return gameClean;
};

//Function to sanitize the input from patch
function sanitizeGamePatch(input, gameOriginal) {
    const gameClean = {
    'name': input.name? input.name : gameOriginal.name,
    'release': input.release? input.release : gameOriginal.release, 
    'release': input.developer? input.developer : gameOriginal.developer,
    'genre': input.genre? input.genre : gameOriginal.genre,
    'players': input.players? input.players : gameOriginal.players,
    'img': input.img? input.img : gameOriginal.img,
    'platform': input.platform? input.platform : gameOriginal.platform
    };
    return gameClean;
};

//Checks the json object (input) for empty fields
function checkEmptyInput(input) {
    if (!input || !input.name || !input.release || !input.developer || !input.genre || !input.players || !input.img || !input.platform) {
        res.status(400).json({error: `All fields are required! Refer to documentation at ${serverAddress}/`});
    }
}

//CRUD - Create, Read, Update, Delete

//GET / - returns documentation of the API
app.get('/', (req, res) => {
    res.json(docAPI);
});

//GET /games - returns all games
app.get('/games', (req, res) => {
    res.json(gameList);
});

//GET /games/:id - returns a game with the id passed in the url
app.get('/games/:id', (req, res) => {
    const id = +req.params.id;
    console.log(typeof gameList);
    console.log(gameList);
    // I need to reference the gameList to get the game with the id passed in the url
    const game = gameList.find(game => game.id === id);    

    !game? res.status(404).json({error: 'Game not found!'}) : res.json(game);
});

// GET /filmes/{id} - Retornar a lista de filmes pelo ID
app.get("/filmes/:idFilme", (req, res) => {
    // Rota com recebimento de parametro (:id)
    const id = +req.params.idFilme;
    const filme = filmes.find((filme) => filme.id === id);
  
    !filme
      ? res.status(404).send({ error: "Filme não existe" })
      : res.json({ filme });
  });

//POST /games - creates a new game
app.post('/games', (req, res) => {
    const game = req.body.game;
    
    checkEmptyInput(game);

    const gameClean = sanitizeGameInput(game);

    //Creates the id for the game
    const lastGame = gameList[gameList.length - 1];
    const id = lastGame ? +lastGame.id + 1 : 1;
    gameClean.id = id;

    gameList.push(gameClean);
    res.status(201).json({success: `Game ${gameClean.name} created!`});

});

//PUT /games/:id - updates a game with the id passed in the url
app.put('/games/:id', (req, res) => {
    const id = +req.params.id;
    const game = req.body.game;

    checkEmptyInput(game);

    const gameClean = sanitizeGameInput(game);

    gameList[id] = gameClean;
    res.status(200).json({success: `Game ${gameClean.name} updated!`});
});

//PATCH /games/:id - patches a game with the id passed in the url
app.patch('/games/:id', (req, res) => {
    const id = +req.params.id;
    const game = req.body.game;

    const gameClean = sanitizeGamePatch(game, gameList[id]);

    gameList[id] = gameClean;
    res.status(204).json({success: `Game ${gameClean.name} patched!`});
});

//DELETE /games/:id - deletes a game with the id passed in the url
app.delete('/games/:id', (req, res) => {
    const id = +req.params.id;
    const game = gameList[id];
    
    !game ? res.status(404).json({error: 'Game not found!'}) : gameList.splice(id, 1);

    res.status(204).json({success: `Game ${game.name} deleted!`});
});

app.listen(port, () => {
    console.log(`
    Server running on port ${port}
    You can access using ${serverAddress}`);
});