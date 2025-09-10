const express = require("express");

const productRoutes = require("./products/product.routes");
const eventRoutes = require("./products/event.routes");

const router = express.Router();


router.use("/products", productRoutes);
router.use("/events", eventRoutes);

router.get("/", (req, res) => {
  res.json({
    message: "Express.js + MongoDB API is running!",
    timestamp: new Date().toISOString(),
  });
});

router.get("/health", (req, res) => {
  const mongoose = require("./core/database").mongoose;
  res.json({
    status: "healthy",
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
