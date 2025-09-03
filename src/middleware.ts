import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware para proteger rutas /admin y /api
export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isApiRoute = request.nextUrl.pathname.startsWith('/api');

  if (isAdminRoute || isApiRoute) {
    const token = request.cookies.get('gbne_token')?.value;
    if (!token) {
      // Redirige a login si no hay token
      return NextResponse.redirect(new URL('/login', request.url));
    }
    // Aquí podrías validar el token con JWT, etc.
  }
  return NextResponse.next();
}

// Configura las rutas protegidas
export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};