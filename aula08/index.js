const express = require('express');
const mongoose = require('mongoose');
const FilmeSchema = require('./models/filme');

const app = express();
const port = 7000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send({info: "Hello MongoDB"});
});

app.get('/filmes', async (req, res) => {
  const filmes = FilmeSchema.find();
  res.send(filmes);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});