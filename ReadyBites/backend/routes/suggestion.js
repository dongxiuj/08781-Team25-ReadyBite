var express = require('express');
var router = express.Router();
var myFood = require('../models/food');


/* GET users listing sorted by different standards */
router.get('/', function(req, res, next) {
	 console.log("enter get suggestion");
  	//res.send('respond with a resource');
  	var standard = req.query.id;
    console.log(standard);
  	myFood.sort({standard:-1}).exec(callback); 
});

module.exports = router;