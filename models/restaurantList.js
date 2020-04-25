var mongoose = require('mongoose'); // This allows use of mongoose in this file

var RestaurantlistSchema = new mongoose.Schema({
    restaurantname: 'string',
    location: 'string'
   });  // <-- creates models schema for this particular models

module.exports = mongoose.model('restaurantlist', RestaurantlistSchema); //<--  this exports the schema witha custom name.耀