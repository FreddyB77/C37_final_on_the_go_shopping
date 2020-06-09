const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase() === 'password') {
        throw new Error('Password cannot be password.');
      }
      if (value.length < 8) {
        throw new Error('Password must be at least 8 characters long!');
      }
    }
  }
});

module.exports = User;
