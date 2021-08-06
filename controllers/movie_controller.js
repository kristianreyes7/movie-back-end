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
//seed
router.get('/seed', (req, res) => {
  Movies.create(
    [
      {
        title: "Jungle Cruise",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmovies.disney.com%2Fjungle-cruise&psig=AOvVaw28NQHWNmCxIAXZffancflv&ust=1628319773967000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCNjL3f_pm_ICFQAAAAAdAAAAABAD",
        releaseDate: 2021,
        description: "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",
        rating: 3,
        review: "mehh",
        category: "Action",
      },
      {
        title: "Old",
        image: "https://movies.universalpictures.com/media/old-poster-60afb778dab32-1.jpg",
        releaseDate: 2021,
        description: "A vacationing family discovers that the secluded beach where they're relaxing for a few hours is somehow causing them to age rapidly, reducing their entire lives into a single day",
        rating: 3,
        review: "mehh",
        category: "Drama",
      },
      {
        title: "The Green Knight",
        image: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/05/green_knight_ver7_xxlg.jpg",
        releaseDate: 2021,
        description: "A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight",
        rating: 3,
        review: "mehh",
        category: "Fantasy",
      },
      {
        title: "Black Widow",
        image: "https://images-na.ssl-images-amazon.com/images/I/914MHuDfMSL.jpg",
        releaseDate: 2021,
        description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        rating: 3,
        review: "The best ",
        category: "Action",
      },
      {
        title: "Stillwater",
        image: "https://filmdaily.co/wp-content/uploads/2021/08/stillwater-07.jpg",
        releaseDate: 2021,
        description: "A father travels from Oklahoma to France to help his estranged daughter, who is in prison for a murder she claims she didn't commit.",
        rating: 3,
        review: "still",
        category: "Drama",
      },
      {
        title: "Space Jam: A New Legacy",
        image: "https://images.penguinrandomhouse.com/cover/9780593382271",
        releaseDate: 2021,
        description: "A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.",
        rating: 3,
        review: "mehh",
        category: "Comedy",
      },
      {
        title: "Snake Eyes",
        image: "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/snake-eyes-gi-joe-origins/images/regions/us/onesheet.jpg",
        releaseDate: 2021,
        description: "A G.I. Joe spin-off centered around the character of Snake Eyes.",
        rating: 3,
        review: "mehh",
        category: "Action",
      },
    ]
  )  
})
//update 
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