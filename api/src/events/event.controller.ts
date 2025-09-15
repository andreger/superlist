import Event from "./event.model";
import { CreateEventData, UpdateEventData, IEvent } from "../types";

// Create a new event
export async function createEvent(data: CreateEventData): Promise<IEvent> {
  const event = new Event(data);
  return await event.save();
}

// Get all events
export async function getEvents(
  filter: Record<string, any> = {}
): Promise<IEvent[]> {
  return await Event.find(filter);
}

// Get an event by ID
export async function getEventById(id: string): Promise<IEvent | null> {
  return await Event.findById(id);
}

// Update an event by ID
export async function updateEvent(
  id: string,
  data: UpdateEventData
): Promise<IEvent | null> {
  return await Event.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

// Delete an event by ID
export async function deleteEvent(id: string): Promise<IEvent | null> {
  return await Event.findByIdAndDelete(id);
}
