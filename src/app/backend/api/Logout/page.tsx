import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return new NextResponse('Logout successful', { status: 200 });
  } catch (error: any) {
    console.error('Error in logout:', error);
    return new NextResponse('Error in logout: ' + error.message, { status: 500 });
  }
}
