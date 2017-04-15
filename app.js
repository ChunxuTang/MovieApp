require('./config/config');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const index = require('./routes/index');
const movies = require('./routes/movies');

const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/movies', movies);


app.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} `);
});

module.exports = app;
