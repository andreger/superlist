const Event = require('./event.model');

// Create a new event
async function createEvent(data) {
  const event = new Event(data);
  return await event.save();
}

// Get all events
async function getEvents(filter = {}) {
  return await Event.find(filter);
}

// Get an event by ID
async function getEventById(id) {
  return await Event.findById(id);
}

// Update an event by ID
async function updateEvent(id, data) {
  return await Event.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

// Delete an event by ID
async function deleteEvent(id) {
  return await Event.findByIdAndDelete(id);
}

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
