 var express = require('express');
 var router = express.Router();
 var users = require('../models/users');  // <-- importing models witha custom name we created 
 var app = express();

// /* GET home page. */
//  app.get("/signupform", (req, res, next) => {
//   res.json(['sign up here']);
// });

// app.get("/login", (req, res, next) => {
//    res.json(['please login']);
//  });

//  app.get("/restaurantlist", (req, res, next) => {
//    res.json([]);
//  });

 
 module.exports = router;
