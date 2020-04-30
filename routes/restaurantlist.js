var express = require ('express');
var router = express.Router();
var restaurantlist = require('../models/restaurantlist');


  var url = "mongodb://localhost:3001/restaurants";

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log("Unable to connect to the server", err);
    } else {
      console.log("Connection Established");

      var collection = db.collection("restaurants");

      collection.find({}).toArray(function (err, result) {
        if (err) {
          res.send(err);
        } else if (result.length) {
          res.render("restaurantlist", {
            restaurantlist: result,
          });
        } else {
          res.send("No documents found");
        }

        db.close();
      });
    }
  });

  router.get('/meals/:restaurants', function(req, res, next) {
    let meals = module.exports.restaurants(peep => {
      return peep.restaurants === parseInt(req.params.restaurants);
    });
  
  res.render('index', { meals });
  console.log(req.url);
  });
  module.exports = router;
  