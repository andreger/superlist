"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = exports.mongoose = exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env['MONGODB_URI'] || "mongodb://admin:password@localhost:27017/myapp";
exports.MONGODB_URI = MONGODB_URI;
const connectToDatabase = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
exports.connectToDatabase = connectToDatabase;
mongoose_1.default.connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB");
});
mongoose_1.default.connection.on("error", (error) => {
    console.error("Mongoose connection error:", error);
});
mongoose_1.default.connection.on("disconnected", () => {
    console.log("Mongoose disconnected from MongoDB");
});
process.on("SIGINT", async () => {
    await mongoose_1.default.connection.close();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
});
//# sourceMappingURL=database.js.map