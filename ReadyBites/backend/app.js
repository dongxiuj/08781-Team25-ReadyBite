var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var session = require('express-session');
var passport = require('passport');
var expressValidator = require('express-validator');
var flash = require('connect-flash');

mongoose.connect('mongodb://localhost/food', function(err) {
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('mongodb connection successful');
        console.log('----this code');
    }
});

var index = require('./routes/index');
var image = require('./routes/image');
var food = require('./routes/food');
var suggestion = require('./routes/suggestion');
var userImage = require('./routes/userImage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//-------
// handle session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// passport
app.use(passport.initialize());
app.use(passport.session());
const validatorOptions = {};
app.use(expressValidator(validatorOptions));

app.use(flash());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
});
//------
app.use('/userImage', userImage);
app.use('/food', food);
app.use('/image', image);
app.use('/', index);
//app.use(multiparty({uploadDir:'./imagesPath' }));
//app.use('/suggestion', suggestion);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
