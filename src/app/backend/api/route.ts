import { request } from "http";
import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import Wish from "../Model/Model"

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

