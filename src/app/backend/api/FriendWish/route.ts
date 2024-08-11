
import { request } from "http";
import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";

import FriendSchema from "../../Model/WishModel"


export const POST = async(request:Request) =>{
    try{
        await connectDB();
       
        const body =  await request.json();
        const newFriendWish = new FriendSchema(body)
        await newFriendWish.save();
        return new NextResponse(newFriendWish,{status:201})


    }catch(error:any){
        return new NextResponse("Error in creating data of the friend wish" + error.message, {
            status:500
        })
    }

}

export const GET = async(request:Request)=>{
    try {
        await connectDB();
        const data = await FriendSchema.find();

        // Remove the `_id` field from each document
        const filteredData = data.map((item) => {
            const { _id, ...rest } = item.toObject(); // `toObject` converts the document to a plain JavaScript object
            return rest;
        });

        // Convert the array to a JSON string and send it as a response
        const jsonResponse = JSON.stringify(filteredData);

        return new NextResponse(jsonResponse, { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error in fetching data: " + error.message, {
            status: 500,
        });
    }
}