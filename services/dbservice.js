var MongoClient = require('mongodb').MongoClient;

exports.createConnection = function(){
  MongoClient.connect("mongodb://prasanna:prasanna@ds111078.mlab.com:11078/projector").then(function(client){
    exports.database = client.db("projector");
    console.log("Connected to projector");
  });

}
