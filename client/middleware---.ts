// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const API_URL = 'https://fresco.md/api/users/me';


const fetchUserProfile = async (req: NextRequest) => {
  try {
    const res = await fetch(`${API_URL}`, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `access_token=${req?.cookies?.get('access_token')?.value}`
      },
      cache: 'no-store',
      credentials: "include"
    });
    console.log(req?.cookies?.get('access_token'))
    if (!res.ok) {
      throw new Error(`Failed to fetch user profile: ${res.status}`);
    }
    const data = await res.json();
    console.log('API Data:', data); 
    return data;
  } catch (error) {
    console.error('Fetch Error:', error);
    return null;
  }
};

export async function middleware(req: NextRequest) {

  const user = await fetchUserProfile(req);
  if (!user) {
    console.log('No user data, redirecting to /register');
    return NextResponse.redirect(new URL('/register', req.url));
  }

  console.log('User authenticated, proceeding');
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'],
};