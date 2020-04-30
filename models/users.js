var mongoose = require('mongoose'); // This allows use of mongoose in this file

var nameSchema = new mongoose.Schema({
    username: String,
    password: String,
   });  // <-- creates models schema for this particular models

module.exports = mongoose.model('users', nameSchema); //<--  this exports the schema witha custom name.耀

