const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema({
    jersey: {
        type: String
    },
    accessory: {
        type: String
    },
    number: {
        type: Number
    },
    _id: {
        type: String
    },
    time: {
        type: Number
    },
    price:{
        type:Number
    },
    name:{
        type: String
    },
    address:{
        type: String
    }
});

module.exports = mongoose.model('Order', Order);