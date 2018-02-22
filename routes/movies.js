var express = require('express');
var router = express.Router();
var moviesController = require('../controller/moviesController');

router.get('/all', moviesController.getAllMovies)
	  .post('/add',moviesController.addNewMovie)
	  .get('/:movieName',moviesController.getMovieDetails);

module.exports = router;
