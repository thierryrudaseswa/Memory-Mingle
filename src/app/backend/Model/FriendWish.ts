import mongoose, { Schema, Document } from "mongoose";

export interface IWish extends Document {
    questionId: number;
    selectedOption: string;
}

const WishSchema: Schema = new Schema({
    questionId: { type: Number, required: true },
    selectedOption: { type: String, required: true },
});

const Wish = mongoose.models.Wish || mongoose.model<IWish>("Wish", WishSchema);
export default Wish;
