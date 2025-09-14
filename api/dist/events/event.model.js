"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const EventSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    cover: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        enum: ['wedding', 'babyshower'],
        required: true
    }
});
const Event = mongoose_1.default.model('Event', EventSchema);
exports.default = Event;
//# sourceMappingURL=event.model.js.map