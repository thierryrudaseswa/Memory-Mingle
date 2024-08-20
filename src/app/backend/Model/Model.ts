import mongoose, { Schema, Document } from "mongoose";

export interface ICelebrity {
  nameCelebrity: string;
  celtext: string;
}

export interface IFriend {
  friendName: string;
  friendText: string;
}

export interface IWish extends Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
  text: string;
  answers: string[];
  age: number;
  agetext: string;
  wishing: string;
  celebrities: ICelebrity[];
  friends: IFriend[];
}

const CelebritySchema: Schema = new Schema({
  nameCelebrity: { type: String, required: true },
  celtext: { type: String, required: true, minlength: 120, maxlength: 550 }
});

const FriendSchema: Schema = new Schema({
  friendName: { type: String, required: true },
  friendText: { type: String, required: true, minlength: 120, maxlength: 550 }
});

const WishSchema: Schema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true, minlength: 6 }, // Ensure password is hashed in practice
  age: { type: Number, required: true, min: 1, max: 120 },
  text: { type: String, required: true, minlength: 100, maxlength: 250 },
  answers: { type: [String], required: true },
  agetext: { type: String, required: true, minlength: 100, maxlength: 250 },
  wishing: { type: String, required: true, minlength: 100, maxlength: 250 },
  celebrities: { type: [CelebritySchema], required: true },
  friends: { type: [FriendSchema], required: true }
});

export default mongoose.models.Wish || mongoose.model<IWish>('Wish', WishSchema);
