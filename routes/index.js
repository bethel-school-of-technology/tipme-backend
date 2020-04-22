var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/resturantlist', function(req, res){
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:3000/resturants';

  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to the server', err);
      
    }else {
      console.log("Connection Established");

      var collection = db.collection('resturants');

      collection.find({}).toArray(function(err, result){
        if (err){
          res.send(err);
        } else if (result.length){
          res.render('resturantlist', {
            "resturantlist" : result
          });
        } else{
          res.send('No documents found');
        }

        db.close();
      })

    }
  });
});

module.exports = router;
