const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://admin:password@localhost:27017/myapp";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });



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