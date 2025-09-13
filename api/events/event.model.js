const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
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

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
