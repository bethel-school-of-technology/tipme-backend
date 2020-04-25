var express = require('express');
var router = express.router()
var users = require('../models/users');

router.post('/signupform', (req, res, next) => {
    console.log(req.body);
    users.findOne({
      username: req.body.username,
    })
    .then(user => {
      console.log(user);
     if(user) {
       res.send('User already exsits');
     } else {
       let newUser = new users({
         username: req.body.username,
         password: req.body.password
       });
       newUser.save(function(err) {
         if (err) {
         console.log(err);
           res.json({
            status: 400,
            message: "error saving user"
          });
         } else {
            console.log(newUser);
                        res.send(JSON.stringify(newUser));
          res.send('sucessful');
         res.json({
              status: 200, 
             message: 'user added'
            })  //<-- this is the only wayt o get the info to the front end.
         }
       })
      }
    })
  });

  module.exports = router