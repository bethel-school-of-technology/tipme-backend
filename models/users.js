var mongoose = require('mongoose'); // This allows use of mongoose in this file

var nameSchema = new mongoose.Schema({
    username: String,
    password: String,
    // add remainder needs for "signupform"
   });  // <-- creates models schema for this particular models

module.exports = mongoose.model('users', nameSchema); //<--  this exports the schema witha custom name.耀