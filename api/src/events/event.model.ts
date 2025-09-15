import mongoose, { Schema } from "mongoose";
import { IEvent } from "../types";

const EventSchema = new Schema<IEvent>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: "",
  },
  cover: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    enum: ["wedding", "babyshower"],
    required: true,
  },
});

const Event = mongoose.model<IEvent>("Event", EventSchema);

export default Event;
