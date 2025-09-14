"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("./event.controller");
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    try {
        const event = await (0, event_controller_1.createEvent)(req.body);
        res.status(201).json(event);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (_req, res) => {
    try {
        const events = await (0, event_controller_1.getEvents)();
        res.json(events);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const event = await (0, event_controller_1.getEventById)(req.params['id']);
        if (!event)
            return res.status(404).json({ error: 'Event not found' });
        return res.json(event);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const event = await (0, event_controller_1.updateEvent)(req.params['id'], req.body);
        if (!event)
            return res.status(404).json({ error: 'Event not found' });
        return res.json(event);
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const event = await (0, event_controller_1.deleteEvent)(req.params['id']);
        if (!event)
            return res.status(404).json({ error: 'Event not found' });
        return res.json({ message: 'Event deleted' });
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
exports.default = router;
//# sourceMappingURL=event.routes.js.map