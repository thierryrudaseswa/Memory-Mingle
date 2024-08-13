import { request } from "http";
import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import Wish from "../Model/Model"
import FriendSchema from "../Model/WishModel"


// Post of the user only

export const POST = async( request:Request) =>{
    try{
        const body =    await request.json();
        await connectDB();
        const newNameandPara = new Wish(body);
        await newNameandPara.save();

        return new NextResponse(newNameandPara,{status:201})
    }catch(error:any){
        return new NextResponse("Error in creating name and text"  + error.message,{
            status: 500
        })
    }
}
// Getting data of user

export const GET = async (req: Request) => {
    try {
        await connectDB();
        const data = await Wish.find();

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
};



export const PATCH = async (request: Request) => {
    try {
        const { id, ...updateFields } = await request.json(); // Extract the ID and the fields to update
        await connectDB(); // Ensure you're connected to the database

        // Find the document by ID and update only the provided fields
        const updatedWish = await Wish.findByIdAndUpdate(
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


// post of the friend