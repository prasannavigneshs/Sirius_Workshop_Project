var movies =  require('./movieData');
var dbService = require('../services/dbservice');

exports.getAllMovies = function(req,res){
  var db = dbService.database;
  var moviesCollection = db.collection("movies");

  moviesCollection.find().toArray().then(function(result){
    var opJson = {
      "isSuccess" : true,
      "data" : result
    };
    return res.json(opJson);
  });

};

exports.addNewMovie = function(req, res, next){
      var db = dbService.database,
      movie = req.body,
      moviesCollection = db.collection("movies");

      moviesCollection.insert(movie).then(function(save_data){
        return res.json({
          "isSuccess": true
        });
      });
}

exports.getMovieDetails = function(req, res, next) {
    try {
      console.log(req.params.movieName);
      var db=dbService.database;
      var moviesCollection = db.collection("movies");
      moviesCollection.find({ name: req.params.movieName }).toArray().then(result=>{
        if (result.length > 0) {
          res.json({
            isSuccess: true,
            data: result[0]
          });
        } else {
          res.json({
            isSuccess: false,
            error: STATUS_CODE.MOVIE_NOT_FOUND
          });
        }
      }).catch(err=>{
        console.log(err);
        res.json({
          isSuccess: false,
          error: STATUS_CODE.DB_ERROR
        });
      });
    } catch (err) {
      res.json({
        isSuccess: false,
        error: STATUS_CODE.SERVER_ERROR
      });
    }
};
