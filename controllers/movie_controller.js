const express = require('express');
const router = express.Router();
const Movies = require('../models/movie_model.js');

//create
router.post('/', (req, res) => {
  Movies.create(req.body, (error, newMovie) => {
    error?
    console.log(error)
    :
    res.json(newMovie);
  })
});

//read
router.get('/', (req, res) => {
  Movies.find({}, (error, foundMovie) => {
    error?
    console.log(error)
    :
    res.json(foundMovie);
  })
})


router.put('/:id', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, foundMovie) => {
    error?
    console.log(error)
    :
    res.json(foundMovie)
  })
})
//delete
router.delete('/:id', (req, res) => {
  Movies.findByIdAndDelete(req.params.id, (error, deleteMovie) => {
    error?
    console.log(error)
    :
    res.json(deleteMovie);
  })
})

module.exports = router;
