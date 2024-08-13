import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import Question from "../../Model/Questions"; // Ensure the correct path to your model

export const POST = async (request: Request) => {
    try {
        await connectDB();
        const body = await request.json();

        // Validate that the body is an array of objects with required fields
        if (!Array.isArray(body) || !body.every(item => item.questionId && item.selectedOption)) {
            return NextResponse.json({ error: "Invalid data format." }, { status: 400 });
        }

        // Save each wish to the database
        const savedWishes = await Promise.all(body.map(async (wish) => {
            const newWish = new Question(wish);
            return await newWish.save();
        }));

        return NextResponse.json(savedWishes, { status: 201 });
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

export const PATCH = async (request: Request) => {
    try {
        await connectDB();
        const { id, ...updateFields } = await request.json(); // Extract the ID and the fields to update

        // Validate the ID and ensure it exists
        if (!id) {
            return NextResponse.json({ error: "ID is required." }, { status: 400 });
        }

        // Find the document by ID and update only the provided fields
        const updatedQuestion = await Question.findByIdAndUpdate(
            id,
            { $set: updateFields }, // Use $set to update only the specified fields
            { new: true, runValidators: true } // Return the updated document and run schema validation
        );

        if (!updatedQuestion) {
            return NextResponse.json({ error: "Question not found." }, { status: 404 });
        }

        return NextResponse.json(updatedQuestion, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: "Error updating question: " + error.message }, { status: 500 });
    }
};