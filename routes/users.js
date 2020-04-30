var express = require('express');


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
