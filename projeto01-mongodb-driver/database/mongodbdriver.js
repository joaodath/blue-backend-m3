const {MongoClient, ObjectId} = require('mongodb');
const dotenv = require('dotenv').config();

//remote database set using .env
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;

//testing local database
//const uri = `${process.env.DB_CONNECTION}`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function dbconnect() {
    try {
        await client.connect();
        console.log(`Connection to MongoDB successful. Using database: ${process.env.DB_NAME}`);
    } catch (err) {
        console.log('Connection error: ' + err);
    } 
}

async function dbclose() {
    await client.close(false, () => console.log('connection to MongoDB-mongodbdriver closed'));
}

module.exports = {
    client,
    dbconnect,
    dbclose,
    ObjectId
};
