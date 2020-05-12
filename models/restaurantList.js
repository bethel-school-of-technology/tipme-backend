const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let restaurant = new Schema({
    Name: {
        type: String
    },
    Address: {
        type: String
    },
    PhoneNumber: {
        type: String
    }
})
module.exports = mongoose.model('restaurant.route', restaurantSchema);