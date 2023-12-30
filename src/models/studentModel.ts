import mongoose, { Schema, Document } from 'mongoose';

export interface Student extends Document {
  name: string;
  email: string;
  department: string;
  password: string;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  password: { type: String, required: true },
});

const StudentModel = mongoose.model<Student>('Student', StudentSchema);

export default StudentModel;
