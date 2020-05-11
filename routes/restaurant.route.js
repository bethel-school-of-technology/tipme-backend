const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3001;
const restaurantRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use('/restaurant', restaurantRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

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