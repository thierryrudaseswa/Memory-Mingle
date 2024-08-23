import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
  try {
    // Get the JWT token from the request headers
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse('No token provided', { status: 401 });
    }

    const token = authHeader.substring(7); // Remove "Bearer " from the token

    // Verify the token using the secret from the environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    return new NextResponse(JSON.stringify({ user: decoded }), { status: 200 });
  } catch (error: any) {
    return new NextResponse('Invalid token', { status: 401 });
  }
}
