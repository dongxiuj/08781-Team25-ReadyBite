var mongoose = require('mongoose');

//img
var FoodSchema = new mongoose.Schema({
    type: String,
    waitingTime: Number,
    calories: {
        type: Number,
        default: 0,
    },
    rate: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        default: '0',

    },
    //location: {
        // It's important to define type within type field, because
        // mongoose use "type" to identify field's object type.
        //type: {type: String, default: 'Point'},
    coordinates: {type: [Number], default: [0, 0]},
    address: String,
    //}
    /*location: {
        coordinates:{
            type: { type: [Number]}, 
            index: '2dsphere'
        }
    }*/
    totalRate: {
        type: Number,
        default: 0,
    },
    rateCount: {
        type: Number,
        default: 0,
    }
});


module.exports = mongoose.model('Food', FoodSchema);