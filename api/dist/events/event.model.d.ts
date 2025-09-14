import mongoose from 'mongoose';
import { IEvent } from '../types';
declare const Event: mongoose.Model<IEvent, {}, {}, {}, mongoose.Document<unknown, {}, IEvent, {}, {}> & IEvent & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Event;
//# sourceMappingURL=event.model.d.ts.map