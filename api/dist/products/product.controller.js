"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = createProduct;
exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
const product_model_1 = __importDefault(require("./product.model"));
async function createProduct(data) {
    const product = new product_model_1.default(data);
    return await product.save();
}
async function getProducts(filter = {}) {
    return await product_model_1.default.find(filter);
}
async function getProductById(id) {
    return await product_model_1.default.findById(id);
}
async function updateProduct(id, data) {
    return await product_model_1.default.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}
async function deleteProduct(id) {
    return await product_model_1.default.findByIdAndDelete(id);
}
//# sourceMappingURL=product.controller.js.map