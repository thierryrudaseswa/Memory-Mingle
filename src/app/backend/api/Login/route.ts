import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "../../../../../config/database";
import User from "../../Model/Registration";
export const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();

    await connectDB();

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse("Invalid credentials", { status: 400 });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return new NextResponse(JSON.stringify({ token }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Error in login: " + error.message, {
      status: 500,
    });
  }
};
