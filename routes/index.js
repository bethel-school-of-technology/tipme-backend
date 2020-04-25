var express = require('express');
var router = express.Router();
var users = require('../models/users');  // <-- importing models witha custom name we created 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  res.send('You successfully created a POST route');
});

 
module.exports = router;
