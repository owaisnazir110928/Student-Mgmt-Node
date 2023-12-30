import mongoose, { Schema, Document } from 'mongoose';

export interface Admin extends Document {
  email: string;
  password: string;
}

const AdminSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model<Admin>('Admin', AdminSchema);

export default AdminModel;
