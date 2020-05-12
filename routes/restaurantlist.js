var express = require('express');
var router = express.Router();

var restaurantRoutes = express.Router();


restaurantRoutes.route('/').get(function(req, res) {
    Restaurant.find(function(err, restaurant) {
        if (err) {
            console.log(err);
        } else {
            res.json(restaurant);
        }
    });
});

restaurantRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Restaurant.findById(id, function(err, todo) {
        res.json(restaurant);
    });
});

restaurantRoutes.route('/add').post(function(req, res) {
    let restaurant = new restaurant(req.body);
    restaurant.save()
        .then(restaurant => {
            res.status(200).json({'restaurant': 'restaurant added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new restaurant failed');
        });
});

restaurantRoutes.route('/update/:id').post(function(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
        if (!restaurant)
            res.status(404).send("data is not found");
        else
        restaurant.Name = req.body.Name;
        restaurant.Location = req.body.Location;
        restaurant.PhoneNumber = req.body.PhoneNumber;
        restaurant.save().then(restaurant => {
                res.json('restaurant updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

restaurantRoutes.delete(function(req, res) {
  restaurant.remove({
      _id: req.params.bear_id
  }, function(err, bear) {
      if (err)
          res.send(err);
      res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;