const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_filmes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection to MongoDB successful');
}).catch((err) => {
    console.log('Connection error: ' + err);
});

// mongoose.connection.on('error', err => {
//     throw 'failed connect to MongoDB';
//   });

module.exports = mongoose;