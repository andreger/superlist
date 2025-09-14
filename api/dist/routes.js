"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_routes_1 = __importDefault(require("./products/product.routes"));
const event_routes_1 = __importDefault(require("./events/event.routes"));
const database_1 = require("./core/database");
const router = express_1.default.Router();
router.use("/products", product_routes_1.default);
router.use("/events", event_routes_1.default);
router.get("/", (_req, res) => {
    res.json({
        message: "Express.js + MongoDB API is running!",
        timestamp: new Date().toISOString(),
    });
});
router.get("/health", (_req, res) => {
    res.json({
        status: "healthy",
        mongodb: database_1.mongoose.connection.readyState === 1 ? "connected" : "disconnected",
        timestamp: new Date().toISOString(),
    });
});
exports.default = router;
//# sourceMappingURL=routes.js.map