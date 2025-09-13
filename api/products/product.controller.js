const Product = require('./product.model');

// Create a new product
async function createProduct(data) {
  const product = new Product(data);
  return await product.save();
}

// Get all products
async function getProducts(filter = {}) {
  return await Product.find(filter);
}

// Get a product by ID
async function getProductById(id) {
  return await Product.findById(id);
}

// Update a product by ID
async function updateProduct(id, data) {
  return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

// Delete a product by ID
async function deleteProduct(id) {
  return await Product.findByIdAndDelete(id);
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
