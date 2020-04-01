var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var users = require('../models/users');  // <-- importing models witha custom name we created 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  users.findOne({
    username: req.body.username,
  })
  .then(user => {
    // console.log(user);
    if(user) {
      res.send('User already exsits');
    } else {
      let newUser = new users({
        username: req.body.username,
        password: req.body.password
      });
      newUser.save(function(err) {
        if (err) {
          console.log(err);
          res.json({
            status: 400,
            message: "error saving user"
          });
        } else {
          console.log(newUser);
          // res.send(JSON.stringify(newUser));
          // res.send('sucessful');
          res.json({
            status: 200, 
            message: 'user added'
          })  //<-- this is the only wayt o get the info to the front end.
        }
      })
    }
  })
});

// router.get('/resturantlist', function(req, res){
//   var MongoClient = mongodb.MongoClient;

//   var url = 'mongodb://localhost:3000/resturants';

//   MongoClient.connect(url, function(err, db){
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
