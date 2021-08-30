const mongoose = require('mongoose');
require('dotenv').config()
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection to MongoDB successful');
}).catch((err) => {
    console.log('Connection error: ' + err);
});

module.exports = mongoose;