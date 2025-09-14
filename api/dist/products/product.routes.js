"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    try {
        const product = await (0, product_controller_1.createProduct)(req.body);
        res.status(201).json(product);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (_req, res) => {
    try {
        const products = await (0, product_controller_1.getProducts)();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const product = await (0, product_controller_1.getProductById)(req.params['id']);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        return res.json(product);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const product = await (0, product_controller_1.updateProduct)(req.params['id'], req.body);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        return res.json(product);
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const product = await (0, product_controller_1.deleteProduct)(req.params['id']);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        return res.json({ message: 'Product deleted' });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.default = router;
//# sourceMappingURL=product.routes.js.map