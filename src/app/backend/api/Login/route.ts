import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '../../../../../config/database';
import User from '../../Model/Registration';

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const { email, password }: RequestBody = await request.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse('Invalid credentials', { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    // Set the JWT token as a cookie
    const response = new NextResponse(JSON.stringify({ success: true, message: "Login successful" }), { status: 200 });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return response;
  } catch (error: any) {
    console.error('Error in login:', error);
    return new NextResponse('Error in login: ' + error.message, { status: 500 });
  }
}
