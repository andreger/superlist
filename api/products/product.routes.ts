import express, { Request, Response } from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from './product.controller';

const router = express.Router();

// Create a new product
router.post('/', async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all products
router.get('/', async (_req: Request, res: Response) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Get a product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params['id']!);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.json(product);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Update a product by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const product = await updateProduct(req.params['id']!, req.body);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.json(product);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Delete a product by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const product = await deleteProduct(req.params['id']!);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.json({ message: 'Product deleted' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;