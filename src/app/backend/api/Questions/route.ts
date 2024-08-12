import Question from "../../Model/Questions"
import connectDB from "../../../../../config/database";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        await connectDB();
        const body = await request.json();

        const newWish = new Question(body);
        await newWish.save();

        return NextResponse.json(newWish, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: "Error creating wish: " + error.message }, { status: 500 });
    }
};

export const GET = async () => {
    try {
        await connectDB();
        const wishes = await Question.find();

        return NextResponse.json(wishes, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: "Error fetching wishes: " + error.message }, { status: 500 });
    }
};