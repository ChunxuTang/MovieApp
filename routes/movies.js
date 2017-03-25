const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');


router.get('/', (req, res) => {
  movieController.getMovies((err, movies) => {
    if (err) res.end(err.message);
    //console.log(JSON.stringify(movies));
    res.end(JSON.stringify(movies));
  });
});

module.exports = router;
