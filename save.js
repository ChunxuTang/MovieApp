const mongoose = require('mongoose');
const movies = require('./movies.json');
const movieController = require('./controllers/movie');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

for (let [, movie] of Object.entries(movies.moviedata)) {
  movieController.saveMovie(movie);
}

mongoose.disconnect();
