
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


export const PATCH = async (request: Request) => {
    try {
        const { id, ...updateFields } = await request.json(); // Extract the ID and the fields to update
        await connectDB(); // Ensure you're connected to the database

        // Find the document by ID and update only the provided fields
        const updatedWish = await FriendSchema.findByIdAndUpdate(
            id,
            { $set: updateFields }, // Use $set to update only the specified fields
            { new: true, runValidators: true } // Return the updated document and run schema validation
        );

        if (!updatedWish) {
            return new NextResponse("Wish not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(updatedWish), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Error updating Wish: " + error.message, { status: 500 });
    }
};