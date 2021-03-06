var createError = require('http-errors');
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require ('cors');
var usersRouter = require('./routes/users')
var restaurantRouter = require('./routes/restaurantlist')


var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://tipme:Password1@cluster0-7qbno.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.connection.once('open', function () {
  console.log('Connection has been made.')

});

var db = mongoose.connection; // <--pulling from mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected")
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
 });

 // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(cors());

// app.use('/users', usersRouter);
// app.use('/restaurant', restaurantRouter);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,  './public')));
app.use('/api', router);


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
  res.send('error');
});

 
 // <-- this checks to see if the connection is on or if we are getting an error. 



// app.use('/restaurantlist', restaurantlistRouter);
// app.use('/users', usersRouter);




module.exports = app;