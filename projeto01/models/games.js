const mongoose = require('../database/index');

const GamesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    players: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    platform: {
        type: Array,
        required: true
    },
});

const Games = mongoose.model('Games', GamesSchema);

module.exports = Games;