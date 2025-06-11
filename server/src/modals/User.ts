import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  documents: mongoose.Types.ObjectId[];
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  documents: [{
    type: Schema.Types.ObjectId,
    ref: 'Document'
  }],
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);