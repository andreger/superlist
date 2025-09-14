import Product from './product.model';
import { CreateProductData, UpdateProductData, IProduct } from '../types';

// Create a new product
async function createProduct(data: CreateProductData): Promise<IProduct> {
  const product = new Product(data);
  return await product.save();
}

// Get all products
async function getProducts(filter: Record<string, any> = {}): Promise<IProduct[]> {
  return await Product.find(filter);
}

// Get a product by ID
async function getProductById(id: string): Promise<IProduct | null> {
  return await Product.findById(id);
}

// Update a product by ID
async function updateProduct(id: string, data: UpdateProductData): Promise<IProduct | null> {
  return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

// Delete a product by ID
async function deleteProduct(id: string): Promise<IProduct | null> {
  return await Product.findByIdAndDelete(id);
}

export {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};