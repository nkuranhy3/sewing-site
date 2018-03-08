var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  productname: String,
  image: String,
  description: String,
  price: Number,
  inStock: Boolean,
  postedDate: { type: Date, default: Date.now }
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;