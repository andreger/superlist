import app from "./app";
import { MONGODB_URI } from "./core/database";
import dotenv from "dotenv";

dotenv.config();

const PORT: number = parseInt(process.env["PORT"] || "3000", 10);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`MongoDB URI: ${MONGODB_URI}`);
});
