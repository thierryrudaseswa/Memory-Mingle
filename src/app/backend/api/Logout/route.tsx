import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Clear the 'token' cookie
    const response = new NextResponse('Logout successful', { status: 200 });
    response.cookies.delete("token");
    // response.cookies.set('token', '', { path: '/', expires: new Date(0) });

    return response;
  } catch (error: any) {
    console.error('Error in logout:', error);
    return new NextResponse('Error in logout: ' + error.message, { status: 500 });
  }
}
