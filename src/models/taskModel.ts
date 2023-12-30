import mongoose, { Schema, Document } from 'mongoose';

export interface Task extends Document {
  student: mongoose.Types.ObjectId;
  name: string;
  dueTime: Date;
  status: string; // Pending, Overdue, Completed, etc.
}

const TaskSchema: Schema = new Schema({
  student: { type: String, required: true },
  name: { type: String, required: true },
  dueTime: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'overdue', 'completed'], default: 'pending' },
});

const TaskModel = mongoose.model<Task>('Task', TaskSchema);

export default TaskModel;
