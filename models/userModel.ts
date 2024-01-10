import mongoose, { Schema, Document } from 'mongoose';

interface User {
  username: string;
  email: string;
  password: string;
}

interface UserDocument extends User, Document {}

const userSchema: Schema<UserDocument> = new Schema({
  username: {
    type: String,
    required: [true, 'Must provide a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Must provide an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Must provide a password'],
  },
});

const UserModel = mongoose.models.UserModel || mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
