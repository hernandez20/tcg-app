import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { nextUrl: url, cookies } = req;
  const session = cookies.get('session');

  if (url.pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/', url));
  }
  if (!session && url.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};