import mongoose,{Schema,Document} from "mongoose";
import { text } from "stream/consumers";

export interface IWish extends Document{
    name: string;
    text:string;
    images:string[];
}

const WishSchema: Schema = new Schema({
    name:{type:String,required:true,},

    text: { 
        type: String, 
        required: true, 
        minlength: 100, 
        maxlength: 250 
      },
    images:{type:[String],required:true}
});


export default mongoose.models.Wish || mongoose.model<IWish>('Wish',WishSchema);