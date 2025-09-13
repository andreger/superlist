const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  categories: {
    type: [String],
    default: []
  },
  type: {
    type: String,
    enum: ['wedding', 'babyshower'],
    required: true
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
