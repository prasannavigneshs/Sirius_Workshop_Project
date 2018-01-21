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

}
