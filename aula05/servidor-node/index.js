const express = require('express')
const app = express()
app.use(express.json())
 
const filmes = [
    'Capitão América',
    'Capitã Marvel',
    'Pantera Negra'
]

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
    const id = req.params.id - 1;
    const filme = req.body.filme
    filmes[id] = filme
    res.send(`Movie ${filmes[id]} updated successfully!`)
})

//DELETE /filmes/:id - Deleta filme pelo id
app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id]
    !filme ? res.status(404).send('Movie not found') : filmes.splice(id, 1)
    res.send(`Movie ${filme} deleted successfully!`)
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})