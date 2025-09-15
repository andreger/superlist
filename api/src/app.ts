import express from "express";
import cors from "cors";
import { connectToDatabase } from "./core/database";
import routes from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize database connection
connectToDatabase();

// Routes
app.use("/", routes);

export default app;
