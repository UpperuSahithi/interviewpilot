import { createRouteMatcher } from "@clerk/nextjs/server";

export const protectedRoutes = [
  "/dashboard(.*)",
  "/mock-interview(.*)",
  "/interview-history(.*)",
  "/interview-report(.*)",
  "/resume-analyzer(.*)",
  "/coding-tracker(.*)",
  "/analytics(.*)",
  "/study-planner(.*)",
  "/ai-coach(.*)",
  "/profile(.*)",
  "/settings(.*)",
] as const;

export const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/auth/login",
  "/auth/signup",
  "/auth/forgot-password",
] as const;

export const isProtectedRoute = createRouteMatcher([...protectedRoutes]);
export const isPublicRoute = createRouteMatcher([...publicRoutes]);
