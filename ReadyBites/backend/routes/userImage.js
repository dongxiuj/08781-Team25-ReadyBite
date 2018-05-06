var express = require('express');
var router = express.Router();
var myFood = require('../models/food');
var multipart = require('connect-multiparty');
var path = require('path');
//var multiparty = require("multiparty");
//multipartyMiddleware = multiparty({ uploadDir: './imagesPath' });
var multipartMiddleware = multipart();
var fs = require('fs');

router.get('/', function(req, res, next) {
    console.log("enter get user image");
    var name = req.query.id;
    res.sendfile(path.resolve('./public/images/user/' + name));
});

router.post('/',multipartMiddleware,function(req, res, next) {
    console.log("enter upload");
    //save path to its corresponding object
    var file = req.files.file;
    console.log(file.name);
    console.log(file.type);
    console.log(file.path);
    var tmp_path = file.path;
    var target_path = './public/images/user/' + file.name;

    /*var query = { _id: file.name};
    myFood.findOneAndUpdate(query, { image: {path: target_path,name: file.name}} , function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }
    
        console.log(doc);
    }); */

    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            console.log('File uploaded to: ' + target_path);
            res.status(200).send('OK');
        });
    });

});


module.exports = router;