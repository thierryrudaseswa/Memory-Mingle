import mongoose, { Schema, Document } from "mongoose";

export interface IWish extends Document {
    questionId: number;
    selectedOption: string;
}

const WishSchema: Schema = new Schema({
    questionId: { type: Number, required: true },
    selectedOption: { type: String, required: true },
});

const Question = mongoose.models.Question || mongoose.model<IWish>("Question", WishSchema);
export default Question;
