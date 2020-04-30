  var express = require('express');
  var router = express.Router();
  

  
  router.get('/restaurantlist', function(req, res){
   var MongoClient = mongodb.MongoClient;

    var url = 'mongodb://localhost:3001/restaurants';

    MongoClient.connect(url, function(err, db){
     if(err){
       console.log('Unable to connect to the server', err);
      
     }else {
       console.log("Connection Established");

       var collection = db.collection('restaurants');

       collection.find({}).toArray(function(err, result){
         if (err){
           res.send(err);
         } else if (result.length){
           res.render('restaurantlist', {
             "restaurantlist" : result
           });
         } else{
           res.send('No documents found');
         }

         db.close();
       })

     }
  });
});

module.exports = router