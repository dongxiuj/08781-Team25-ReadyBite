var express = require('express');
var router = express.Router();
var myFood = require('../models/food');
var _ = require('underscore');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
	console.log("enter get");
  	res.send('respond with a resource');
});*/

/* GET listing sorted by different standards */
router.get('/', function(req, res, next) {
	console.log("enter get food");
	var standard = req.query.standard;
	var longitude = req.query.longitude;
	var latitude = req.query.latitude;
	
    //where 1 is ascending and -1 is desceding.
	order : Number;
	order = 1;

	var query;
    if(_.isEqual(standard, "rate")) {
		query = myFood.find({}).where('coordinates').near({
			center: [longitude,latitude],
			maxDistance: 10*1000
		}).sort({'rate' : -1}).limit(10);

	} else if(_.isEqual(standard, "price")) {
		query = myFood.find({}).where('coordinates').near({
			center: [longitude,latitude],
			maxDistance: 10*1000
		}).sort({'price' : 1}).limit(10);

	} else if(_.isEqual(standard, "calories")) {
		query = myFood.find({}).where('coordinates').near({
			center: [longitude,latitude],
			maxDistance: 10*1000
		}).sort({'calories' : 1}).limit(10);
	} else {
		query = myFood.find({}).where('coordinates').near({
			center: [longitude,latitude],
			maxDistance: 10*1000
		}).limit(10);
	}
	console.log(order);
	console.log(standard);

	query.exec(function(err, foods) {
		if(err) {
			console.log(err)
		} else {
			foods.forEach(function(food) {
				console.log(food);
			});
			res.status(200).json(foods);
		}
			// return console.log(err);		
	});
}); 


router.post('/', function(req, res, next) {
	console.log('----this code');
	console.log("enter post food");
	var data = req.body;
	console.log(data);

	var foodInstance = new myFood({
			type:data.type,
			waitingTime:data.waitingTime,
			calories:data.calories,
			taste:data.taste,
			price:data.price,
			image: data.image, 
			//location: {
			  // Place longitude first, then latitude
			  coordinates: [data.longitude, data.latitude],
			  address:data.address
			//}
	}).save(function(err, foodInstance) {
		if (err) {
			console.log(err);
            return res.status(400).send("err in save food instance");
        } else {
			console.log("save!");
			console.log(foodInstance._id);
            return res.status(200).send(foodInstance);
        }
	});
	/*myFood.create(data, function (err, foodInstance) {
        if (err) {
            return res.status(400).send("err in post /food");
        } else {
			console.log("save!");
			console.log(foodInstance._id);
            return res.status(200).send(foodInstance);
        }
    });*/
});

module.exports = router;
