var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();


var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://tipme:Password1@cluster0-7qbno.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {
  useNewUrl: true
});

mongoose.connection.once('open', function () {
  console.log('Connection has been made.')

});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

router.get('/post', function (req, res, next) {
  users.find({})
    .then(user => {
      res.render('index', {
        user
      })
    })
});








app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(PORT, function() {
//   console.log("Listening on port " + PORT + ".");
// });

var db = mongoose.connection; // <--pulling from mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected")
}); // <-- this checks to see if the connection is on or if we are getting an error. 

app.listen(3000);


module.exports = app;