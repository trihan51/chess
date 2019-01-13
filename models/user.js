
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema for user
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'a username is required']
    }
    , first_name: {
        type: String
    }
    , last_name: {
        type: String
    }
    , email: {
        type: String,
        required: [true, 'an email is required']
    }
    , password: {
        type: String,
        required: [true, 'a password is required']
    }
})

// create model for user
const User = mongoose.model('user', UserSchema);

module.exports = User;
