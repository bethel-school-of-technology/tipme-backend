var mongoose = require('mongoose'); // This allows use of mongoose in this file

var RestaurantlistSchema = new mongoose.Schema({
    restaurantName: String,
    location: String
    // add other deets.
    
   });  // <-- creates models schema for this particular models

module.exports = mongoose.model('restaurantlist', RestaurantlistSchema); //<--  this exports the schema witha custom name.耀