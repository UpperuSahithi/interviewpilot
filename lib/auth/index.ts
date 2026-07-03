import "server-only";

import { auth, currentUser } from "@clerk/nextjs/server";

export {
  isProtectedRoute,
  isPublicRoute,
  protectedRoutes,
  publicRoutes,
} from "./routes";

export async function getAuthUserId() {
  const { userId } = await auth();
  return userId;
}

export async function requireAuthUserId() {
  const authState = await auth.protect();
  return authState.userId;
}

export { auth, currentUser };
