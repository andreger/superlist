"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./core/database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = parseInt(process.env['PORT'] || '3000', 10);
app_1.default.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`MongoDB URI: ${database_1.MONGODB_URI}`);
});
//# sourceMappingURL=server.js.map