import express, { Request, Response } from 'express';
import productRoutes from './products/product.routes';
import eventRoutes from './events/event.routes';
import { mongoose } from './core/database';

const router = express.Router();

router.use("/products", productRoutes);
router.use("/events", eventRoutes);

router.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Express.js + MongoDB API is running!",
    timestamp: new Date().toISOString(),
  });
});

router.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "healthy",
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

export default router;