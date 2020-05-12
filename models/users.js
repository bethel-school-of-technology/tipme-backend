var mongoose = require('mongoose'); // This allows use of mongoose in this file
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
// var secret = require('../config').secret;

var NewUserSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^a-zA-Zo-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    hash: String,
    salt: String
                        
   }, {timestamps: true});  

//sets user password
NewUserSchema.plugin(uniqueValidator, {message: 'is already taken'});
NewUserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.has = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

//validates password
NewUserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString(hex);
    return this.hash == hash;
};

module.exports = mongoose.model('NewUser', NewUserSchema); //<--  this exports the schema witha custom name.耀