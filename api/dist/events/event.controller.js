"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = createEvent;
exports.getEvents = getEvents;
exports.getEventById = getEventById;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;
const event_model_1 = __importDefault(require("./event.model"));
async function createEvent(data) {
    const event = new event_model_1.default(data);
    return await event.save();
}
async function getEvents(filter = {}) {
    return await event_model_1.default.find(filter);
}
async function getEventById(id) {
    return await event_model_1.default.findById(id);
}
async function updateEvent(id, data) {
    return await event_model_1.default.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}
async function deleteEvent(id) {
    return await event_model_1.default.findByIdAndDelete(id);
}
//# sourceMappingURL=event.controller.js.map