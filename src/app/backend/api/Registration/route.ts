import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "../../../../../config/database";
import User from "../../Model/Registration";

export const POST = async (request: Request) => {
  try {
    const { email, password, firstName, lastName } = await request.json();

    await connectDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return new NextResponse(JSON.stringify({ token }), {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse("Error in creating user: " + error.message, {
      status: 500,
    });
  }
};
