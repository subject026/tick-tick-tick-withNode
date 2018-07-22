const mongoose = require('mongoose');
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');
const mongooseMongodbErrors = require('mongoose-mongodb-errors');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: "Please supply an email address",
    validate: [validator.isEmail, "Email address is invalid"]
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// Handle password field & hashing
userSchema.plugin(passportLocalMongoose, {usernameField: "email"});
// Converts duplicate key error into something more user friendly
userSchema.plugin(mongooseMongodbErrors);

module.exports = mongoose.model('User', userSchema);
