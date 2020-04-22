var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var users = require('../models/users');  // <-- importing models witha custom name we created 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  res.send('You successfully created a POST route');
});

 

//  router.get('/resturantlist', function(req, res){
//   var MongoClient = mongodb.MongoClient;

//    var url = 'mongodb://localhost:3001/resturants';

//    MongoClient.connect(url, function(err, db){
//     if(err){
//       console.log('Unable to connect to the server', err);
      
//     }else {
//       console.log("Connection Established");

//       var collection = db.collection('resturants');

//       collection.find({}).toArray(function(err, result){
//         if (err){
//           res.send(err);
//         } else if (result.length){
//           res.render('resturantlist', {
//             "resturantlist" : result
//           });
//         } else{
//           res.send('No documents found');
//         }

//         db.close();
//       })

//     }
//   });
// });

module.exports = router;
