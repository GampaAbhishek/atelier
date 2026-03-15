/**
 * Authentication Middleware
 * Protects routes by validating tokens
 * Runs on the server-side for security
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that don't require authentication
const PUBLIC_ROUTES = ["/login", "/oublier-mot-de-passe"];

// Routes that require authentication
const PROTECTED_ROUTES = [
  "/dashboard",
  "/mon-parc",
  "/ouvrir-un-ticket",
  "/mon-compte",
  "/historique",
  "/indicateurs-sla",
  "/foire-aux-questions",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if route is protected
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  // Check if route is public
  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  // Get token from cookies
  const accessToken = request.cookies.get("atelier_access_token")?.value;

  // If accessing protected route without token, redirect to login
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If accessing public route with token, allow it (may redirect from login to dashboard in client)
  if (isPublicRoute && accessToken) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)",
  ],
};
