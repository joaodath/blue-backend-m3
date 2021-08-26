const express = require('express')
const app = express()
app.use(express.json())

const filmes = [
{
      id: 1,
      nome: "Capitão America",
      duracao: 160,
    },
    {
      id: 2,
      nome: "Capitã Marvel",
      duracao: 200,
    },
  ];

const getFilmesValidos = () => filmes.filter(Boolean);

// Função responsável por fazer o getById de filmes:
const getFilmeById = id => getFilmesValidos().find(filme => filme.id === id);

// Função responsável por fazer o getByIndex de filmes:
const getFilmeIndexById = id => getFilmesValidos().findIndex(filme => filme.id === id)


//CRUD Create[POST] - Read{GET] - Update[PUT] - Delete[DELETE]

//GET / - home
app.get('/', (req, res) => {
    res.send('Hello World Express')
})

//GET /filmes - Retorna lista de filmes
app.get('/filmes', (req, res) => {
    res.send(filmes)
})

//GET /filmes/:id - Retorna filme pelo id
app.get('/filmes/:id', (req, res) => {
    const id = +req.params.id;
    console.log(typeof filmes);
    const filme = filmes.find(filme => filme.id === id);

    !filme ? res.status(404).send('Movie not found') : res.json({filme});
})

//POST /filmes - Adiciona filme
app.post('/filmes', (req, res) => {
    const filme = req.body.filme

    if (!filme || !filme.nome || !filme.duracao)
        res.status(400).send({error: 'Invalid request'})
    
    const ultimoFilme = filmes[filmes.length - 1]
    const id = ultimoFilme ? ultimoFilme.id + 1 : 1
    
    filme.id = id
    
    filmes.push(filme)
    res.send('Movie added successfully!')
})

//PUT /filmes/:id - Atualiza filme pelo id
app.put('/filmes/:id', (req, res) => {
    const id = +req.params.id;

    //Checks if the movie exists
    const filmeIndex = filmes.findIndex(filme => filme.id === id)
    if (filmeIndex === -1) {
        res.status(404).send('Movie not found');
        return;
    };

    //new movie from the request
    const novoFilme = req.body;

    //Checks if the movie sent is valid
    if (!filme || !filme.nome || !filme.duracao) {
        res.status(400).send({error: 'Invalid request'});
        return;
    };

    //Gets the old movie
    const filme = filmes.find(filme => filme.id === id);

    novoFilme.id = filme.id
    filmes[filmeIndex] = novoFilme
    res.send(`Movie ${filmes[id]} updated successfully!`)
})

//DELETE /filmes/:id - Deleta filme pelo id
app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id]
    !filme ? res.status(404).send('Movie not found') : filmes.splice(id, 1)
    res.send(`Movie ${filme} deleted successfully!`)
})

app.listen(6000, () => {
    console.log('Server running at http://localhost:3000')
})