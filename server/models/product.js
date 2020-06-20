const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
  upc: {
    type: String,
    trim: true,
    unique: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  price: {
    category: Number
  },
  image: {
    type: String
  },
  quantity: {
    type: Number
  }
});

module.exports = Product;
