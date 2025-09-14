import { CreateEventData, UpdateEventData, IEvent } from '../types';
declare function createEvent(data: CreateEventData): Promise<IEvent>;
declare function getEvents(filter?: Record<string, any>): Promise<IEvent[]>;
declare function getEventById(id: string): Promise<IEvent | null>;
declare function updateEvent(id: string, data: UpdateEventData): Promise<IEvent | null>;
declare function deleteEvent(id: string): Promise<IEvent | null>;
export { createEvent, getEvents, getEventById, updateEvent, deleteEvent };
//# sourceMappingURL=event.controller.d.ts.map