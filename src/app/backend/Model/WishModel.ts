import mongoose, { Document, Schema } from "mongoose";

// Interface for FriendWish
export interface IFriendWish extends Document {
    FriendWish: string;
    FriendName: string;
    GiftName: string;
}

// Schema for FriendWish
const FriendWishSchema: Schema = new Schema({
    FriendWish: { type: String, required: true },
    FriendName: { type: String, required: true, minlength: 120, maxlength: 450 },
    GiftName: { type: String, required: true }
});

// Exporting the model
export default mongoose.models.FriendWish || mongoose.model<IFriendWish>('FriendWish', FriendWishSchema);
