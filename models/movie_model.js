const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  releaseDate: {type: Date, required: true},
  description: {type: String, required: true},
  rating: {type: Number, max: 5},
  review: {type: String},
  category: [String],
})


const Movies = mongoose.model('Movie', movieSchema);
module.exports = Movies;