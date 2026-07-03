import { createRouteMatcher } from "@clerk/nextjs/server";

export const protectedRoutes = [
  "/dashboard(.*)",
  "/mock-interview(.*)",
  "/resume-analyzer(.*)",
  "/analytics(.*)",
] as const;

export const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
] as const;

export const isProtectedRoute = createRouteMatcher([...protectedRoutes]);
export const isPublicRoute = createRouteMatcher([...publicRoutes]);
