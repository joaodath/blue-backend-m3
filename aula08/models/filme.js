const mongoose = require('../database/index');

const FilmeSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    duracao: {
        type: Number,
        require: true
    },
});

module.exports = FilmeSchema