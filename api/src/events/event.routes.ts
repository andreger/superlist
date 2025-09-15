import express, { Request, Response } from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "./event.controller";

const router = express.Router();

// Create a new event
router.post("/", async (req: Request, res: Response) => {
  try {
    const event = await createEvent(req.body);
    return res.status(201).json(event);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Get all events
router.get("/", async (_req: Request, res: Response) => {
  try {
    const events = await getEvents();
    return res.json(events);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Get an event by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Event ID is required" });

    const event = await getEventById(id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    return res.json(event);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Update an event by ID
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Event ID is required" });

    const event = await updateEvent(id, req.body);
    if (!event) return res.status(404).json({ error: "Event not found" });

    return res.json(event);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

// Delete an event by ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Event ID is required" });

    const event = await deleteEvent(id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    return res.json({ message: "Event deleted" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
