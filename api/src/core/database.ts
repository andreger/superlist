import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI: string =
  process.env["MONGODB_URI"] ||
  "mongodb://admin:password@localhost:27017/myapp";

// MongoDB connection function
export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Connection event listeners
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (error: Error) => {
  console.error("Mongoose connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});

export { mongoose, MONGODB_URI };
