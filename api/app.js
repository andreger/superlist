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

const routes = require('./routes');
app.use('/', routes);

module.exports = app;