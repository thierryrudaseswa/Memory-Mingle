import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// Method to compare passwords
UserSchema.methods.comparePassword = function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
