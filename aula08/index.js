const express = require('express');
const mongoose = require('mongoose');
const filmeSchema = require('./models/filme');

const app = express();
const port = 7000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send({info: "Hello MongoDB"});
});


app.get('/filmes',  (req, res) => {
  const filmes =  filmeSchema.filmeSchema.find();
  res.send(filmes);
});

/** 
 * 
router.get('/posts', function(req, res) {
  console.log('Requesting posts');
  post.find({})
      .exec(function(err, posts) {
          if (err) {
              console.log('Error getting the posts');
          } else {
              res.json(posts);
              console.log(posts);
          }
      });
});

/** router.get('/posts', function(req, res) {
  console.log('Requesting posts');
  post.find({})
      .exec()
      .then(function(posts) {
          res.json(posts);
          console.log(posts);
      })
      .catch(function(error){
          console.log('Error getting the posts');
      });
}); 

app.get('/filmes', async function(req, res) {
  console.log('Requesting movies');
  await filmeSchema.filmeSchema.find({})
      .exec()
      .then(function(filmeSchema) {
          res.json(filmeSchema);
          console.log(filmeSchema);
      })
      .catch(function(error){
          console.log('Error getting the movies');
      });
});

**/

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});