var express = require('express');
var router = express.Router();
var users = require('../models/users');

router.get('/login', (req, res) => {
    res.send('welcome to login');
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    users.findOne({
      username: req.body.username
    })
    .then(userFound => {
      if(userFound) {
        if(userFound.password === req.body.password) {
          res.json({
            status: 200,
            messgae: "user found",
            user: userFound
          })
        } else {
          res.json({
            status: 401,
            message: "Last name does not match"
          })
        }
      } else {
        res.json({
          status: 400,
          message: "User not found"
        
        })
      }
    })
  });

  module.exports = router