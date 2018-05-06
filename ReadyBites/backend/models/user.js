var mongoose = require('mongoose');
const Food = require('../models/food');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    calories: [{
        type: Number,
        default: 0,
    }],
    points: {
        type: Number,
        default: 0,
    },
    profile_image: {
        type: String
    },
    favorates:[{
        type: Schema.Types.ObjectId,
        ref: 'Food',
    }],

    gender: {
        type: String,
        enum: ['female', 'male', 'other', 'undefined'],
        default: 'undefined'
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    blood_type: {
        type: String,
        enum: ['A', 'B', 'AB', 'O','Other','undefined'],
        default: 'undefined'
    },
    phone_number: {
        type: String,
        default: 'undefined'
    },
    email: {
        type: String,
        default: 'undefined'
    },
    occupation: {
        type: String,
        default: 'undefined'
    },
    address: {
        type: String,
        default: 'undefined'
    }
});

module.exports = mongoose.model('User', UserSchema);

