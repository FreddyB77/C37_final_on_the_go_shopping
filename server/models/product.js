const mongoose = require('mongoose');

// PRODUCT SCHEMA TO BE SAVED TO DATABASE
const Product = mongoose.model('Product', {
  upc: {
    type: String,
    trim: true,
    unique: true
  },
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    trim: true
  }
});

module.exports = Product;
