"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
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
const Product = mongoose_1.default.model('Product', ProductSchema);
exports.default = Product;
//# sourceMappingURL=product.model.js.map