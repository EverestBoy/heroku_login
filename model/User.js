const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    phone: {
        type: String,
        required: true,
        max: 15,
        min: 10
    },
    image: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 126,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('User', userSchema);