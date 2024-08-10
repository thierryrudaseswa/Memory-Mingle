import mongoose,{Schema,Document} from "mongoose";
import { text } from "stream/consumers";

export interface ICelebrity {
  nameCelebrity: string;
  celtext:string;
}
export interface friend{
  friendName: string;
  friendText:string;
}


export interface IWish extends Document{
    name: string;
    text:string;
    answers: string[]; 
    age:number;
    agetext:string;
    wishing:string
    celebrities: ICelebrity[];
    friends: friend[]
}


const CelebritySchema: Schema = new Schema({
  nameCelebrity: {type: String, required:true},
  celtext: { type:String,required:true,minlength: 120,maxlength:550}
})


const friendSchema : Schema =new Schema({
  friendName :{type:String, required:true,},
  friendText :{ type:String,required:true,minlength: 120,maxlength:550}
})



const WishSchema: Schema = new Schema({
    name:{type:String,required:true,},
    age: { 
        type: Number,  // Updated: Added age field with Number type
        required: true, 
        min: 1,  // Minimum age value
        max: 120 //maximum age  value
      },


    text: { 
        type: String, 
        required: true, 
        minlength: 100, 
        maxlength: 250 
      },
   answers: {type :[String],required:true},
   agetext: { 
    type: String, 
    required: true, 
    minlength: 100, 
    maxlength: 250 
  },
  wishing: { 
    type: String, 
    required: true, 
    minlength: 100, 
    maxlength: 250 
  },
  celebrities :{type:[CelebritySchema ],required:true},
  friends :{type:[friendSchema],required:true}


});


export default mongoose.models.Wish || mongoose.model<IWish>('Wish',WishSchema);