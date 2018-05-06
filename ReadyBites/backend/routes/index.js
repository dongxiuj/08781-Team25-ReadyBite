var express = require('express');
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var Food = require('../models/food');
var bcrypt = require('bcryptjs');

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/register', function(req, res, next) {
  console.log('enter register post');
    var username = req.body.username;
    console.log(username);
    var password = req.body.password;
    console.log(password);
    // var confirm_password = req.body.confirm_password;
    var profile_image = 'default_image.jpg';
    console.log(profile_image);
    // if (req.file) {
    //     var profile_image = req.file.filename;
    // } else {
    //     var profile_image = 'default_image.jpg';
    // }

    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
    // req.checkBody('confirm_password', 'Password do not match').equals(req.body.password);
    console.log('check body success!');
    req.getValidationResult().then(function(result) {
        console.log('enter validation');
        console.log(result);

        if (!result.isEmpty()) {
            console.log('result is not empty!');
            var errors = result.mapped();
            return res.status(404).send({ errors: errors, validated: req.body});
            // res.render('register', { errors: errors, validated: req.body});
        } else {
            console.log('result is empty! -good')
            var newUser = new User({
                username : username,
                password : password,
                profile_image: profile_image
            });

            console.log(newUser);
            bcrypt.genSalt(10, function(err, salt) {
                console.log('gen salt---');
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    console.log('start hash');
                    newUser.password = hash;
                    newUser.save(function(err) {
                        console.log('start save--');
                        if (err) {
                            console.log('WWWW! error!!');
                            if (err.code === 11000) {
                                // Duplicate username
                                return res.render('register', { validated: req.body, errors: { username:{msg:'User already exists!'}} });
                            } else {
                                console.log('here');
                                console.log(err);
                                console.log('up is Error!!');
                                return res.render('register');
                            }
                            // Some other error

                        }
                        console.log('finish! no error');
                        return res.status(200).send(newUser);
                    });
                });
            });
        }
    });
});

// router.get('/login', function(req, res, next) {
//     res.render('login', { title: 'Log in' });
// });
router.post("/login", function(req, res, next) {
    console.log('enter log in--');
    console.log(req.body);
    passport.authenticate('local', function(err, user, message) {
        console.log(user);
        console.log('up is user');
        console.log(message);

        if (err) { 
            return res.status(404).send(err);
         }
        if (!user) {
            return res.status(401).send(message);
            // return res.redirect("/login");
        }

        // make passportjs setup the user object, serialize the user, ...
        req.login(user, {}, function(err) {
            if (err) { 
                return res.status(404).send(err); 
            };
            // send username to chat page
            req.session.username = user.username;
            return res.status(200).send(user);
        });
    })(req, res, next);
    return;
});

// router.post('/login',
//     passport.authenticate('local', {failureRedirect: '/login',
//         failureFlash: 'Invalid username or password',
//         successRedirect: '/'})
// );
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
passport.use(new LocalStrategy(function(username, password, done){
    User.findOne({ username: username }, function(err, user) {
        if (err) throw err;
        if (!user) {
            return done(null, false, {message: 'Unknown User'});
        }
        bcrypt.compare(password, user.password, function(err, isMatch) {
            if (err) return done(err);
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        });
    })
}));

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'You are now logged out');
    res.redirect('/login');
});

router.post('/users/favorate', function(req, res, next) {
    var username = req.body.username;
    var foodId = req.body.foodId;
    User.findOne({username: username}).exec(function(err, user) {
        if(err)
            return console.log(err);
        console.log(user);
        Food.findOne({_id: foodId}).exec(function(err, food) {
            if(err) {
                return console.log(err);
            }
            user.favorates.push(food);
            console.log('add user favorate');
            console.log(user);
            res.status(200).json(user.save());
        });
      });
});

router.get('/users', function(req, res, next) {
    var username = req.query.username;
    console.log(username);
    //where 1 is ascending and -1 is desceding.
  
    User.findOne({username: username}).populate('favorates').exec(function(err, user) {
      if(err)
          return console.log(err);
      console.log(user);
      res.status(200).json(user);
    });
  });
router.post('/users/addscore', function(req, res, next) {
    var username = req.body.username;
    var score = req.body.score;
    User.findOne({username: username}).exec(function(err, user) {
        if(err)
            return console.log(err);
        console.log(user);
        user.points = user.points + Number(score);
        res.status(200).json(user.save());
      });
});
router.post('/users/addCalories', function(req, res, next) {
    var username = req.body.username;
    var calory = req.body.calory;
    User.findOne({username: username}).exec(function(err, user) {
        if(err) {
            return console.log(err);
        }
        user.calories.push(Number(calory));
        console.log('add user calories');
        console.log(user);
        res.status(200).json(user.save());
      });
});

router.post('/updateRateScore', function(req, res, next) {
    var foodId = req.body.foodId;
    var rateScore = req.body.rate;

    Food.findOne({_id: foodId}).exec(function(err, food) {
        if(err) {
            return console.log(err);
        }
        food.totalRate = food.totalRate + Number(rateScore);
        food.rateCount = food.rateCount + 1;
        food.rate = Math.round(food.totalRate/food.rateCount);
        res.status(200).json(food.save());
    });
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
