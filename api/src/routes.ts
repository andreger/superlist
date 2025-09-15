import express from "express";
import productRoutes from "./products/product.routes";
import eventRoutes from "./events/event.routes";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/events", eventRoutes);

export default router;
