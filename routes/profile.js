var express = require ('express');
var router = express.Router();

router.get('/profile/:name', (req, res, next) => {
    console.log(req.params.name);
    users.findOne({
      username: req.params.name
    })
    .then(response => {
      res.json({
      status: 200,
      user: response
    })
    })
  });

  module.exports = router