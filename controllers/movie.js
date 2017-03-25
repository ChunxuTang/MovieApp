
const Movie = require('../models/Movie');

exports.getMovies = (callback) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      console.log('Error in getting movies: ', err.message);
      callback(err);
      // return [];
    }
    // console.log(movies);
    callback(null, movies);
  });
};

exports.saveMovie = (movie) => {
  const createdMovie = new Movie({
    name: movie.name,
    description: movie.description
  });

  createdMovie.save((err, obj) => {
    if (err) {
      console.log('Error in saving movie: ', err.message);
      return;
    }
    return obj;
  });
};
