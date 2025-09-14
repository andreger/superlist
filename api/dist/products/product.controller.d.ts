import { CreateProductData, UpdateProductData, IProduct } from '../types';
declare function createProduct(data: CreateProductData): Promise<IProduct>;
declare function getProducts(filter?: Record<string, any>): Promise<IProduct[]>;
declare function getProductById(id: string): Promise<IProduct | null>;
declare function updateProduct(id: string, data: UpdateProductData): Promise<IProduct | null>;
declare function deleteProduct(id: string): Promise<IProduct | null>;
export { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
//# sourceMappingURL=product.controller.d.ts.map