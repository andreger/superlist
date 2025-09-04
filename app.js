const express = require("express");
const cors = require("cors");
const { connectToDatabase, mongoose } = require("./core/database");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize database connection
connectToDatabase();



// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Express.js + MongoDB API is running!",
    timestamp: new Date().toISOString(),
  });
});



// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    mongodb:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;