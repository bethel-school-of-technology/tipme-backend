var express = require('express');
var router = express.Router();
var user = require('../models/users');
var authService = require('../services/auth');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});
router.get('/:id', function (req, res) {
  res.json('User', + req.params.id);
});

router.get('/:id/edit', function (req, res) {
  res.send('Edit User' + req.params.id)
});

router.put('/:id', function(req, res)  {
  res.send('Update User' + req.params.id)
});

router.delete('/:id', function(req, res)  {
  res.json('Delete User' + req.params.id)
})



module.exports = router;
