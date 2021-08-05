//====dependencies====//
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');

//====middleware====//
app.use(cors());
app.use(express.json());

//====controllers====//
const movieController = require('./controllers/movie_controller.js');
app.use('/movies', movieController);

//====server====//
app.listen(PORT, () => {
  console.log('listening...', PORT);
})
mongoose.connect('mongodb://localhost:27017/animalShelter',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
mongoose.connection.once('open', () => {
  console.log('connected to mongod...')
})