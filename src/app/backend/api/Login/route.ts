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

    console.log('User:', user);

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log('Entered Password:', password);
    // console.log('Stored Hashed Password:', user.password);
    // console.log('Password match:', isMatch);
    // console.log("unmatched password:",!isMatch)

    if (!isMatch) {
      return new NextResponse('Invalid credentials of password', { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    console.log('Generated Token:', token);

    return new NextResponse(JSON.stringify({ token }), { status: 200 });
  } catch (error: any) {
    console.error('Error in login:', error);
    return new NextResponse('Error in login: ' + error.message, { status: 500 });
  }
}
